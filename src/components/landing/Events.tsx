"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

import Button from "~/components/Button";
import { api } from "~/utils/api";

import EventCard from "../eventCard";
import Loader from "../Loader/Loader";

function Events() {
  const { data: events, isLoading, error } = api.event.getAllEvents.useQuery();

  const refs = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        refs.current,
        {
          opacity: 0,
          scale: 0.5,
          duration: 3,
          ease: "power1.inOut",
        },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: refs.current,
            toggleActions: "restart none none reverse",
          },
        },
      );
    },
    { scope: refs },
  );

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
    <section className="content-container sapce-y-12 mb-16 flex h-full w-full flex-col   items-center ">
      <h1
        className="rounded-r-full border border-yellow-700 p-4 text-center text-4xl font-semibold"
        ref={refs}
      >
        Events & WorkShop
      </h1>
      <p>Enrich your skills and knowledge with tons of events and workshops</p>
      {events && events.length > 0 ? (
        <div className="mx-auto mb-4 mt-6 grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
          {events.slice(0, 3).map((event, index) => (
            <EventCard key={index} data={event} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">No events available</div>
      )}

      <Button className="mx-auto mb-6">
        <Link href="/events">View All</Link>
      </Button>
    </section>
  );
}

export default Events;
