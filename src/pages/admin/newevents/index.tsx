"use client";

import { type Event } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";

/* import { PublishedEventsQuery } from "../../generated/generated"; */
import {
  IoLocationOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";

import Loader from "~/components/loader";
import { api } from "~/utils/api";

function Events() {
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const years: string[] = [
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ];

  const handleYearClick = (year: string) => {
    setSelectedYear(year);
  };

  const {
    data: events,
    isLoading,
    error,
  } = api.event.getAllEventsForUser.useQuery({ year: selectedYear });

  console.log(events);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log(selectedYear);
  }, [selectedYear]);

  const getEventAttributes = ({ data }: { data: Partial<Event> }) => {
    let teamSizeText = "";
    const eventTypeText = data.eventType;
    if (data.minTeamSize === data.maxTeamSize) {
      if (data.minTeamSize === 1)
        teamSizeText += `${data.minTeamSize} member per team`;
      else teamSizeText += `${data.minTeamSize} members per team`;
      if (data.minTeamSize === 0) teamSizeText = "";
    } else {
      teamSizeText = `${data.minTeamSize} - ${data.maxTeamSize} members per team`;
    }

    return [
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

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (events) {
    console.log(events);
  }
  if (error) {
    return <div>Error loading events</div>;
  }

  return (
    <div className="relative bottom-0 top-0 min-h-screen  pb-2 font-sans">
      <div className="event-bg"></div>
      <div className="line-break"></div>
      <div className="h-full w-full text-white">
        <div className="flex justify-center">
          <h1 className="events-heading mt-8 text-7xl font-bold">Events</h1>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-4 py-12">
          {years.map((year) => (
            <li
              key={year}
              onClick={() => handleYearClick(year)}
              className={` cursor-pointer  ${year === selectedYear ? "border-b-2 border-white p-1 text-white" : "events-heading"}`}
            >
              {year}
            </li>
          ))}
        </ul>

        {events && events.length > 0 ? (
          <div className=" mx-auto mb-4 grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="intro-card before:z-1 relative h-full w-full rounded-2xl p-2 py-3  before:absolute"
              >
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
                        /* data.imgSrc && */ <Image
                          src={event.imgSrc ?? "/assets/sample.png"}
                          //src={data.image}
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
                      {getEventAttributes({ data: event }).map((attr, i) =>
                        attr.name ? (
                          <div
                            className="card-attributes flex w-full items-center gap-2 rounded-full  p-1 px-2 text-left "
                            key={i}
                          >
                            <attr.Icon />
                            {/*  hyd warning due to toLocaleString()
                safe to ignore - https://nextjs.org/docs/messages/react-hydration-error#solution-3-using-suppresshydrationwarning   */}
                            <span
                              suppressHydrationWarning
                              className="events-heading truncate text-sm"
                            >
                              {attr.text}
                            </span>
                          </div>
                        ) : null,
                      )}
                    </div>
                    <div className="w-full">
                      <Link href={`/event/${event.id}`}>
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
                <img
                  src="/card_bottom.png"
                  alt=""
                  className="absolute bottom-0 left-0 right-0 top-auto w-full opacity-50"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className=" flex justify-center">No events available</div>
        )}

        {/*
      <div className="mx-2 mt-8 flex flex-wrap justify-center gap-20 md:mx-8">
        {events && events.length > 0 ? (
          <>
            {events.map((event, index) => (
              <Card key={index} event={event} />
            ))}
          </>
        ) : (
          <div>No events available</div>
        )}
      </div> */}
      </div>
    </div>
  );
}

export default Events;
