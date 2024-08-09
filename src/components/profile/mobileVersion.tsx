// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

import ImageCarousel from "~/components/imageCarousel";
import { api } from "~/utils/api";

import QrAndEdit from "./qrAndEdit";

const MobileVersion = ({ className }: { className?: string }) => {
  const [opened, setOpened] = useState(false);

  const { data: user } = api.user.getUser.useQuery();

  const { data: attendance } = api.attendance.getAttendanceByUserId.useQuery();

  const { data: userEvents } = api.user.getUserEvents.useQuery();

  let images: string[] = [];
  if (userEvents) {
    images = userEvents.map((event) => event.imgSrc as unknown as string);
  }

  // gsap.registerPlugin(useGSAP);
  // let seeMoreTimeline: gsap.core.Timeline = gsap.timeline();

  // useGSAP(() => {
  //   seeMoreTimeline = gsap.timeline({ paused: true });
  //   seeMoreTimeline
  //     .to(
  //       ".BackgroundDesign",
  //       {
  //         autoAlpha: 0.03,
  //       },
  //       0,
  //     )
  //     .to(
  //       [".SeeMoreOption"],
  //       {
  //         display: "none",
  //         opacity: 0,
  //         position: "absolute",
  //         duration: 0,
  //       },
  //       0,
  //     )
  //     .to(
  //       [
  //         ".SeeLessOption",
  //         ".BioSection",
  //         ".YearBranchSection",
  //         ".ActivityPointSection",
  //         ".AttendanceSection",
  //         ".CertificatesCard",
  //       ],
  //       {
  //         display: "flex",
  //       },
  //       0,
  //     )
  //     .to(".CertificatesHeading", { display: "block" }, 0)
  //     .to(
  //       ".CardsContainer",
  //       {
  //         bottom: "auto",
  //         top: "20vh",
  //         gap: 0,
  //       },
  //       0,
  //     )
  //     .to(
  //       ".EventsHeading",
  //       {
  //         paddingLeft: "0.5rem",
  //         marginBottom: "0.5rem",
  //         marginTop: "0.25rem",
  //       },
  //       0,
  //     )
  //     .to(
  //       ".TopCard",
  //       {
  //         border: "none",
  //         backgroundColor: "rgba(34, 34, 34, 0)",
  //       },
  //       0,
  //     );
  // });

  //FIXME
  if (!user) return <>Error</>;
  else {
    return (
      <div
        className={`CardsContainer ${opened ? "bottom-auto top-[22vh] gap-0" : "bottom-0 top-[16vh] gap-2"} flex w-full flex-col p-4 ${className}`}
      >
        {/* QR and Edit Options when not opened */}
        <QrAndEdit
          classname={`w-full  ${opened ? "visible absolute -top-[10vh] px-2 py-1" : "invisible "}`}
        />

        {/* Top card */}
        <div
          className={`TopCard w-full rounded-lg ${opened ? "border-none bg-background" : "border-2 border-border bg-card"}`}
        >
          {/* Profile Photo holder */}
          <div className="profileImage absolute left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-border drop-shadow-md  ">
            <Image
              src={user.image ?? "no-profile-picture-icon.jpg"}
              alt="Profile Image"
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* QR and Edit Options when not opened */}
          <QrAndEdit
            classname={`w-full p-1 ${opened ? "invisible" : "visible"}`}
          />

          {/* Card Body */}
          <div className="mt-10 flex w-full flex-col gap-1 overflow-scroll px-4">
            {/* Name and Position Div */}
            <div className="flex w-full flex-col items-center">
              <p className="text-2xl font-bold text-foreground">{user?.name}</p>
              <p className="text-sm text-primary contrast-[0.55]">
                {user.role} - {user.position}
              </p>
            </div>

            {/* Phone & Email div */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <p className="text-sm text-foreground/70">Phone</p>
                <p className="text-foreground">
                  {/* TODO - handle no phone number case */}
                  {user.phone}
                </p>
              </div>
              <div>
                <p className="text-sm text-foreground/70">Email</p>
                <p className="text-foreground">{user.email}</p>
              </div>
            </div>

            {/* See more */}
            <div
              className={`SeeMoreOption ${opened ? "hidden" : "flex"} items-center justify-center gap-1 pt-2 text-sm font-light text-card-foreground/50`}
              onClick={() => {
                setOpened(true);
                // seeMoreTimeline.play();
              }}
            >
              <p>See more</p>
              <ChevronDown size={16} className="translate-y-[1px]" />
            </div>

            {/* Bio */}
            <div
              className={`BioSection ${opened ? "flex" : "hidden"} flex-col`}
            >
              <p className="text-sm text-foreground/70">Bio</p>
              <p className=" text-whtext-opacity-50 ite">
                {/* TODO - Integrate and also handle 'bio not added case' */}f
              </p>
            </div>

            {/* Year & Branch */}
            <div
              className={`YearBranchSection ${opened ? "flex" : "hidden"} flex-col`}
            >
              <p className="tex-primary/70 text-sm">Year & Branch</p>
              <p className="text-foreground">3rd - Computer Science</p>
            </div>

            {/* Activity Point */}
            <div
              className={`ActivityPoint Section ${opened ? "flex" : "hidden"} flex-col`}
            >
              <p className="text-sm text-foreground/70">Activity Point</p>
              <p className="text-foreground">70</p>
            </div>

            {/* Attendance */}
            <div
              className={`Attendance Section ${opened ? "flex" : "hidden"} flex-col`}
            >
              <p className="text-sm text-foreground/70">Attendance</p>
              <p className="text-foreground">{attendance}%</p>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <p
          className={`CertificatesHeading ml-2 text-foreground/70 ${opened ? "block" : "hidden"} text-sm font-medium`}
        >
          Certificates
        </p>
        <div
          className={`CertificatesCard text-foreground/70 ${opened ? "block" : "hidden"} h-[25vh] w-full overflow-hidden rounded-lg border-2 border-border border-opacity-50 bg-card p-2 pr-0 backdrop-blur-[32px] backdrop-filter`}
        >
          <ImageCarousel images={images} />
        </div>

        {/* Bottom Events Card */}
        <p
          className={`EventsHeading BottomCard ${opened ? "mt-2 text-foreground/70" : "-mb-1 text-foreground"} ml-2 text-sm font-medium `}
        >
          My Events
        </p>
        <div
          className={`BottomCard h-[25vh] w-full overflow-hidden rounded-lg border-2 border-border border-opacity-50 bg-card p-2 pr-0 text-foreground/70 backdrop-blur-[32px] backdrop-filter`}
        >
          <ImageCarousel images={images} />
        </div>

        <div
          className={`SeeLessOption mt-2 ${opened ? "flex" : "hidden"} items-center justify-center gap-1 text-sm text-card-foreground`}
          onClick={() => {
            setOpened(false);
            // seeMoreTimeline.reverse();
          }}
        >
          <p>See less</p>
          <ChevronUp size={16} className="translate-y-[1px]" />
        </div>
      </div>
    );
  }
};

export default MobileVersion;
