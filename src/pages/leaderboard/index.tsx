"use client";
import React from "react";
import RankBars from "~/components/leaderboard/rank-bars";
import Row from "~/components/leaderboard/row";

const index = () => {
  return (
    <main className="h-[150vh] w-[100%]  space-y-6">
      <div className="flex w-[100%] flex-col gap-20 overflow-hidden rounded-b-[50px] border border-border bg-[#282828] pt-12 sm:h-[38vh] sm:flex-row sm:gap-0 sm:pt-0">
        <div className="flex w-full items-center  justify-center border-orange-50 sm:h-full sm:w-1/2 ">
          <div className="flex flex-col items-center space-y-1 sm:block">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
              Leaderboard
            </h1>
            <p className="text-lg font-semibold">
              participate in events to earn XP!
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-end justify-center sm:h-full">
          <div className="flex h-full items-end gap-16">
            <RankBars
              className="h-[75px] sm:h-[110px] md:h-[140px]"
              size={140}
              rank={2}
            />
            <RankBars
              className="h-[130px]  sm:h-[165px] md:h-[200px]"
              size={200}
              rank={1}
            />
            <RankBars
              className="h-[50px] sm:h-[85px] md:h-[100px]"
              size={100}
              rank={3}
            />
          </div>
        </div>
      </div>

      <main className="mx-auto h-[30rem] w-[95%]  space-y-2 border-border lg:w-4/5 ">
        {/*below div Grid banner */}
        <div className="flex w-full rounded-lg border-2 border-border bg-accent">
          <div className="flex-1  py-4">
            <p className="font-semibol text-center text-xs sm:text-lg md:text-xl">
              Name
            </p>
          </div>

          <div className="flex-1 py-4">
            <p className="font-semibol text-center text-xs sm:text-lg md:text-xl">
              USN
            </p>
          </div>

          <div className="flex-1  py-4">
            <p className="font-semibol text-wrap text-center text-xs sm:text-lg md:text-xl">
              Events Attended
            </p>
          </div>

          <div className="flex-1  py-4">
            <p className="font-semibol text-center text-xs sm:text-lg md:text-xl">
              XP
            </p>
          </div>
        </div>

        <Row usn="NNM22CS139" name="rakshithx09" eventsAttended={50} xp={200} />
        <Row usn="NNM22CS139" name="rakshithx09" eventsAttended={50} xp={200} />
        <Row usn="NNM22CS139" name="rakshithx09" eventsAttended={50} xp={200} />
        <Row usn="NNM22CS139" name="rakshithx09" eventsAttended={50} xp={200} />
        <Row usn="NNM22CS139" name="rakshithx09" eventsAttended={50} xp={200} />
      </main>
    </main>
  );
};

export default index;
