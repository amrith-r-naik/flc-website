"use client";

import React, { useEffect, useState } from "react";

import EventCard from "~/components/events/card";
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

  const handleYearClick = (year: string) => setSelectedYear(year);

  const { data: events } = api.event.getAllEventsForUser.useQuery({
    year: selectedYear,
  });

  useEffect(() => {
    document.getElementById("cards")!.onmousemove = (e) => {
      for (const card of document.getElementsByClassName("intro-card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      }
    };
  });

  return (
    <div className="relative bottom-0 top-0 min-h-screen  pb-2 font-sans">
      <style jsx>{`
        .grid-card:before {
          content: "";
          box-sizing: border-box;
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 10.5px;
          padding: 1px;
          background: linear-gradient(
              105.43deg,
              rgba(168, 128, 255, 0) 25.1%,
              rgba(168, 128, 255, 0.32) 72.57%,
              rgba(168, 128, 255, 0) 102.57%
            ),
            linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.1),
              rgba(255, 255, 255, 0.1)
            );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .intro-card::before,
        .intro-card::after {
          border-radius: inherit;
          content: "";
          height: 100%;
          left: 0px;
          opacity: 0;
          position: absolute;
          top: 0px;
          transition: opacity 500ms;
          width: 100%;
        }

        .intro-card::before {
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(255, 255, 255, 0.56),
            transparent 40%
          );
          z-index: 3;
        }

        .intro-card::after {
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(255, 255, 255, 0.1),
            transparent 40%
          );
          z-index: 1;
        }

        .intro-card:hover::before {
          opacity: 1;
        }

        .intro-card:hover::after {
          opacity: 1;
        }
      `}</style>
      <div className="event-bg"></div>
      <div className="line-break"></div>
      <div id="cards" className="h-full w-full text-white">
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
                className="intro-card relative h-full w-full rounded-2xl p-2 py-3 before:absolute before:z-[9999] after:absolute after:z-[9999]"
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <div className=" flex justify-center">No events available</div>
        )}
      </div>
    </div>
  );
}

export default Events;
