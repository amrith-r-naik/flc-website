import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

import sampleImage from "~/assets/images/sample.jpg";

function AboutFLC() {
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
    <section className="content-container bg-gradient mt-10 min-h-[80vh] w-full  md:mt-80   ">
      <h3 className="subheading mb-12 text-center" ref={ref}>
        FINITELOOP The best Coding Club of NMAMIT
      </h3>
      <div className=" grid h-full w-full flex-grow grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <p className="max-w-lg">
            Finite Loop is a Coding Club, which aims to give a good perspective
            of development, and encourages students to realize their ideas. We
            encourage students to participate in competitive programming and
            thus, inspire the next.
          </p>
          <ul className="list-outside list-disc space-y-2 text-gray-500">
            <li>
              <span>We stay curious, and seek out new solutions.</span>
            </li>
            <li>
              <span>We work relentlessly to produce fruitful results.</span>
            </li>
            <li>
              <span>
                We support each other to grow, with a positive spirit, and
                embrace our diversities.
              </span>
            </li>
          </ul>
        </div>

        <Image
          width={400}
          height={400}
          alt="flc"
          src={sampleImage}
          className="rounded"
        />
      </div>
    </section>
  );
}

export default AboutFLC;
