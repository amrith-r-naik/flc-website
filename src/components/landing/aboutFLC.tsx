
"use client";
/* eslint-disable */
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Hf from "~/assets/images/hackfest[1].png";
import members from "~/assets/icons/members.png";
import events from "~/assets/icons/events.png";
import wk from "~/assets/icons/workshop1.png";
import core from "~/assets/icons/core.png";
import ab from "~/assets/images/abut3.jpeg";
import ab3 from "~/assets/images/about.jpg";



gsap.registerPlugin(ScrollTrigger);

const gridItems = [
  {
    id: 1,
    src: members,
    alt: "Active Members Logo",
    endCount: 300,
    label: "Active Members",
    width: 64,
    height: 64,
  },
  {
    id: 2,
    src: events,
    alt: "Events Organized Logo",
    endCount: 30,
    label: "Events Organized",
    width: 64,
    height: 64,
  },
  {
    id: 3,
    src: wk,
    alt: "Workshops Conducted Logo",
    endCount: 10,
    label: "Workshop Conducted",
    width: 84,
    height: 84,
  },
  {
    id: 4,
    src: core,
    alt: "Workshops Conducted Logo",
    endCount: 10,
    label: "Core Members",
    width: 84,
    height: 84,
  },
];



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
    <>
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
           
            <div className="flex flex-col md:flex-row gap-4 mb-4">


             
              <div className="w-full h-[300px] md:h-[350px]">
                <Image
                  alt="FiniteLoop"
                  src={ab3}
                  className="rounded-lg object-cover w-full h-full"
                  quality={100}
                />
              </div>
            </div>

         
            <div className="p-4 text-justify text-sm md:text-xl font-sub-heading font-thin">
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
          </div>


          <div
            className="p-2 md:p-4 rounded-lg shadow-xl border border-gray-50 md:w-1/2 "
            ref={rightContainerRef}
          >
            <div className="flex flex-col md:flex-col gap-4 mb-4">


              <div className="w-full  h-[400px] md:h-[550px]">
                <Image
                  alt="FiniteLoop"
                  src={ab}
                  className="rounded-2xl object-cover w-full h-full"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      <div>
      <div>
        <div
          ref={ref}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center md:p-4"
        >
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="text-lg sm:text-xl xl:text-2xl flex items-center justify-center"
            >
              <div
                style={{
                  background:
                    "radial-gradient(50% 70.31% at 50% 0%, rgb(123 104 162 / 33%) 0%, rgb(134 73 255 / 0%) 100%), rgb(19 4 45 / 80%)",
                }}
                className="text-white rounded-lg p-6 shadow-lg h-48 w-full flex flex-col items-center"
              >
                <div className="flex items-center mb-2">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="rounded-full"
                  />
                  <div className="ml-4 flex flex-col items-center">
                    <div className="font-bold text-4xl xl:text-5xl">
                      {hasAnimated ? (
                        <CountUp end={item.endCount} duration={2} />
                      ) : (
                        "0"
                      )}
                      +
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-xl">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default AboutUs;



