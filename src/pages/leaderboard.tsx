import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { type NextPage } from "next";
import { useRef } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

import RankBars from "~/components/leaderboard/rank-bars";
import { api } from "~/utils/api";

gsap.registerPlugin(useGSAP);

const Leaderboard: NextPage = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const rankBarsRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLTableSectionElement>(null);

  const { data: users } = api.user.getLeaderboard.useQuery();

  useGSAP(() => {
    gsap.from(bannerRef.current, {
      height: 0,
    });

    gsap.from(heroRef.current, {
      x: -1000,
      opacity: 0,
      delay: 0.2,
    });

    rankBarsRef.current?.childNodes.forEach((rankBar, i) => {
      gsap.from(rankBar, {
        y: 100,
        opacity: 0,
        delay: 0.1 + i * 0.1,
      });
    });

    rowsRef.current?.childNodes.forEach((row, i) => {
      gsap.from(row, {
        x: i % 2 ? -50 : 50,
        opacity: 0,
        delay: 0.1 + i * 0.1,
      });
    });
  });

  return (
    <div className="w-full space-y-8 bg-[#100020] pb-20">
      <header
        style={{
          background:
            "radial-gradient(50% 70.31% at 50% 0%, rgb(184 148 255 / 33%) 0%, rgba(126, 61, 255, 0) 100%), rgb(21 0 59 / 80%)",
        }}
        ref={bannerRef}
        className="flex h-72 w-full flex-col gap-20 overflow-hidden rounded-b-[70px] border border-border bg-cover pt-12 backdrop-blur-lg sm:flex-row sm:gap-0 sm:pt-0"
      >
        <div
          ref={heroRef}
          className="flex h-1/6 w-full flex-col items-center justify-center gap-4 md:h-full md:w-1/2"
        >
          <h1 className="text-5xl font-bold lg:text-7xl">Leaderboard</h1>
          <p className="text-base font-semibold md:text-lg">
            Participate in events to earn XP!
          </p>
        </div>
        <div
          ref={rankBarsRef}
          className="flex h-5/6 w-full items-end justify-center gap-14 md:h-full md:w-1/2 md:gap-16"
        >
          <RankBars user={users?.[0]} className="order-2" rank="GOLD" />
          <RankBars user={users?.[1]} className="order-1" rank="SILVER" />
          <RankBars user={users?.[2]} className="order-3" rank="BRONZE" />
        </div>
      </header>

      <main className="mx-auto w-[95%] lg:w-4/5 ">
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr
              style={{
                background:
                  "radial-gradient(50% 70.31% at 50% 0%, rgb(123 104 162 / 33%) 0%, rgb(134 73 255 / 0%) 100%), rgb(19 4 45 / 80%)",
              }}
              className="rounded-lg text-center text-xs backdrop-blur-lg *:w-1/4 *:border-y-2 *:border-border *:py-4 first:*:rounded-l-lg first:*:border-l last:*:rounded-r-lg last:*:border-r sm:text-lg md:text-xl"
            >
              <th>Name</th>
              <th>USN</th>
              <th>Events Attended</th>
              <th>XP</th>
            </tr>
          </thead>
          <tbody ref={rowsRef}>
            {users ? (
              users.map((user, idx) => (
                <tr
                  key={idx}
                  className="text-center text-xs *:border-y-2 *:border-border *:py-4 first:*:rounded-l-lg first:*:border-l last:*:rounded-r-lg last:*:border-r md:text-lg"
                >
                  <td className="flex items-center justify-center gap-2">
                    <Avatar className="hidden md:block">
                      <AvatarImage
                        src={user.image ?? "https://github.com/shadcn.png"}
                      />
                      <AvatarFallback>PP</AvatarFallback>
                    </Avatar>
                    {user.name}
                  </td>
                  <td>{user.email.split("@")[0]?.toUpperCase() ?? "N/A"}</td>
                  <td>{user._count.Team}</td>
                  <td>{user.totalActivityPoints}xp</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="rounded-l-lg rounded-r-lg border-y-2 border-l border-r border-border py-4 text-center text-xs md:text-lg"
                >
                  No users
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Leaderboard;
