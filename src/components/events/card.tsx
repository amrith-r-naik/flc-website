import { type inferProcedureOutput } from "@trpc/server";
import Image from "next/image";
import Link from "next/link";
import React, { type FunctionComponent } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import {
  IoLocationOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";

import { type AppRouter } from "~/server/api/root";

type Event = inferProcedureOutput<AppRouter["event"]["getAllEventsForUser"]>[0];

const EventCard: FunctionComponent<{
  event: Event;
}> = ({ event }) => {
  const getEventAttributes = (event: Event) => {
    let teamSizeText = "";
    const eventTypeText = event.eventType;
    if (event.minTeamSize === event.maxTeamSize) {
      if (event.minTeamSize === 1)
        teamSizeText += `${event.minTeamSize} member per team`;
      else teamSizeText += `${event.minTeamSize} members per team`;
      if (event.minTeamSize === 0) teamSizeText = "";
    } else {
      teamSizeText = `${event.minTeamSize} - ${event.maxTeamSize} members per team`;
    }
    return [
      {
        name: "Type",
        text: eventTypeText,
        Icon: IoPersonOutline,
      },
      {
        name: "Venue",
        text: event.venue,
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
    <>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between px-4">
          <div className="relative h-4 w-4">
            <Image
              src="/favicon.ico" /* replace it with flc logo */
              alt={"Incridea Logo"}
              fill
              className="z-0 h-full w-full object-fill text-white"
            />
          </div>
          <div className="events-heading">{event.category}</div>
        </div>
        <div className="relative py-2">
          <div className="line-break"></div>
          <div className={`rounded-xl object-fill px-2`}>
            {
              <Image
                src={event.imgSrc ?? "/assets/sample.png"}
                alt={"Image"}
                width={250}
                height={250}
                className="z-0 h-full w-full rounded-xl object-fill text-white"
              />
            }
          </div>
          <div className="line-break"></div>
        </div>
      </div>
      <div className="relative z-50">
        <div className="event-bg "></div>
        <div className=" flex flex-col items-center justify-center gap-3 pt-3">
          <span
            className={`events-heading flex w-fit items-center justify-center px-2 text-center text-xl  `}
          >
            {event.name}
          </span>
          <div className="flex h-[6rem] w-full flex-col items-start justify-center gap-2 px-1 py-2 text-white md:w-full">
            {getEventAttributes(event).map((attr, i) => (
              <div
                className="card-attributes flex w-full items-center gap-2 rounded-full  p-1 px-2 text-left "
                key={i}
              >
                <attr.Icon />
                <span className="events-heading truncate text-sm">
                  {attr.text}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full">
            <Link href={`/events/${event.id}`}>
              <button className="card-button mt-0 flex w-full shrink-0 items-center justify-center gap-2 rounded-full border  border-[#FF94D2]/40 bg-[#7e7d7c] py-2 text-lg capitalize text-white transition-all duration-300 hover:scale-[1.02] ">
                <IoIosPlayCircle />
                <span className="z-10 text-white brightness-100">
                  {" "}
                  Register
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/card_bottom.png"
        alt=""
        height={50}
        width={50}
        className="absolute bottom-0 left-0 right-0 top-auto w-[100%] opacity-50"
      />
    </>
  );
};

export default EventCard;
