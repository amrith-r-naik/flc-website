import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Pencil, UserRoundIcon, X } from "lucide-react";
import ImageCarousel from "~/components/imageCarousel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as Dialog from "@radix-ui/react-dialog";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";
import { GetServerSideProps } from "next";
import { api } from "~/utils/api";
import { toast, Toaster } from "sonner"
import { CldUploadWidget } from "next-cloudinary";
import { deleteFromCloudinary } from "~/components/cloudinary/cloudinaryDelete";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  return {
    props: { session },
  };
};
const Profile = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (status !== "authenticated" && typeof window !== 'undefined') {
      router.push('/');
    }

  }, [status]);

  if (!session) {
    return <></>
  }
  const { data: user, isLoading, error } = api.user.getUser.useQuery({ id: session.user.id })
  const { data: attendance } = api.attendance.getAttendanceByUserId.useQuery({ id: session.user.id })
  const { data: userEvents } = api.user.getUserEvents.useQuery({ id: session.user.id })
  const updateProfile = api.user.editUser.useMutation()
  console.log("events: ", userEvents)

  const editUser = api.user.editUser.useMutation({
    onSuccess: async (data) => {
      router.refresh()
      toast.dismiss();
      toast.success("Profile changed successfully");
    },
    onError: ({ message }) => {
      toast.dismiss();
      toast.error(message);
    },
  });
  useEffect(() => {
    if (user?.userProfile) {
      setName(user.userProfile.name);
      setPhone(user.userProfile.phone);
      setBio(user.userProfile.bio ?? "");
    }
  }, [user]);
  let seeMoreTimeline: gsap.core.Timeline;
  gsap.registerPlugin(useGSAP);

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

  const images: string[] = [
    "/poster1.webp",
    "/poster2.webp",
    "/poster3.webp",
    "/poster4.webp",
    "/poster5.webp",
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <p>User not found</p>
  }
  if (error) {
    return <div>Error loading user</div>;
  }

  return (
    <main className="absolute top-0 -z-10 h-screen w-screen overflow-x-hidden bg-background ">
      {/* The background design */}
      {/* <div className="BackgroundDesign absolute z-0 h-[40dvh] w-full">
        <iframe
          className=" hover:cursor-pointer"
          src="https://my.spline.design/waves-154a3cc8dbc6ed08cdd227da718b6aed/"
          width="100%"
          height="100%"
        ></iframe>
      </div> */}
      <Toaster position="bottom-center" />

      {/* Mobile Version */}
      <div className="CardsContainer absolute bottom-0 flex w-full flex-col gap-2 p-4 sm:hidden">
        {/* Top card */}
        <div className="TopCard rounded-lg border-2 border-border bg-card text-white-200">
          {/* Profile Photo holder */}
          <div className="profileImage absolute left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-border drop-shadow-md  ">
            <Image
              src="/My_photo_suit.jpg"
              alt="Profile Image"
              fill
              className="rounded-full object-cover"
            />
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
                  <Dialog.Title className="text-center">Your QR</Dialog.Title>
                  <Image
                    src={"/poster1.webp"}
                    alt="QR Image"
                    height={450}
                    width={450}
                    objectFit="cover"
                  />
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
                  {/* Copy paste the below snippet as many times as needed */}
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
                      defaultValue={user?.userProfile.name}
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
                      defaultValue={user?.userProfile.phone}
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
                      defaultValue={user?.userProfile.bio || ""}
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
                      defaultValue={user?.userProfile.bio ?? ""}
                      value={bio}
                      onChange={(e) => {
                        setBio(e.target.value);
                      }}
                    />
                  </fieldset>
                  <fieldset className="mb-[15px] flex items-center gap-5">
                    <label
                      className="w-[90px] text-right text-[15px] text-primary"
                      htmlFor="name"
                    >
                      Profile picture
                    </label>

                    {/* <textarea
                      className="shadow-violet7 focus:shadow-violet8 inline-flex h-[70px] w-full flex-1 items-center justify-center rounded-[4px] bg-black bg-opacity-10 px-[10px] text-xs leading-none text-primary shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                      id="bio"
                      defaultValue={user?.userProfile.bio || ""}
                      value={bio}
                      onChange={(e) => {setBio(e.target.value)}}
                    /> */}
                  </fieldset>
                  <Dialog.Close asChild>
                    <button
                      onClick={async () => {
                        editUser.mutate({
                          id: user.userProfile.id,
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

            {/* CLOUDINARY */}
            <fieldset className="flex items-center text-white">
              <CldUploadWidget
                signatureEndpoint="/api/cloudinary/sign"
                onSuccess={(result) => {
                  const imageUrl = result?.info?.url as string;
                  console.log(imageUrl);
                  alert(imageUrl);

                  //deleting from cloudinary server
                  void deleteFromCloudinary(
                    user?.userProfile as unknown as string,
                  );

                  // update our db with result
                  void updateProfile.mutateAsync({
                    id: session.user.id,
                    profilePicture: imageUrl,
                  });
                }}
              >
                {({ open }) => <button onClick={() => open()}>Edit Pic</button>}
              </CldUploadWidget>
              <Image
                src={user?.userProfile as unknown as string}
                alt={"ur profile picture"}
                width={12}
                height={12}
              ></Image>
            </fieldset>
          </div>

          {/* Card Body */}
          <div className="mt-16 flex w-full flex-col gap-3 overflow-scroll px-4 pb-2">
            {/* Name and Position Div */}
            <div className="flex w-full flex-col items-center">
              <p className="text-2xl font-bold text-white">
                {user?.userProfile.name}
              </p>
              <p className="text-sm text-primary contrast-[0.55]">Member</p>
            </div>

            {/* Phone & Email div */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <p className="text-sm text-white-200">Phone</p>
                <p className="text-white">9876543210</p>
              </div>
              <div>
                <p className="text-sm text-white-200">Email</p>
                <p className="text-white">nnm22gg070@nmamit.in</p>
              </div>
            </div>

            {/* See more */}
            <div
              className="SeeMoreOption text-card-foreground flex items-center justify-center gap-1 text-sm"
              onClick={() => {
                seeMoreTimeline.play();
              }}
            >
              <p>See more</p>
              <ChevronDown size={16} className="translate-y-[1px]" />
            </div>

            {/* Bio */}
            <div className="BioSection hidden  flex-col">
              <p className="text-sm text-white-200">Bio</p>
              <p className=" text-white">{user?.userProfile.bio}</p>
            </div>

            {/* Year & Branch */}
            <div className="YearBranchSection hidden flex-col">
              <p className="text-sm text-white-200">Year & Branch</p>
              <p className="text-white">3rd - Computer Science</p>
            </div>

            {/* Activity Point */}
            <div className="ActivityPoint Section hidden flex-col">
              <p className="text-sm text-white-200">Activity Point</p>
              <p className="text-white">70</p>
            </div>

            {/* Attendance */}
            <div className="Attendance Section order-2 hidden flex-col">
              <p className="text-sm text-white-200">Attendance</p>
              <p className="text-white">{attendance}%</p>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <p className="CertificatesHeading ml-2 hidden text-sm font-medium text-white-200">
          Certificates
        </p>
        <div className="CertificatesCard hidden h-[25vh] w-full overflow-hidden rounded-lg border-2 border-border border-opacity-50 bg-card p-2 pr-0 text-white-200 backdrop-blur-[32px] backdrop-filter">
          <ImageCarousel images={images} />
        </div>

        {/* Bottom Events Card */}
        <p className="EventsHeading BottomCard -mb-1 ml-2 text-sm font-medium text-white-200">
          My Events
        </p>
        <div className="BottomCard flex h-[25vh] w-full overflow-hidden rounded-lg border-2 border-border border-opacity-50 bg-card p-2 pr-0 text-white-200 backdrop-blur-[32px] backdrop-filter">
          <ImageCarousel images={images} />
        </div>
        <div
          className="SeeLessOption text-card-foreground mt-2 hidden items-center justify-center gap-1 text-sm"
          onClick={() => {
            seeMoreTimeline.reverse();
          }}
        >
          <p>See less</p>
          <ChevronUp size={16} className="translate-y-[1px]" />
        </div>
      </div>

      {/* Desktop Version*/}
      <div className="CardsContainer absolute left-1/2 hidden h-full w-full -translate-x-1/2 gap-2 pb-4 pt-24 sm:flex lg:w-[70vw]">
        {/* Left Divs */}
        <div className="min-w-1/2 flex flex-col gap-2">
          {/* Top card */}
          <div className="TopCard flex h-2/3 flex-col justify-evenly gap-3 rounded-lg border-2 border-border bg-card px-4 text-white-200">
            <div className="flex items-center justify-center self-center">
              {/* Profile Photo holder */}
              <div className="profileImage h-32 w-48 rounded-full border-4 border-white drop-shadow-md  ">
                <Image
                  src="/My_photo_suit.jpg"
                  alt="Profile Image"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              {/* Name Position & QR Div */}
              <div className="flex w-full flex-col items-center gap-2">
                <p className="text-2xl font-bold text-white">
                  {" "}
                  {user?.userProfile.name}
                </p>
                <p className="text-sm text-primary contrast-[0.55]">
                  {user?.userProfile.role}
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
                          Your QR
                        </Dialog.Title>
                        <Image
                          src={"/poster1.webp"}
                          alt="QR Image"
                          height={450}
                          width={450}
                          objectFit="cover"
                        />
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
                        {/* Copy paste the below snippet as many times as needed */}
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
                            defaultValue={user?.userProfile.name}
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
                            defaultValue={user?.userProfile.phone}
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
                            defaultValue={user?.userProfile.bio ?? ""}
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
                                id: user.userProfile.id,
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
                        <Dialog.Close
                          asChild
                          className="absolute right-2 top-2"
                        >
                          <X className="w-4 text-white opacity-30" />
                        </Dialog.Close>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>

                  {/* CLOUDINARY */}
                  <fieldset className="flex items-center text-white">
                    <CldUploadWidget
                      signatureEndpoint="/api/cloudinary/sign"
                      onSuccess={(result) => {
                        const imageUrl = result?.info?.url as string;
                        console.log(imageUrl);
                        alert(imageUrl);

                        //deleting from cloudinary server
                        void deleteFromCloudinary(
                          user?.userProfile as unknown as string,
                        );

                        // update our db with result
                        void updateProfile.mutateAsync({
                          id: session.user.id,
                          profilePicture: imageUrl,
                        });
                      }}
                    >
                      {({ open }) => (
                        <button onClick={() => open()}>Edit Pic</button>
                      )}
                    </CldUploadWidget>
                    <Image
                      src={user?.userProfile as unknown as string}
                      alt={"ur profile picture"}
                      width={12}
                      height={12}
                    ></Image>
                  </fieldset>
                </div>
              </div>
            </div>

            {/* Phone & Email div */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <p className="text-sm text-white-200">Phone</p>
                <p className="text-white">{user?.userProfile.phone}</p>
              </div>
              <div>
                <p className="text-sm text-white-200">Email</p>
                <p className="text-white">{user?.userProfile.email}</p>
              </div>
            </div>
          </div>

          {/* Bottom Events Card */}
          <div className="BottomCard2 flex h-1/3 flex-col gap-2 overflow-hidden rounded-lg border-2 border-border border-opacity-50 bg-card p-2 pr-0 text-white-200 backdrop-blur-[32px] backdrop-filter">
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
            <p className=" min-h-24 text-white-200">{user?.userProfile.bio}</p>
          </div>

          {/* Year & Branch */}
          <div className="YearBranchSection flex flex-col">
            <p className="text-sm text-white">Year & Branch</p>
            <p className="text-white-200">{`${user?.userProfile.year} - ${user?.userProfile.Branch.name}`}</p>
          </div>

          {/* Activity Point */}
          <div className="ActivityPoint Section flex flex-col">
            <p className="text-sm text-white">Activity Point</p>
            <p className="text-white-200">
              {user?.userProfile.totalActivityPoints}
            </p>
          </div>

          {/* Attendance */}
          <div className="Attendance Section order-2 flex flex-col">
            <p className="text-sm text-white">Attendance</p>
            <p className="text-white-200">{attendance}%</p>
          </div>

          {/* Certificates */}
          <div className="Attendance Section order-2 flex flex-col gap-2">
            <p className="text-sm text-white">Certificates</p>
            <div className="CertificatesCard h-[25vh] w-full overflow-hidden pr-0 text-white-200 backdrop-blur-[32px] backdrop-filter">
              <ImageCarousel images={images} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;