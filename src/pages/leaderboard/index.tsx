"use client";
import React from "react";
import RankBars from "~/components/leaderboard/rank-bars";

const index = () => {
  return (
    <main className="h-[150vh] w-[100%]">
      <div className="flex h-[38vh] w-[100%] overflow-hidden rounded-b-[50px] border border-border bg-[#282828]">
        <div className="flex h-full  w-1/2 flex-col items-center justify-center border-orange-50">
          <div className="space-y-1">
            <h1 className="text-7xl font-bold">Leaderboard</h1>
            <p className="text-2xl font-semibold">
              participate in events to earn XP!
            </p>
          </div>
        </div>
        <div className="flex h-full flex-1 items-end justify-center">
          <div className="flex h-full items-end gap-20">
            <RankBars size={140} rank={2} />
            <RankBars size={200} rank={1} />
            <RankBars size={100} rank={3} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
