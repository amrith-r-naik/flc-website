"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

import sampleImage from "~/assets/images/sample.jpg";

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
      className="content-container bg-gradient grid min-h-[80vh] w-full grid-cols-1 content-around justify-items-center gap-4 rounded-3xl border border-yellow-700 md:grid-cols-2 md:justify-items-stretch"
      ref={ref}
    >
      <Image width={400} height={400} alt="flc" src={sampleImage} />
      <div className="space-y-4">
        <h3 className="text-4xl font-semibold">HackFest</h3>
        <p className="max-w-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          quisquam voluptates nostrum! Reprehenderit excepturi in possimus
          corporis aut! Deserunt soluta obcaecati culpa totam voluptatum natus
          hic distinctio voluptatibus dolore mollitia.
        </p>
      </div>
    </section>
  );
}

export default Hackfest;
