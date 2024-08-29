"use client";

import { Download } from "lucide-react";
import Image from "next/image";

import { Button } from "~/components/ui/button";

import FadeIn from "../fadeIn";

export function Benifits() {
  return (
    <section className="relative z-50 mb-20 mt-20 flex flex-col items-center justify-center px-4 pb-4 font-sans sm:mb-44 sm:h-[145vh]  sm:px-8 md:px-16 xl:px-36">
      <div className="line-break "></div>
      <div className="event-bg "></div>
      <p
        className=" absolute bottom-auto left-1/2 right-0 top-36 w-max -translate-x-1/2  px-2 text-center text-[2rem] text-transparent sm:top-24 md:top-14 md:block md:text-[5.25rem] lg:visible lg:text-8xl xl:text-9xl"
        style={{
          WebkitTextStroke: "3px #201E43",
        }}
      >
        What is in it for you?
      </p>
      <div className="mb-16 mt-4 flex items-center justify-center sm:mb-24">
        <h1 className="events-heading z-10  py-2 pt-14 text-7xl font-semibold sm:py-2 xl:text-8xl">
          Benefits.
        </h1>
      </div>
      <div className="z-1 grid h-full w-full grid-cols-2  grid-rows-10  gap-4 sm:grid-cols-4 sm:grid-rows-5 lg:grid-cols-5 lg:grid-rows-4 ">
        <FadeIn
          direction="left"
          delay={0.1}
          className="relative  col-span-1 col-start-1 row-span-1 row-start-1 row-end-2 h-full w-full"
        >
          <div className="grid-card  flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl   p-4 px-2 ">
            <Image
              src="/grid_bg.png"
              alt=""
              fill
              className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
            />
            <div className="grid-card-content">
              <p className="font-bebas-neue   text-xl  tracking-widest sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:tracking-widest xl:text-4xl">
                {" "}
                Internships
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn
          direction="down"
          delay={0.2}
          className="relative col-span-1 col-start-1 row-span-1 row-start-2 row-end-3 h-full w-full sm:col-start-2 sm:row-start-1 sm:row-end-1 "
        >
          <div className="grid-static flex h-full w-full items-center justify-center rounded-2xl  p-1 px-2 text-lg ">
            <Image
              src="/grid_bg_yellow.png"
              alt=""
              fill
              className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
            />
            <div className="grid-card-content">
              <Image
                src="/logo.webp"
                alt=""
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </FadeIn>
        <FadeIn
          direction="down"
          delay={0.3}
          className=" grid-card relative col-span-1 col-start-2 col-end-3 row-span-2 row-start-1 row-end-3 h-full w-full  sm:col-start-4 sm:col-end-5 sm:row-start-3  sm:row-end-5 lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:tracking-widest"
        >
          <div className=" flex h-full w-full flex-col items-center justify-center gap-y-4 rounded-2xl p-4 font-bebas-neue  text-xl tracking-widest sm:text-2xl sm:tracking-wide md:gap-y-8 md:text-3xl  md:tracking-wider  xl:text-4xl">
            <p className="z-[50] duration-300 ease-in-out hover:text-5xl hover:text-yellow-400">
              {" "}
              Real
            </p>
            <p className="z-[50] duration-300 ease-in-out hover:text-5xl hover:text-yellow-400">
              Time
            </p>
            <p className="z-[50] duration-300 ease-in-out hover:text-5xl hover:text-yellow-400">
              Projects
            </p>
            <Image
              src="/grid_bg_right.png"
              alt=""
              fill
              className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
            />
          </div>
        </FadeIn>

        <FadeIn
          direction="up"
          delay={0.4}
          className="relative col-span-2 col-start-1 col-end-3 row-span-1 row-start-3 row-end-4  h-full  w-full      rounded-2xl px-2 font-bebas-neue text-xl tracking-widest sm:col-start-3 sm:col-end-5  sm:row-start-1 sm:row-end-1 sm:text-2xl  sm:tracking-wide md:text-3xl md:tracking-wider lg:col-start-4 lg:col-end-6 lg:tracking-widest xl:text-4xl"
        >
          <div className="grid-card flex h-full w-full items-center justify-center">
            <Image
              src="/grid_bg_topdown.png"
              alt=""
              fill
              className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
            />
            <div className="grid-card-content">
              <p> Dev Meetups</p>{" "}
            </div>
          </div>
        </FadeIn>

        <FadeIn
          direction="left"
          className="relative col-span-2 row-span-2 h-full w-full sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-4"
        >
          <div className="grid-card  flex h-full w-full flex-col items-center justify-center rounded-2xl px-2  sm:py-2 md:py-4">
            <Image
              src="/grid_bg_topdown.png"
              fill
              alt=""
              className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
            />
            <div className="grid-card-content">
              <h1 className="text-center font-bebas-neue text-xl font-extrabold tracking-widest sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:tracking-widest xl:text-4xl">
                What is HackFest?
              </h1>
              <p className="lg:text-md m-2 text-justify font-sans text-xs font-normal sm:m-4 sm:text-sm xl:text-lg">
                NMAM Institute of Technology presents a three-day National Tech
                Fest featuring a 36-hour hackathon, tech conferences, and
                networking. Our vision is to bring together 60 teams from
                leading Indian engineering colleges, fostering innovation. The
                event spans 50 hours, including a 36-hour hackathon, providing a
                platform for participants to showcase their skills.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn
          direction="right"
          delay={0.1}
          className="relative col-span-1 row-span-1 h-full w-full sm:col-start-3 sm:col-end-4 lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3"
        >
          <div className="grid-card  flex h-full w-full items-center justify-center rounded-2xl px-2  font-bebas-neue text-xl  tracking-widest  sm:text-2xl sm:tracking-wide md:text-3xl  md:tracking-wider  lg:tracking-widest xl:text-4xl">
            <Image
              src="/grid_bg_topdown.png"
              alt=""
              fill
              className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
            />
            <div className="grid-card-content">
              <p> Digital hunt</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn
          direction="right"
          delay={0.2}
          className="relative col-span-1 row-span-1 h-full w-full sm:col-start-4  sm:col-end-5 lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3"
        >
          <div className="grid-card  flex h-full w-full items-center justify-center rounded-2xl px-2 font-bebas-neue text-xl  tracking-widest  sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider  lg:tracking-widest xl:text-4xl">
            <Image
              src="/grid_bg_topdown.png"
              alt=""
              fill
              className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
            />
            <div className="grid-card-content">
              <p> Tech advent</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn
          direction="up"
          delay={0.3}
          className="relative col-span-2 row-span-1 h-full w-full sm:col-start-2 sm:col-end-4  sm:row-start-4  sm:row-end-5 lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-4"
        >
          <div className="grid-card flex h-full w-full items-center justify-center rounded-2xl px-2 text-center font-bebas-neue text-xl  tracking-widest sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider  lg:tracking-widest xl:text-4xl">
            <Image
              src="/grid_bg.png"
              alt=""
              fill
              className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
            />
            <div className="grid-card-content">
              <p> HackLoop & HackXpo</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn
          direction="right"
          delay={0.4}
          className="col-span- relative row-span-2 row-start-8  row-end-10 h-full w-full  sm:col-start-1 sm:col-end-2 sm:row-start-4 sm:row-end-6 lg:col-start-5 lg:col-end-6 lg:row-start-3 lg:row-end-5"
        >
          <div className="grid-static  flex h-full w-full flex-col items-center justify-center gap-y-4 rounded-2xl  p-4  text-center  font-bebas-neue text-xl tracking-widest sm:text-2xl sm:tracking-wide md:text-3xl  md:tracking-wider  lg:tracking-widest xl:text-4xl">
            <div className="relative aspect-[3/4] w-3/4 xl:w-2/4 2xl:w-4/5">
              <Image
                src="/assets/magazinecover.png"
                alt=""
                fill
                className="object-contain object-center"
              />
            </div>
            <a
              href="/assets/pdf/inFiniteInsider.pdf"
              target="_blank"
              className="z-50"
            >
              <Button className="gap-2 p-2 sm:mt-4 sm:p-0 sm:text-sm sm:font-medium md:text-base">
                <Download />
                Free Guide
              </Button>
            </a>

            <Image
              src="/grid_bg_right.png"
              alt=""
              fill
              className="absolute bottom-0 left-0 right-0 top-0 z-40  opacity-50"
            />
          </div>
        </FadeIn>
        <FadeIn
          direction="up"
          className="relative col-span-2 row-span-1 h-full w-full  sm:col-start-2  sm:col-end-4 sm:row-start-5 sm:row-end-6 lg:col-start-2 lg:col-end-4 lg:row-start-4 lg:row-end-5"
        >
          <div className="grid-card  flex h-full w-full items-center justify-center rounded-2xl px-2 font-bebas-neue text-xl  tracking-widest  sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:tracking-widest xl:text-4xl">
            <Image
              src="/grid_bg_topdown.png"
              alt=""
              fill
              className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
            />
            <div className="grid-card-content">
              <p> Coding Contests</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn
          direction="left"
          delay={0.1}
          className="relative col-span-1 row-span-1 row-start-8 row-end-9 h-full w-full sm:row-start-3 sm:row-end-4 lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5"
        >
          <div className="grid-card  flex h-full w-full items-center justify-center rounded-2xl  px-2 text-lg ">
            <Image
              src="/grid_bg.png"
              alt=""
              fill
              className="z-40l absolute bottom-0 left-0 right-0 top-0 opacity-50"
            />
            <div className="grid-card-content">
              <p className=" text-center font-bebas-neue text-xl  tracking-widest sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:tracking-widest xl:text-4xl">
                WORKSHOPS
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn
          delay={0.2}
          direction="up"
          className="relative col-span-1 row-span-1 row-start-9 row-end-10 h-full w-full sm:row-start-5 sm:row-end-6 lg:col-start-4 lg:col-end-5 lg:row-start-4 lg:row-end-5"
        >
          <div className="grid-card flex h-full w-full items-center justify-center overflow-hidden rounded-2xl  px-2 text-lg ">
            <Image
              src="/grid_bg_yellow.png"
              alt=""
              fill
              className="z-40l absolute bottom-0 left-0 right-0 top-0 opacity-50"
            />
            <div className=" grid-card-content relative h-[70%] w-[95%] sm:h-[40%] sm:w-[97%]">
              <Image
                src="/assets/images/flc_logo.png"
                alt=""
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Benifits;
