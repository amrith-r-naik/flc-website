"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import Hf from "~/assets/images/hackfest[1].png";

import { Button } from "../ui/button";

function Hackfest() {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
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
            trigger: ref.current,
            toggleActions: "restart none none reverse",
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <section
      className="bg-gradient min-h-[80vh] w-full rounded-2xl  border border-yellow-700 p-2 md:mt-4 md:p-8  "
      ref={ref}
    >
      <h3 className="subheading mb-12 mt-6 text-center">
        “ HackFest:Our FlagShip Event ❞
      </h3>
      <div className=" grid h-full w-full flex-grow grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2">
        <div className="space-y-4 p-2">
          <p className="max-w-lg">
            “ NMAM Institute of Technology presents a three-day National Tech
            Fest featuring a 36-hour hackathon, tech conferences, and
            networking. Our vision is to bring together 60 teams from leading
            Indian engineering colleges, fostering innovation. The event spans
            50 hours, including a 36-hour hackathon, providing a platform for
            participants to showcase their skills.❞
          </p>
          <p className="max-w-lg text-2xl  md:text-3xl">
            “ Hackfest 2024 Soon❞
          </p>
          <Button className="max-w-lg">
            <Link href="https://www.hackfest.dev/">Visit Official Website</Link>
          </Button>
        </div>

        <Image
          width={600}
          height={600}
          alt="flc"
          src={Hf}
          className="rounded-md"
        />
      </div>
    </section>
  );
}

export default Hackfest;
