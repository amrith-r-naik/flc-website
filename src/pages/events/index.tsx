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
              <EventCard key={idx} event={event} />
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
