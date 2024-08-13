"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

import sampleImage from "~/assets/images/sample.jpg";
import Button from "~/components/button";

function Events() {
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

  return (
    <section className="content-container mb-16 flex h-full w-full flex-col items-center  gap-4 bg-gradient-to-r from-blue-900 to-black">
      <h1
        className="rounded-r-full border border-yellow-700 p-4 text-center text-4xl font-semibold"
        ref={refs}
      >
        Events & WorkShop
      </h1>
      <p>Enrich your skills and knowledge with tons of events and workshops</p>
      <div className="iteam-center grid h-full w-full grid-cols-1 justify-between gap-4 md:grid-cols-3">
        <Image
          width={400}
          height={400}
          alt="flc"
          src={sampleImage}
          className="event"
        />
        <Image
          width={400}
          height={400}
          alt="flc"
          src={sampleImage}
          className="event"
        />
        <Image
          width={400}
          height={400}
          alt="flc"
          src={sampleImage}
          className="event"
        />
      </div>
      <Button className="mx-auto mb-6">View All</Button>
    </section>
  );
}

export default Events;
