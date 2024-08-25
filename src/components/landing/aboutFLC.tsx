
"use client";
/* eslint-disable */
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Hf from "~/assets/images/hackfest[1].png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import members from "~/assets/icons/members.png";
import events from "~/assets/icons/events.png";
import wk from "~/assets/icons/workshop1.png";
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
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView && !hasAnimated) {
      gsap.fromTo(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        containerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
        }
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
      }
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
      }
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
      }
    );
  }, []);

  return (
    <section
      className="mx-4 min-h-[70vh] rounded-2xl p-1 md:mt-4 md:p-6 mb-8"
      ref={sectionRef}
    >
      <h1
        className="text-center mb-8 z-10 font-title py-2 pt-12 text-2xl font-bold sm:py-2 xl:text-5xl"
        ref={headingRef}
      >
        “ FINITELOOP: The best Coding Club of NMAMIT ❞
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        <div
          className="p-2 md:p-4 rounded-lg shadow-xl border border-gray-50 flex flex-col md:w-1/2"
          ref={leftContainerRef}
        >
          <Image
            alt="FiniteLoop"
            src={Hf}
            className="rounded-lg object-cover w-full h-auto"
            width={450}
            height={550}
          />
          <div className="mt-2 p-4 text-justify text-sm md:text-xl font-sub-heading font-thin">
            <p>
              Finite Loop is a Coding Club, which aims to give a good perspective
              of development, and encourages students to realize their ideas. We
              encourage students to participate in competitive programming and
              thus, inspire the next.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Collaborative projects to build innovative solutions.</li>
              <li>Workshops and events to enhance technical skills.</li>
              <li>Opportunities to participate in hackathons and competitions.</li>
            </ul>
          </div>

          <div ref={ref} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center relative md:p-4">
            <div ref={containerRef} className="text-lg sm:text-xl xl:text-2xl relative flex items-center justify-center">
              <div
                style={{
                  background: "radial-gradient(50% 70.31% at 50% 0%, rgb(123 104 162 / 33%) 0%, rgb(134 73 255 / 0%) 100%), rgb(19 4 45 / 80%)",
                }}
                className="text-white rounded-lg p-6 shadow-lg h-48 w-full flex flex-col items-center relative"
              >
                <div className="flex items-center mb-2">
                  <Image
                    src={members}
                    alt="Active Members Logo"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div className="ml-4 flex flex-col items-center">
                    <div className="font-bold text-4xl xl:text-5xl">
                      {hasAnimated ? <CountUp end={300} duration={2} /> : "0"}+
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-xl">Active Members</div>
              </div>
            </div>

            <div className="text-lg sm:text-xl xl:text-2xl relative flex items-center justify-center">
              <div
                style={{
                  background: "radial-gradient(50% 70.31% at 50% 0%, rgb(123 104 162 / 33%) 0%, rgb(134 73 255 / 0%) 100%), rgb(19 4 45 / 80%)",
                }}
                className="text-white rounded-lg p-6 shadow-lg h-48 w-full flex flex-col items-center relative"
              >
                <div className="flex items-center mb-2">
                  <Image
                    src={events}
                    alt="Events Organized Logo"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div className="ml-4 flex flex-col items-center">
                    <div className="font-bold text-4xl xl:text-5xl">
                      {hasAnimated ? <CountUp end={30} duration={2} /> : "0"}+
                    </div>
                  </div>
                </div>
                <div className="mt-2">Events Organized</div>
              </div>
            </div>

            <div className="text-lg sm:text-xl xl:text-2xl relative flex items-center justify-center">
              <div
                style={{
                  background: "radial-gradient(50% 70.31% at 50% 0%, rgb(123 104 162 / 33%) 0%, rgb(134 73 255 / 0%) 100%), rgb(19 4 45 / 80%)",
                }}
                className="text-white rounded-lg p-6 shadow-lg h-48 w-full flex flex-col items-center relative"
              >
                <div className="flex items-center mb-3">
                  <Image
                    src={wk}
                    alt="Workshops Conducted Logo"
                    width={84}
                    height={84}
                    className="rounded-full"
                  />
                  <div className="ml-4 flex flex-col items-center">
                    <div className="font-bold text-4xl xl:text-5xl">
                      {hasAnimated ? <CountUp end={10} duration={2} /> : "0"}+
                    </div>
                  </div>
                </div>
                <div className="mt-2">Live Workshop</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 md:w-1/2" ref={rightContainerRef}>
          <div className="p-2 rounded-lg shadow-lg border border-white flex justify-center items-center">
            <Image
              alt="FiniteLoop Activity"
              src={Hf}
              className="rounded-lg h-full w-full object-cover"
              width={150}
              height={150}
            />
          </div>


          <div className="p-2 rounded-lg shadow-lg border border-white flex justify-center items-center">
            <Image
              alt="FiniteLoop Event"
              src={Hf}
              className="rounded-lg h-full w-full object-cover"
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

