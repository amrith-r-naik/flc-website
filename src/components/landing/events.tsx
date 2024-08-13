"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

import sampleImage from "~/assets/images/sample.jpg";
import Button from "~/components/button";

function Events() {
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
  return (
    <section
      className="content-container bg-gradient flex min-h-[80vh] w-full flex-col items-center  gap-4 "
      ref={ref}
    >
      <h3 className="text-center text-4xl font-semibold">Events & WorkShop</h3>
      <p>Enrich your skills and knowledge with tons of events and workshops</p>
      <div className="grid h-full w-full flex-grow grid-cols-1 place-items-center items-center justify-between gap-4 md:grid-cols-3">
        <Image
          width={400}
          height={400}
          alt="flc"
          src={sampleImage}
          className="event rounded"
        />
        <Image
          width={400}
          height={400}
          alt="flc"
          src={sampleImage}
          className="event rounded"
        />
        <Image
          width={400}
          height={400}
          alt="flc"
          src={sampleImage}
          className="event rounded"
        />
      </div>
      <Button className="mx-auto">View All</Button>
    </section>
  );
}

export default Events;
