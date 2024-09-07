"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "~/components/ui/button";

import EventCard from "~/components/events/card";
import { api } from "~/utils/api";

import Loader from "../loader";
import { RadialCard } from "../utils/radialCard";

const Events = () => {
  const {
    data: events,
    isLoading,
    error,
  } = api.event.getLegacyEvents.useQuery();

  const ref = useRef(null);
  useGSAP(() => {
    gsap.from(".event", {
      opacity: 0,
      y: 100,
      stagger: {
        grid: "auto",
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ref.current,
        toggleActions: "restart none none reverse",
      },
    });
  }, []);

  if (isLoading) {
    return (
      <section
        className="mx-auto flex min-h-[80vh] w-full  max-w-screen-xl flex-col items-center gap-4 p-2  md:p-10 "
        ref={ref}
      >
        <h1 className="py-2 pt-14 font-title text-3xl font-bold sm:py-2 md:text-7xl xl:text-8xl">
          Events & WorkShop
        </h1>

        <p className="text-center">
          Enrich your skills and knowledge with tons of events and workshops
        </p>
        <div className="flex h-screen w-full items-center justify-center">
          <Loader />
        </div>
        <Link href="/events">
          <Button className="mx-auto hover:bg-white">View All</Button>
        </Link>
      </section>
    );
  }
  if (events) {
    return (
      <section
        className="mx-auto flex min-h-[80vh] w-full  max-w-screen-xl flex-col items-center gap-4 p-2   "
        ref={ref}
      >
        <h1 className="py-2 pt-14 font-title text-3xl font-bold sm:py-2 md:text-6xl xl:text-7xl">
          Events & WorkShop
        </h1>
        <p className="text-center">
          Enrich your skills and knowledge with tons of events and workshops
        </p>
        {events && events.length > 0 ? (
          <div className="mx-auto mb-4 grid w-full max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event, idx) => (
              <RadialCard
                key={idx}
                className="relative w-full rounded-2xl p-2 py-3"
                withGlow
              >
                <div className="relative h-full  rounded-2xl" key={idx}>
                  <EventCard event={event} />
                </div>
              </RadialCard>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">No events available</div>
        )}
        <Link href="/events">
          <Button className="mx-auto hover:bg-white">View All</Button>
        </Link>
      </section>
    );
  }
  if (error) {
    return (
      <section
        className="content-container mx-auto flex min-h-[80vh] w-full max-w-screen-xl flex-col items-center gap-4"
        ref={ref}
      >
        <h1 className="py-2 pt-14 font-title text-3xl font-bold sm:py-2 md:text-7xl xl:text-8xl">
          Events & WorkShop
        </h1>

        <p className="text-center font-sub-heading">
          Enrich your skills and knowledge with tons of events and workshops
        </p>
        <div className="flex h-screen w-full items-center justify-center">
          <Loader />
        </div>

        <Link href="/events">
          <Button className="mx-auto hover:bg-white">View All</Button>
        </Link>
      </section>
    );
  }
};

export default Events;
