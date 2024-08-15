import { useGSAP } from "@gsap/react";
import * as Dialog from "@radix-ui/react-dialog";
import gsap from "gsap";
import { Pencil, X } from "lucide-react";
import {
  CldUploadWidget,
  type CloudinaryUploadWidgetInfo,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

import { deleteFromCloudinary } from "~/components/cloudinary/cloudinaryDelete";
import ImageCarousel from "~/components/imageCarousel";
import QRCode from "~/components/profile/qrcode";
import { api } from "~/utils/api";

const DesktopVersion = ({ className }: { className?: string }) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();

  const { data: user } = api.user.getUser.useQuery();

  const updateProfile = api.user.editUser.useMutation({
    onSuccess: async () => {
      toast.dismiss();
      toast.success("Profile Picture changed successfully");
    },
    onError: async () => {
      toast.dismiss();
      toast.error("couldnt change profile picture");
    },
  });

  const { data: attendance } = api.attendance.getAttendanceByUserId.useQuery();

  const editUser = api.user.editUser.useMutation({
    onSuccess: async () => {
      router.refresh();
      toast.dismiss();
      toast.success("Profile changed successfully");
    },
    onError: ({ message }) => {
      toast.dismiss();
      toast.error(message);
    },
  });

  const { data: userEvents } = api.user.getUserEvents.useQuery();

  let images: string[] = [];
  if (userEvents) {
    images = userEvents.map((event) => event.imgSrc as unknown as string);
  }

  useGSAP(() => {
    gsap.from([".TopCard", ".BottomCard2"], {
      x: -300,
      opacity: 0,
      ease: "expo.out",
      duration: 1,
    });

    gsap.from([".BottomCard", ".RightDiv"], {
      x: 300,
      opacity: 0,
      ease: "expo.out",
      duration: 1,
    });
    gsap.from(".profileImage", {
      scale: 0,
      delay: 0.2,
      duration: 0.6,
      ease: "expo.out",
    });
  });

  //FIXME
  if (!user) return <>Error</>;

  return (
    <div
      className={`CardsContainer absolute left-1/2 h-full w-full -translate-x-1/2 gap-2 pb-4 pt-24 lg:w-[70vw] ${className}`}
    >
      {/* Left Divs */}
      <div className="min-w-1/2 flex flex-col gap-2">
        {/* Top card */}
        <div className="TopCard text-white-200 flex h-2/3 flex-col justify-evenly gap-3 rounded-lg border-2 border-border bg-card px-4">
          <div className="flex items-center justify-center self-center">
            {/* Profile Photo holder */}
            <div className="profileImage h-32 w-48 rounded-full border-4 border-white drop-shadow-md  ">
              {/* <Image
                  src={user?.image as unknown as string}
                  alt="Profile Image"
                  fill
                  className="rounded-full object-cover"
                /> */}
              {/* CLOUDINARY WORKS properly here */}
              <fieldset className="mb-[15px] flex items-center self-center text-foreground">
                <CldUploadWidget
                  signatureEndpoint="/api/cloudinary/sign"
                  onSuccess={(result: CloudinaryUploadWidgetResults) => {
                    const { info } = result;
                    const { secure_url: imageUrl } =
                      info as CloudinaryUploadWidgetInfo;

                    //deleting from cloudinary server
                    void deleteFromCloudinary(user.image as unknown as string);

                    if (imageUrl) {
                      // update our db with result
                      try {
                        void updateProfile.mutateAsync({
                          id: user.id,
                          image: imageUrl,
                        });
                      } catch (e) {
                        toast.dismiss();
                        toast.error("couldnt change profile picture");
                      }
                    }
                  }}
                >
                  {({ open }) => (
                    <>
                      <Image
                        src={user.image ?? ""}
                        alt={"Profile Image"}
                        width={100}
                        height={100}
                        className="m-auto rounded-full object-cover"
                      />

                      <div
                        className="absolute h-full  rounded-full bg-black/45"
                        onClick={() => open()}
                      ></div>
                      <Pencil
                        className="absolute left-1/2 -translate-x-[14px]"
                        width={28}
                        onClick={() => open()}
                      />
                    </>
                  )}
                </CldUploadWidget>
              </fieldset>
            </div>
            {/* Name Position & QR Div */}
            <div className="flex w-full flex-col items-center gap-2">
              <p className="text-2xl font-bold text-white"> {user?.name}</p>
              <p className="text-sm text-primary contrast-[0.55]">
                {user?.role}
              </p>
              <div className="flex gap-2">
                <Dialog.Root>
                  <Dialog.Trigger className="rounded-sm border border-white border-opacity-10 bg-white bg-opacity-5 px-2 text-xs">
                    Show QR
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black bg-opacity-90" />
                    <Dialog.Content className="fixed left-[50%] top-[50%] flex h-fit max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-2 rounded-[6px] border-2 border-border bg-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
                      <Dialog.Title className="text-center text-white">
                        PID
                      </Dialog.Title>
                      {user.memberSince && (
                        <QRCode pid={user.id} year={user.memberSince} />
                      )}
                      <Dialog.Close className="absolute right-2 top-2">
                        <X className="text-white opacity-30" />
                      </Dialog.Close>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger className="flex items-center gap-1 rounded-sm border border-white border-opacity-10 bg-white bg-opacity-5 px-2 text-xs">
                    Edit<Pencil className="w-3"></Pencil>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black bg-opacity-90" />
                    <Dialog.Content className="fixed left-[50%] top-[50%] flex h-fit max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-2 rounded-[6px] border-2 border-border bg-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
                      <Dialog.Title className=" m-0 text-[17px] font-medium text-white">
                        Edit Profile
                      </Dialog.Title>
                      <Dialog.Description className="mb-5 mt-[10px] text-sm leading-normal text-white opacity-50">
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                      </Dialog.Description>
                      {/* CLOUDINARY */}

                      <fieldset className="mb-[15px] flex items-center gap-5">
                        <label
                          className="w-[90px] text-right text-[15px] text-primary"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <input
                          className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] bg-black bg-opacity-10 px-[10px] text-xs leading-none text-primary shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                          id="name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          defaultValue={user?.name}
                        />
                      </fieldset>
                      <fieldset className="mb-[15px] flex items-center gap-5">
                        <label
                          className="w-[90px] text-right text-[15px] text-primary"
                          htmlFor="name"
                        >
                          Phone
                        </label>
                        <input
                          className="shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] bg-black bg-opacity-10 px-[10px] text-xs leading-none text-primary shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                          id="phone"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          defaultValue={user?.phone}
                        />
                      </fieldset>
                      {/*  <fieldset className="mb-[15px] flex items-center gap-5">
                          <label
                            className="w-[90px] text-right text-[15px] text-primary"
                            htmlFor="name"
                          >
                            Branch
                          </label>
                          <input
                            className="shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] bg-black bg-opacity-10 px-[10px] text-xs leading-none text-primary shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                            id="branch"
                            defaultValue=""
                          />
                        </fieldset> */}
                      <fieldset className="mb-[15px] flex items-center gap-5">
                        <label
                          className="w-[90px] text-right text-[15px] text-primary"
                          htmlFor="name"
                        >
                          Bio
                        </label>
                        <textarea
                          className="shadow-violet7 focus:shadow-violet8 inline-flex h-[70px] w-full flex-1 items-center justify-center rounded-[4px] bg-black bg-opacity-10 px-[10px] text-xs leading-none text-primary shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                          id="bio"
                          defaultValue={user?.bio ?? ""}
                          value={bio}
                          onChange={(e) => {
                            setBio(e.target.value);
                          }}
                        />
                      </fieldset>

                      <Dialog.Close asChild>
                        <button
                          onClick={async () => {
                            editUser.mutate({
                              id: user.id,
                              name,
                              phone,
                              bio,
                            });
                          }}
                          className="inline-flex h-[35px] max-w-[200px] items-center justify-center self-end rounded-[4px] bg-green-600 bg-opacity-90 px-[15px] font-medium leading-none text-white hover:bg-green-500 focus:shadow-[0_0_0_2px] focus:shadow-green-700 focus:outline-none"
                        >
                          Save changes
                        </button>
                      </Dialog.Close>
                      <Dialog.Close asChild className="absolute right-2 top-2">
                        <X className="w-4 text-white opacity-30" />
                      </Dialog.Close>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            </div>
          </div>

          {/* Phone & Email div */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <p className="text-white-200 text-sm">Phone</p>
              <p className="text-white">{user?.phone}</p>
            </div>
            <div>
              <p className="text-white-200 text-sm">Email</p>
              <p className="text-white">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom Events Card */}
        <div className="BottomCard2 text-white-200 flex h-1/3 flex-col gap-2 overflow-hidden rounded-lg border-2 border-border border-opacity-50 bg-card p-2 pr-0 backdrop-blur-[32px] backdrop-filter">
          <p className="EventsHeading text-md self-center font-bold text-white">
            My Events
          </p>
          <ImageCarousel images={images} />
        </div>
      </div>

      {/* Right Div */}
      <div className="RightDiv flex h-full w-full flex-col justify-between gap-2 overflow-auto rounded-lg border-2 border-border bg-card p-4">
        <div className="BioSection flex flex-col">
          <p className="text-sm text-white">Bio</p>
          <p className=" text-white-200 min-h-24">{user?.bio}</p>
        </div>

        {/* Year & Branch */}
        <div className="YearBranchSection flex flex-col">
          <p className="text-sm text-white">Year & Branch</p>
          <p className="text-white-200">{`${user?.year} - ${user?.Branch.name}`}</p>
        </div>

        {/* Activity Point */}
        <div className="ActivityPoint Section flex flex-col">
          <p className="text-sm text-white">Activity Point</p>
          <p className="text-white-200">{user?.totalActivityPoints}</p>
        </div>

        {/* Attendance */}
        <div className="Attendance Section order-2 flex flex-col">
          <p className="text-sm text-white">Attendance</p>
          <p className="text-white-200">{attendance}%</p>
        </div>

        {/* Certificates */}
        <div className="Attendance Section order-2 flex flex-col gap-2">
          <p className="text-sm text-white">Certificates</p>
          <div className="CertificatesCard text-white-200 h-[25vh] w-full overflow-hidden pr-0 backdrop-blur-[32px] backdrop-filter">
            <ImageCarousel images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopVersion;
