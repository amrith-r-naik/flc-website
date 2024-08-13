import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

import sampleImage from "~/assets/images/sample.jpg";

function AboutFLC() {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: "power1.inOut",
        },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: cardRef.current,
            toggleActions: "restart none none reverse",
            start: "top 80%",
            end: "bottom 20%",
          },
        },
      );
    },
    { scope: cardRef },
  );

  const ref = useRef<HTMLDivElement>(null);

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
    <section className="content-container mt-20 h-screen   bg-gradient-to-b from-black via-blue-950 to-purple-950 ">
      <div className="mb-12  rounded-md border border-yellow-700  p-4  ">
        <h1
          className="heading items-center justify-center text-center  "
          ref={ref}
        >
          FINITELOOP: The Best Coding Club of NMAMIT
        </h1>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2   ">
        <div className="space-y-6">
          <p className="max-w-lg text-gray-200">
            Finite Loop is a Coding Club that aims to provide a comprehensive
            perspective on development and encourages students to realize their
            ideas. We promote participation in competitive programming and
            strive to inspire the next generation.
          </p>

          <ul className="list-disc space-y-3 pl-5 text-gray-300">
            <li>We stay curious and seek out new solutions.</li>
            <li>We work relentlessly to produce fruitful results.</li>
            <li>
              We support each other to grow with a positive spirit and embrace
              our diversities.
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center " ref={cardRef}>
          <Image
            width={400}
            height={400}
            alt="Finite Loop Club"
            src={sampleImage}
            className="rounded-xl shadow-lg "
          />
        </div>
      </div>
    </section>
  );
}

export default AboutFLC;
