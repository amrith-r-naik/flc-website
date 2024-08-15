import { useGSAP } from "@gsap/react";
import * as Dialog from "@radix-ui/react-dialog";
import { type inferProcedureOutput } from "@trpc/server";
import gsap from "gsap";
import { ChevronDown, ChevronUp, Pencil, X } from "lucide-react";
import {
  CldUploadWidget,
  type CloudinaryUploadWidgetInfo,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { type FunctionComponent, useState } from "react";
import { toast } from "sonner";

import { type AppRouter } from "~/server/api/root";

import { deleteFromCloudinary } from "~/components/cloudinary/cloudinaryDelete";
import ImageCarousel from "~/components/imageCarousel";
import QRCode from "~/components/profile/qrcode";
import { api } from "~/utils/api";

const MobileVersion: FunctionComponent<{
  className?: string;
  user: inferProcedureOutput<AppRouter["user"]["getUser"]>;
}> = ({ className, user }) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();

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

  gsap.registerPlugin(useGSAP);
  let seeMoreTimeline: gsap.core.Timeline = gsap.timeline();

  useGSAP(() => {
    seeMoreTimeline = gsap.timeline({ paused: true });
    seeMoreTimeline
      .to(
        ".BackgroundDesign",
        {
          autoAlpha: 0.03,
        },
        0,
      )
      .to(
        [".SeeMoreOption"],
        {
          display: "none",
          opacity: 0,
          position: "absolute",
          duration: 0,
        },
        0,
      )
      .to(
        [
          ".SeeLessOption",
          ".BioSection",
          ".YearBranchSection",
          ".ActivityPointSection",
          ".AttendanceSection",
          ".CertificatesCard",
        ],
        {
          display: "flex",
        },
        0,
      )
      .to(".CertificatesHeading", { display: "block" }, 0)
      .to(
        ".CardsContainer",
        {
          bottom: "auto",
          top: "20vh",
          gap: 0,
        },
        0,
      )
      .to(
        ".EventsHeading",
        {
          paddingLeft: "0.5rem",
          marginBottom: "0.5rem",
          marginTop: "0.25rem",
        },
        0,
      )
      .to(
        ".TopCard",
        {
          border: "none",
          backgroundColor: "rgba(34, 34, 34, 0)",
        },
        0,
      );
  });

  return (
    <div
      className={`CardsContainer bottom-0 flex w-full flex-col gap-2 p-4 ${className}`}
    >
      {/* Top card */}
      <div className="TopCard text-white-200 rounded-lg border-2 border-border bg-card">
        {/* Profile Photo holder */}
        <div className="profileImage absolute left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-border drop-shadow-md  ">
          {/* <Image
              src="/My_photo_suit.jpg"
              alt="Profile Image"
              fill
              className="rounded-full object-cover"
            /> */}
          {/* CLOUDINARY WORKS properly here */}
          <fieldset className="mb-[15px] flex w-[100px] items-center self-center text-foreground">
            <CldUploadWidget
              signatureEndpoint="/api/cloudinary/sign"
              onSuccess={(result: CloudinaryUploadWidgetResults) => {
                const { info } = result;
                const { secure_url: imageUrl } =
                  info as CloudinaryUploadWidgetInfo;

                //deleting from cloudinary server
                void deleteFromCloudinary(user.image as unknown as string);

                if (imageUrl) {
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
                    alt={"ur profile picture"}
                    width={100}
                    height={100}
                    onClick={() => open()}
                    className=" m-auto h-full  border-spacing-10 overflow-hidden rounded-full border-4 border-primary object-cover"
                  ></Image>
                  <div className="absolute h-full  rounded-full bg-black/45"></div>
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

        {/* QR and Edit Options */}
        <div className="absolute flex w-full justify-between px-2 py-2">
          <Dialog.Root>
            <Dialog.Trigger className="rounded-sm border border-white border-opacity-10 bg-white bg-opacity-5 px-2 text-xs">
              Show QR
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black bg-opacity-90" />
              <Dialog.Content className="fixed left-[50%] top-[50%] flex h-fit max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-2 rounded-[6px] border-2 border-border bg-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
                <Dialog.Title className="text-center">PID</Dialog.Title>
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
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </Dialog.Description>

                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label
                    className="w-[90px] text-right text-[15px] text-primary"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className=" inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] bg-black bg-opacity-10 px-[10px] text-xs leading-none text-primary shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
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
                      Bio
                    </label>
                    <input
                      className="shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] bg-black bg-opacity-10 px-[10px] text-xs leading-none text-primary shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                      id="bio"
                      defaultValue={user?.bio || ""}
                      value={bio}
                      onChange={(e) => {setBio(e.target.value)}}
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

        {/* Card Body */}
        <div className="mt-16 flex w-full flex-col gap-3 overflow-scroll px-4 pb-2">
          {/* Name and Position Div */}
          <div className="flex w-full flex-col items-center">
            <p className="text-2xl font-bold text-white">{user?.name}</p>
            <p className="text-sm text-primary contrast-[0.55]">Member</p>
          </div>

          {/* Phone & Email div */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <p className="text-white-200 text-sm">Phone</p>
              <p className="text-white">9876543210</p>
            </div>
            <div>
              <p className="text-white-200 text-sm">Email</p>
              <p className="text-white">nnm22gg070@nmamit.in</p>
            </div>
          </div>

          {/* See more */}
          <div
            className="SeeMoreOption flex items-center justify-center gap-1 text-sm text-card-foreground"
            onClick={() => {
              seeMoreTimeline.play();
            }}
          >
            <p>See more</p>
            <ChevronDown size={16} className="translate-y-[1px]" />
          </div>

          {/* Bio */}
          <div className="BioSection hidden  flex-col">
            <p className="text-white-200 text-sm">Bio</p>
            <p className=" text-white">{user?.bio}</p>
          </div>

          {/* Year & Branch */}
          <div className="YearBranchSection hidden flex-col">
            <p className="text-white-200 text-sm">Year & Branch</p>
            <p className="text-white">3rd - Computer Science</p>
          </div>

          {/* Activity Point */}
          <div className="ActivityPoint Section hidden flex-col">
            <p className="text-white-200 text-sm">Activity Point</p>
            <p className="text-white">70</p>
          </div>

          {/* Attendance */}
          <div className="Attendance Section order-2 hidden flex-col">
            <p className="text-white-200 text-sm">Attendance</p>
            <p className="text-white">{attendance}%</p>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <p className="CertificatesHeading text-white-200 ml-2 hidden text-sm font-medium">
        Certificates
      </p>
      <div className="CertificatesCard text-white-200 hidden h-[25vh] w-full overflow-hidden rounded-lg border-2 border-border border-opacity-50 bg-card p-2 pr-0 backdrop-blur-[32px] backdrop-filter">
        <ImageCarousel images={images} />
      </div>

      {/* Bottom Events Card */}
      <p className="EventsHeading BottomCard text-white-200 -mb-1 ml-2 text-sm font-medium">
        My Events
      </p>
      <div className="BottomCard text-white-200 flex h-[25vh] w-full overflow-hidden rounded-lg border-2 border-border border-opacity-50 bg-card p-2 pr-0 backdrop-blur-[32px] backdrop-filter">
        <ImageCarousel images={images} />
      </div>
      <div
        className="SeeLessOption mt-2 hidden items-center justify-center gap-1 text-sm text-card-foreground"
        onClick={() => {
          seeMoreTimeline.reverse();
        }}
      >
        <p>See less</p>
        <ChevronUp size={16} className="translate-y-[1px]" />
      </div>
    </div>
  );
};

export default MobileVersion;
