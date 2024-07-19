import Image from "next/image";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ImageCarousel from "~/components/imageCarousel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Profile = () => {
  let seeMoreTimeline: gsap.core.Timeline, seeLessTimeline: gsap.core.Timeline;

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from(".TopCard", {
      x: -300,
      opacity: 0,
      ease: "expo.out",
      duration: 1,
    });

    gsap.from(".BottomCard", {
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

    seeLessTimeline = gsap.timeline({ paused: true });
    seeLessTimeline
      .to(
        ".BackgroundDesign",
        {
          autoAlpha: 1,
        },
        0,
      )
      .to(
        [".SeeMoreOption"],
        {
          display: "flex",
          opacity: 100,
          position: "static",
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
          ".CertificatesHeading",
        ],
        {
          display: "none",
        },
        0,
      )
      .to(
        ".CardsContainer",
        {
          bottom: 0,
          top: "auto",
          gap: 2,
        },
        0,
      )
      .to(
        ".EventsHeading",
        {
          paddingLeft: "auto",
          marginBottom: "-0.25rem",
          marginTop: "auto",
        },
        0,
      )
      .to(
        ".TopCard",
        {
          border: "2px solid var(--border)",
          backgroundColor: "var(--card)",
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

  return (
    <main className="absolute top-0 -z-10 h-screen w-screen overflow-x-hidden bg-background">
      {/* The background design */}
      {/* <div className="BackgroundDesign absolute z-0 h-[40dvh] w-full">
        <iframe
          className=" hover:cursor-pointer"
          src="https://my.spline.design/waves-154a3cc8dbc6ed08cdd227da718b6aed/"
          width="100%"
          height="100%"
        ></iframe>
      </div> */}

      <div className="CardsContainer absolute bottom-0 flex w-full flex-col gap-2 p-4">
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
          {/* Card Body */}
          <div className="mt-16 flex w-full flex-col gap-3 overflow-scroll px-4 pb-2">
            {/* Name and Position Div */}
            <div className="flex w-full flex-col items-center">
              <p className="text-2xl font-bold text-white">Jackie Chan</p>
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
              className="SeeMoreOption flex items-center justify-center gap-1 text-sm text-card-foreground"
              onClick={() => {
                seeMoreTimeline.play();
                seeLessTimeline.seek(0);
              }}
            >
              <p>See more</p>
              <ChevronDown size={16} className="translate-y-[1px]" />
            </div>

            {/* Bio */}
            <div className="BioSection hidden  flex-col">
              <p className="text-sm text-white-200">Bio</p>
              <p className=" text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                provident perferendis dolorem libero dignissimos similique,
                obcaecati laborum ratione cumque quaerat, voluptatum voluptas
                ipsam unde, repudiandae aperiam quod voluptate? Recusandae,
                ratione?
              </p>
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
              <p className="text-white">100%</p>
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
          className="SeeLessOption mt-2 hidden items-center justify-center gap-1 text-sm text-card-foreground"
          onClick={() => {
            seeLessTimeline.play();
            seeMoreTimeline.seek(0);
          }}
        >
          <p>See less</p>
          <ChevronUp size={16} className="translate-y-[1px]" />
        </div>
      </div>
    </main>
  );
};

export default Profile;
