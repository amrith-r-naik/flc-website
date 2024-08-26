"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import Hf from "~/assets/images/hackfest[1].png";

import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

function Hackfest() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 200%",
          end: "+=100",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <section
      className="mx-4 mb-32 h-screen rounded-2xl border border-white p-2 md:p-8"
      ref={sectionRef}
    >
      <h1 className="z-10 pt-14 text-center font-title text-3xl font-bold sm:py-2 xl:text-6xl">
        “ HackFest: Our Flagship Event ❞
      </h1>

      <div className="grid h-full w-full grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2">
        <div className="m-2 space-y-4 p-2 text-justify font-sans text-xs font-normal sm:m-4 sm:text-sm lg:text-lg xl:text-2xl">
          <p className="max-w-lg">
            “ NMAM Institute of Technology presents a three-day National Tech
            Fest featuring a 36-hour hackathon, tech conferences, and
            networking. Our vision is to bring together 60 teams from leading
            Indian engineering colleges, fostering innovation. The event spans
            50 hours, including a 36-hour hackathon, providing a platform for
            participants to showcase their skills.❞
          </p>
          <p className="max-w-lg text-2xl md:text-3xl">
            “ Hackfest 2024 Soon ❞
          </p>
          <Button className="max-w-lg text-lg font-bold md:text-2xl">
            <Link href="https://www.hackfest.dev/">Visit Official Website</Link>
          </Button>
        </div>

        <Image
          width={800}
          height={800}
          alt="Hackfest"
          src={Hf}
          className="rounded-md"
        />
      </div>
    </section>
  );
}

export default Hackfest;
