/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
/* import { PublishedEventsQuery } from "../../generated/generated"; */
import Link from "next/link";
import {
  IoCalendarOutline,
  IoLocationOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";

/* import { generateEventUrl } from "../../utils/url"; */
import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { IoIosPlayCircle } from "react-icons/io";
import { Event } from "@prisma/client";

const EventCard = ({
  data,
}: {
  data: Partial<Event>;
}) => {
  const router = useRouter();
    const getEventAttributes = () => {
    let teamSizeText = ""
    const  eventTypeText = data.type;
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
      className={`${styles.card} rounded-2xl p-2 py-3 bg-[#dc9c42] border     
         border-[#a26b1e]/80 cursor-pointer w-full h-full`}
    >
      <div
        className={`${styles.top_section} bg-gradient-to-tr from-[#f4cd7f] to-[#ebc16e] flex flex-col`}
      >
        <div>
          <div className={styles.borderCard}></div>
          <div className={styles.icons}>
            <div className="pl-2 pb-1">
              <Image
                src='/favicon.ico'  /* replace it with flc logo */
                alt={"Incridea Logo"}
                width={550}
                height={550}
                className="object-fill h-full w-full z-0 text-white"
              />
            </div>
            <div
              className={`${
                styles.social_media
              } uppercase font-bold items-center text-center text-[#6B003E] ${
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
            {/* data.imgSrc && */ (
              <Image
                src='/assets/sample.png'
                //src={data.image}
                alt={"Image"}
                width={250}
                height={250}
                className="object-fill rounded-xl h-full w-full z-0 text-white"
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`pt-3 flex flex-col justify-center gap-3 items-center w-full`}
      >
        <span
          className={`font-bold text-white flex justify-center items-center text-center text-xl w-fit px-2`}
        >
          {'DSA WORKSHOP'}
        </span>
        <div className="flex flex-col w-full gap-2 text-white px-1 py-2 justify-center items-start md:w-full h-[6rem]">
          {  getEventAttributes().map((attr, i) =>
            attr.name ? (
              <div
                className="w-full flex items-center border border-[#FF94D2]/40 gap-2 text-left bg-[#A46EE3]/30 p-1 rounded-full px-2"
                key={i}
              >
                <attr.Icon />
                { /*  hyd warning due to toLocaleString()
                safe to ignore - https://nextjs.org/docs/messages/react-hydration-error#solution-3-using-suppresshydrationwarning   */}
                <span suppressHydrationWarning className="text-sm truncate">
                  {attr.text}
                </span>
              </div>
            ) : null
          )  }
        </div>
        <div className="w-full">
          <Link href={`/event/${data.id}`}>
            <button className="text-lg text-white capitalize shrink-0 w-full mt-0 py-2 flex gap-2 items-center justify-center rounded-full bg-gradient-to-tr from-[#dbab68] to-[#d3ab74] hover:brightness-125 hover:scale-[1.02] transition-all duration-300">
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
