"use client";

import React, { useEffect, useState } from "react";

import EventCard from "~/components/eventCard";
import Loader from "~/components/loader";
import { api } from "~/utils/api";

import Background from "./particlesBackground";

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

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
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
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <Background />
      </div>
      <div className="flex justify-center">
        <h1 className="text-gradient mt-8 text-7xl font-bold">Events</h1>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-4 py-12">
        {years.map((year) => (
          <li
            key={year}
            onClick={() => handleYearClick(year)}
            className={`cursor-pointer border-b-2 ${year === selectedYear ? "border-white" : "border-transparent"}`}
          >
            {year}
          </li>
        ))}
      </ul>

      {events && events.length > 0 ? (
        <div className="mx-auto  mb-4 grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event, idx) => (
            <EventCard key={idx} data={event} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">No events available</div>
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
    </>
  );
}

export default Events;
