import { type inferProcedureOutput } from "@trpc/server";
import React, { type FunctionComponent } from "react";

import { type AppRouter } from "~/server/api/root";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

import { cn } from "~/lib/utils";

const RankBars: FunctionComponent<{
  className?: string;
  user?: inferProcedureOutput<AppRouter["user"]["getLeaderboard"]>[0];
  rank: "GOLD" | "SILVER" | "BRONZE";
}> = ({ className, user, rank }) => {
  return (
    <div
      className={cn(
        className,
        rank == "GOLD" && "h-5/6 bg-[#f6c388] md:h-3/5",
        rank === "SILVER" && "h-3/6 bg-[#8f959f] md:h-2/5",
        rank === "BRONZE" && "h-2/6 bg-[#846262] md:h-1/5",
        "relative w-9 md:w-12",
      )}
    >
      <Avatar className="absolute -top-8 left-1/2 size-12 -translate-x-1/2 shadow-2xl md:-top-12 md:size-16">
        <AvatarImage src={user?.image ?? "https://github.com/shadcn.png"} />
        <AvatarFallback>PP</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default RankBars;
