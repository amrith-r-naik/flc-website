/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type Event } from "@prisma/client";

/* import { generateEventUrl } from "../../utils/url"; */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoIosPlayCircle } from "react-icons/io";

/* import { PublishedEventsQuery } from "../../generated/generated"; */
import {
  IoLocationOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";

import styles from "./styles.module.css";

const EventCard = ({ data }: { data: Partial<Event> }) => {
  const router = useRouter();
  const getEventAttributes = () => {
    let teamSizeText = "";
    const eventTypeText = data.type;
    if (data.minTeamSize === data.maxTeamSize) {
      if (data.minTeamSize === 1)
        teamSizeText += `${data.minTeamSize} member per team`;
      else teamSizeText += `${data.minTeamSize} members per team`;
      if (data.minTeamSize === 0) teamSizeText = "";
    } else {
      teamSizeText = `${data.minTeamSize} - ${data.maxTeamSize} members per team`;
    }
    /*
    if (data.type?.includes("MULTIPLE")) {
      eventTypeText =
        data.type?.split("_")[0][0] +
        data.type?.split("_")[0].slice(1).toLowerCase() +
        " (Multiple Entry)";
    } else
      eventTypeText = data.type.[0] + data.type.slice(1).toLowerCase();
 */
    /* eventTypeText = eventTypeText.replaceAll("Individual", "Solo");
    eventTypeText = eventTypeText.replaceAll("Team", "Multiplayer"); */

    return [
      /* {
        name: "Date",
        text: data.rounds[0]?.date
          ? new Date(data.rounds[0]?.date).toLocaleString("en-IN", {
              day: "numeric",
              month: "short",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })
          : "TBD",
        Icon: IoCalendarOutline,
      }, */
      {
        name: "Type",
        text: eventTypeText,
        Icon: IoPersonOutline,
      },
      {
        name: "Venue",
        text: data.venue,
        Icon: IoLocationOutline,
      },
      {
        name: "Team Size",
        text: teamSizeText,
        Icon: IoPeopleOutline,
      },
    ];
  };

  return (
    <div
      onClick={() => router.push(`/event/${data.id}`)}
      data-scroll
      className={`${styles.card} h-full w-full cursor-pointer rounded-2xl border
         border-[#a26b1e]/80 bg-[#dc9c42] p-2 py-3`}
    >
      <div
        className={`${styles.top_section} flex flex-col bg-gradient-to-tr from-[#f4cd7f] to-[#ebc16e]`}
      >
        <div>
          <div className={styles.borderCard}></div>
          <div className={styles.icons}>
            <div className="pb-1 pl-2">
              <Image
                src="/favicon.ico" /* replace it with flc logo */
                alt={"Incridea Logo"}
                width={550}
                height={550}
                className="z-0 h-full w-full object-fill text-white"
              />
            </div>
            <div
              className={`${
                styles.social_media
              } items-center text-center font-bold uppercase text-[#6B003E] ${
                data.category?.toLowerCase() === "non_technical"
                  ? "text-[0.9rem]"
                  : "text-[1.05rem]"
              }`}
            >
              {data.category?.replace("_", " ").toLocaleLowerCase()}
            </div>
          </div>
        </div>
        <div className="py-2">
          <div className={`rounded-xl object-fill px-2`}>
            {
              /* data.imgSrc && */ <Image
                src="/assets/sample.png"
                //src={data.image}
                alt={"Image"}
                width={250}
                height={250}
                className="z-0 h-full w-full rounded-xl object-fill text-white"
              />
            }
          </div>
        </div>
      </div>
      <div
        className={`flex w-full flex-col items-center justify-center gap-3 pt-3`}
      >
        <span
          className={`flex w-fit items-center justify-center px-2 text-center text-xl font-bold text-white`}
        >
          {"DSA WORKSHOP"}
        </span>
        <div className="flex h-[6rem] w-full flex-col items-start justify-center gap-2 px-1 py-2 text-white md:w-full">
          {getEventAttributes().map((attr, i) =>
            attr.name ? (
              <div
                className="flex w-full items-center gap-2 rounded-full border border-[#FF94D2]/40 bg-[#A46EE3]/30 p-1 px-2 text-left"
                key={i}
              >
                <attr.Icon />
                {/*  hyd warning due to toLocaleString()
                safe to ignore - https://nextjs.org/docs/messages/react-hydration-error#solution-3-using-suppresshydrationwarning   */}
                <span suppressHydrationWarning className="truncate text-sm">
                  {attr.text}
                </span>
              </div>
            ) : null,
          )}
        </div>
        <div className="w-full">
          <Link href={`/event/${data.id}`}>
            <button className="mt-0 flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-tr from-[#dbab68] to-[#d3ab74] py-2 text-lg capitalize text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-125">
              <IoIosPlayCircle />
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
