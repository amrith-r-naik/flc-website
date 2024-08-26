"use client";

/* eslint-disable */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import events from "~/assets/icons/events.png";
import members from "~/assets/icons/members.png";
import wk from "~/assets/icons/workshop1.png";
import Hf from "~/assets/images/hackfest[1].png";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setHasAnimated(true);
      }
    },
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && !hasAnimated && containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
        },
      );
    }
  }, [inView, hasAnimated]);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      leftContainerRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftContainerRef.current,
          start: "top 100%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      rightContainerRef.current,
      {
        x: 100,
        opacity: 0,
        y: 50,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightContainerRef.current,
          start: "top 100%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <section
      className="mx-4 mb-8 min-h-[70vh] rounded-2xl p-1 md:mt-4 md:p-6"
      ref={sectionRef}
    >
      <h1
        className="z-10 mb-8 py-2 pt-12 text-center font-title text-2xl font-bold sm:py-2 xl:text-5xl"
        ref={headingRef}
      >
        “ FINITELOOP: The best Coding Club of NMAMIT ❞
      </h1>

      <div className="flex flex-col gap-4 md:flex-row">
        <div
          className="flex flex-col rounded-lg border border-gray-50 p-2 shadow-xl md:w-1/2 md:p-4"
          ref={leftContainerRef}
        >
          <Image
            alt="FiniteLoop"
            src={Hf}
            className="h-auto w-full rounded-lg object-cover"
            width={450}
            height={550}
          />
          <div className="mt-2 p-4 text-justify font-sub-heading text-sm font-thin md:text-xl">
            <p>
              Finite Loop is a Coding Club, which aims to give a good
              perspective of development, and encourages students to realize
              their ideas. We encourage students to participate in competitive
              programming and thus, inspire the next.
            </p>
            <ul className="mt-2 list-inside list-disc">
              <li>Collaborative projects to build innovative solutions.</li>
              <li>Workshops and events to enhance technical skills.</li>
              <li>
                Opportunities to participate in hackathons and competitions.
              </li>
            </ul>
          </div>

          <div
            ref={ref}
            className="relative mt-8 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 md:p-4 lg:grid-cols-3"
          >
            <div
              ref={containerRef}
              className="relative flex items-center justify-center text-lg sm:text-xl xl:text-2xl"
            >
              <div
                style={{
                  background:
                    "radial-gradient(50% 70.31% at 50% 0%, rgb(123 104 162 / 33%) 0%, rgb(134 73 255 / 0%) 100%), rgb(19 4 45 / 80%)",
                }}
                className="relative flex h-48 w-full flex-col items-center rounded-lg p-6 text-white shadow-lg"
              >
                <div className="mb-2 flex items-center">
                  <Image
                    src={members}
                    alt="Active Members Logo"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div className="ml-4 flex flex-col items-center">
                    <div className="text-4xl font-bold xl:text-5xl">
                      {hasAnimated ? <CountUp end={300} duration={2} /> : "0"}+
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-xl">Active Members</div>
              </div>
            </div>

            <div className="relative flex items-center justify-center text-lg sm:text-xl xl:text-2xl">
              <div
                style={{
                  background:
                    "radial-gradient(50% 70.31% at 50% 0%, rgb(123 104 162 / 33%) 0%, rgb(134 73 255 / 0%) 100%), rgb(19 4 45 / 80%)",
                }}
                className="relative flex h-48 w-full flex-col items-center rounded-lg p-6 text-white shadow-lg"
              >
                <div className="mb-2 flex items-center">
                  <Image
                    src={events}
                    alt="Events Organized Logo"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div className="ml-4 flex flex-col items-center">
                    <div className="text-4xl font-bold xl:text-5xl">
                      {hasAnimated ? <CountUp end={30} duration={2} /> : "0"}+
                    </div>
                  </div>
                </div>
                <div className="mt-2">Events Organized</div>
              </div>
            </div>

            <div className="relative flex items-center justify-center text-lg sm:text-xl xl:text-2xl">
              <div
                style={{
                  background:
                    "radial-gradient(50% 70.31% at 50% 0%, rgb(123 104 162 / 33%) 0%, rgb(134 73 255 / 0%) 100%), rgb(19 4 45 / 80%)",
                }}
                className="relative flex h-48 w-full flex-col items-center rounded-lg p-6 text-white shadow-lg"
              >
                <div className="mb-3 flex items-center">
                  <Image
                    src={wk}
                    alt="Workshops Conducted Logo"
                    width={84}
                    height={84}
                    className="rounded-full"
                  />
                  <div className="ml-4 flex flex-col items-center">
                    <div className="text-4xl font-bold xl:text-5xl">
                      {hasAnimated ? <CountUp end={10} duration={2} /> : "0"}+
                    </div>
                  </div>
                </div>
                <div className="mt-2">Live Workshop</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col space-y-2 md:w-1/2"
          ref={rightContainerRef}
        >
          <div className="flex items-center justify-center rounded-lg border border-white p-2 shadow-lg">
            <Image
              alt="FiniteLoop Activity"
              src={Hf}
              className="h-full w-full rounded-lg object-cover"
              width={150}
              height={150}
            />
          </div>

          <div className="flex items-center justify-center rounded-lg border border-white p-2 shadow-lg">
            <Image
              alt="FiniteLoop Event"
              src={Hf}
              className="h-full w-full rounded-lg object-cover"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
