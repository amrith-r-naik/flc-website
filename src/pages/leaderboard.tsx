"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import RankBars from "~/components/leaderboard/rank-bars";
import Row from "~/components/leaderboard/row";

gsap.registerPlugin(useGSAP);

const Leaderboard = () => {
  useGSAP(() => {
    gsap.from([".banner"], { height: 0 });
    gsap.from(".hero", { x: -1000, opacity: 0, delay: 0.2 });
    gsap.from(".rankbar", { y: 100, height: 0, delay: 0.2, stagger: 0.2 });
    gsap.from(".row", { x: -50, opacity: 0, stagger: 0.2 });
  });
  return (
    <main className="h-[150vh] w-[100%]  space-y-6 bg-[#100020]">
      <div
        style={{
          background:
            "radial-gradient(50% 70.31% at 50% 0%, rgb(184 148 255 / 33%) 0%, rgba(126, 61, 255, 0) 100%), rgb(21 0 59 / 80%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          height: "282px",
        }}
        className="banner flex w-full flex-col gap-20 overflow-hidden rounded-b-[70px] border border-border bg-cover pt-12 sm:h-[38vh] sm:flex-row sm:gap-0 sm:pt-0"
      >
        {/* left half of banner */}
        <div className="flex w-full items-center  justify-center border-orange-50 sm:h-full sm:w-1/2 ">
          <div className="flex flex-col items-center space-y-1 sm:block">
            <h1 className="hero text-4xl font-bold md:text-5xl lg:text-7xl">
              Leaderboard
            </h1>
            <p className="hero text-lg font-semibold">
              participate in events to earn XP!
            </p>
          </div>
        </div>

        {/* right half of banner */}
        <div className="flex flex-1 items-end justify-center gap-16 sm:h-full">
          <RankBars
            className="rankbar h-[75px] sm:h-[110px] md:h-[140px]"
            size={140}
            rank={2}
          />
          <RankBars
            className="rankbar h-[130px]  sm:h-[165px] md:h-[200px]"
            size={200}
            rank={1}
          />
          <RankBars
            className="rankbar h-[50px] sm:h-[85px] md:h-[100px]"
            size={100}
            rank={3}
          />
        </div>
      </div>

      {/* grid section of page */}
      <main
        className="mx-auto h-[30rem] w-[95%]  space-y-2 border-border lg:w-4/5 ">
        {/*below div Grid banner */}
        <div style={{
          background:
            "radial-gradient(50% 70.31% at 50% 0%, rgb(123 104 162 / 33%) 0%, rgb(134 73 255 / 0%) 100%), rgb(19 4 45 / 80%)" ,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }} className="flex w-full rounded-lg border-2 border-border">
          <p className="flex-1  py-4 text-center text-xs font-semibold sm:text-lg md:text-xl">
            Name
          </p>
          <p className="flex-1  py-4 text-center text-xs font-semibold sm:text-lg md:text-xl">
            USN
          </p>
          <p className="flex-1  text-wrap py-4 text-center text-xs font-semibold sm:text-lg md:text-xl">
            Events Attended
          </p>
          <p className="flex-1  py-4 text-center text-xs font-semibold sm:text-lg md:text-xl">
            XP
          </p>
        </div>

        <Row
          usn="NNM22CS139"
          className="row"
          name="rakshithx09"
          eventsAttended={50}
          xp={200}
        />
        <Row
          usn="NNM22CS139"
          className="row"
          name="rakshithx09"
          eventsAttended={50}
          xp={200}
        />
        <Row
          usn="NNM22CS139"
          className="row"
          name="rakshithx09"
          eventsAttended={50}
          xp={200}
        />
        <Row
          usn="NNM22CS139"
          className="row"
          name="rakshithx09"
          eventsAttended={50}
          xp={200}
        />
        <Row
          usn="NNM22CS139"
          className="row"
          name="rakshithx09"
          eventsAttended={50}
          xp={200}
        />
      </main>
    </main>
  );
};

export default Leaderboard;
