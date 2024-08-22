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

function Events() {
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
        className="mx-auto  flex min-h-[80vh]  w-full flex-col items-center gap-4 p-2  md:p-10 "
        ref={ref}
      >
        <h3 className="subheading text-center font-semibold">
          “ Events & WorkShop ❞
        </h3>
        <p className="text-center">
          Enrich your skills and knowledge with tons of events and workshops
        </p>
        <div className="flex h-screen w-full items-center justify-center">
          <Loader />
        </div>

        <Button className="hoverable mx-auto hover:bg-white">
          <Link href="/events">View All</Link>
        </Button>
      </section>
    );
  }
  if (events) {
    return (
      <section
        className="flex  min-h-[80vh]  w-full flex-col items-center gap-4 p-2  md:p-10 "
        ref={ref}
      >
        <h3 className="subheading text-center font-semibold">
          Events & WorkShop
        </h3>
        <p className="text-center">
          Enrich your skills and knowledge with tons of events and workshops
        </p>
        {events && events.length > 0 ? (
          <div className="mx-auto  mb-4 grid w-full max-w-7xl columns-3 gap-4 ">
            {events.map((event, idx) => (
              <RadialCard
                key={idx}
                className="relative h-full w-fit rounded-2xl p-2 py-3"
                withGlow
              >
                <EventCard event={event} />
              </RadialCard>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">No events available</div>
        )}
        <Button className="mx-auto">
          <Link href="/events">View All</Link>
        </Button>
      </section>
    );
  }
  if (error) {
    return (
      <section
        className="content-container bg-gradient flex min-h-[80vh] w-full flex-col items-center  gap-4 "
        ref={ref}
      >
        <h3 className=" subheading text-center  font-semibold">
          Events & WorkShop
        </h3>
        <p>
          Enrich your skills and knowledge with tons of events and workshops
        </p>
        <div className="flex h-screen w-full items-center justify-center">
          <Loader />
        </div>

        <Button className="mx-auto">
          <Link href="/events">View All</Link>
        </Button>
      </section>
    );
  }
}

export default Events;
