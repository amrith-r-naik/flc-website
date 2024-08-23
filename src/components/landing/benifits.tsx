"use client";

import Image from "next/image";

export function Benifits() {
  return (
    <section className="relative z-50 mb-44 mt-20 flex h-[145vh] flex-col items-center justify-center px-4 pb-4 font-sans  sm:px-8 md:px-16 xl:px-36">
      <div className="line-break "></div>
      <div className="event-bg "></div>
      <p
        className=" absolute bottom-auto left-0 right-0 top-10 hidden text-center text-7xl text-transparent  lg:text-9xl xl:visible xl:block"
        style={{
          WebkitTextStroke: "1px #201E43",
        }}
      >
        What is in it for you?
      </p>
      <div className="mb-4 mt-32 flex  items-center justify-center sm:mb-24 sm:mt-0">
        <h1 className="events-heading z-10  py-2 pt-14 text-7xl font-semibold sm:py-2 xl:text-8xl">
          Benefits.
        </h1>
      </div>
      <div className="z-1 grid h-full w-full grid-cols-2  grid-rows-10  gap-4 sm:grid-cols-4 sm:grid-rows-5 lg:grid-cols-5 lg:grid-rows-4 ">
        <div className="grid-card relative col-span-1 col-start-1 row-span-1 row-start-1 row-end-2 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl   p-4 px-2 ">
          <p className="font-bebas-neue   text-xl  tracking-widest sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:text-4xl lg:tracking-widest">
            {" "}
            Internships
          </p>
          <Image
            src="/grid_bg.png"
            alt=""
            fill
            className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
          />
        </div>
        <div className="grid-card relative col-span-1 col-start-1 row-span-1 row-start-2 row-end-3 flex items-center justify-center rounded-2xl  p-1 px-2 text-lg sm:col-start-2 sm:row-start-1 sm:row-end-1">
          <Image src="/logo.webp" alt="" fill />
          <Image
            src="/grid_bg_yellow.png"
            alt=""
            fill
            className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
          />
        </div>
        <div className="grid-card relative col-span-1 col-start-2 col-end-3 row-span-2 row-start-1 row-end-3 flex flex-col items-center justify-center gap-y-4 rounded-2xl px-2 font-bebas-neue  text-xl tracking-widest sm:col-start-4 sm:col-end-5 sm:row-start-3  sm:row-end-5 sm:text-2xl sm:tracking-wide md:gap-y-8 md:text-3xl  md:tracking-wider lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:text-4xl lg:tracking-widest">
          <p>Real</p>
          <p>Time</p>
          <p>Projects</p>

          <Image
            src="/grid_bg_right.png"
            alt=""
            fill
            className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
          />
        </div>
        <div className="grid-card relative col-span-2 col-start-1 col-end-3 row-span-1 row-start-3 row-end-4 flex items-center justify-center rounded-2xl px-2 font-bebas-neue  text-xl tracking-widest sm:col-start-3  sm:col-end-5  sm:row-start-1 sm:row-end-1 sm:text-2xl  sm:tracking-wide md:text-3xl md:tracking-wider lg:col-start-4 lg:col-end-6 lg:text-4xl lg:tracking-widest">
          <p> Guest Lectures</p>{" "}
          <Image
            src="/grid_bg_topdown.png"
            alt=""
            fill
            className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
          />
        </div>
        <div className="grid-card  relative col-span-2 row-span-2 flex flex-col items-center justify-center rounded-2xl  px-2 sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-4 sm:py-2 md:py-4">
          <h1 className="font-bebas-neue text-xl font-extrabold  tracking-widest sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:text-4xl lg:tracking-widest">
            What is HackFest?
          </h1>
          <p className="lg:text-md m-2 text-justify font-sans text-xs font-normal sm:m-4 sm:text-sm xl:text-lg">
            NMAM Institute of Technology presents a three-day National Tech Fest
            featuring a 36-hour hackathon, tech conferences, and networking. Our
            vision is to bring together 60 teams from leading Indian engineering
            colleges, fostering innovation. The event spans 50 hours, including
            a 36-hour hackathon, providing a platform for participants to
            showcase their skills.
          </p>
          <Image
            src="/grid_bg_topdown.png"
            fill
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
          />
        </div>
        <div className="grid-card relative col-span-1 row-span-1 flex items-center justify-center rounded-2xl px-2  font-bebas-neue text-xl  tracking-widest  sm:col-start-3 sm:col-end-4 sm:text-2xl sm:tracking-wide md:text-3xl  md:tracking-wider lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3 lg:text-4xl lg:tracking-widest">
          <p> Digital hunt</p>
          <Image
            src="/grid_bg_topdown.png"
            alt=""
            fill
            className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
          />
        </div>
        <div className="grid-card relative col-span-1 row-span-1 flex items-center justify-center rounded-2xl px-2 font-bebas-neue text-xl  tracking-widest sm:col-start-4  sm:col-end-5 sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3 lg:text-4xl lg:tracking-widest">
          <p> Tech advent</p>
          <Image
            src="/grid_bg_topdown.png"
            alt=""
            fill
            className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
          />
        </div>
        <div className="grid-card relative col-span-2 row-span-1 flex items-center justify-center rounded-2xl px-2 text-center font-bebas-neue text-xl  tracking-widest sm:col-start-2 sm:col-end-4  sm:row-start-4  sm:row-end-5 sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-4 lg:text-4xl lg:tracking-widest">
          <p> HackLoop & HackXpo</p>
          <Image
            src="/grid_bg.png"
            alt=""
            fill
            className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
          />
        </div>
        <div className="grid-card col-span- relative row-span-2 row-start-8  row-end-10 flex flex-col items-center justify-center gap-y-4 rounded-2xl px-2 text-center  font-bebas-neue  text-xl  tracking-widest sm:col-start-1 sm:col-end-2  sm:row-start-4 sm:row-end-6 sm:text-2xl sm:tracking-wide md:text-3xl  md:tracking-wider lg:col-start-5 lg:col-end-6 lg:row-start-3 lg:row-end-5 lg:text-4xl lg:tracking-widest">
          <p>Peer</p>
          <p>To</p>
          <p>Peer</p>
          <p>Learning</p>
          <Image
            src="/grid_bg_right.png"
            alt=""
            fill
            className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
          />
        </div>
        <div className="grid-card relative col-span-2 row-span-1 flex items-center justify-center rounded-2xl px-2 font-bebas-neue text-xl  tracking-widest sm:col-start-2 sm:col-end-4  sm:row-start-5  sm:row-end-6 sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:col-start-2 lg:col-end-4 lg:row-start-4 lg:row-end-5 lg:text-4xl lg:tracking-widest">
          <p> Coding Contests</p>
          <Image
            src="/grid_bg_topdown.png"
            alt=""
            fill
            className="absolute bottom-0 left-0 right-0 top-0 z-40 opacity-50"
          />
        </div>
        <div className="grid-card relative col-span-1 row-span-1 row-start-8 row-end-9 flex items-center justify-center rounded-2xl  px-2 text-lg sm:row-start-3 sm:row-end-4 lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5">
          <p className=" text-center font-bebas-neue text-xl  tracking-widest sm:text-2xl sm:tracking-wide md:text-3xl md:tracking-wider lg:text-4xl lg:tracking-widest">
            WORKSHOPS
          </p>
          <Image
            src="/grid_bg.png"
            alt=""
            fill
            className="z-40l absolute bottom-0 left-0 right-0 top-0 opacity-50"
          />
        </div>
        <div className="grid-card relative col-span-1 row-span-1 row-start-9 row-end-10 flex items-center justify-center overflow-hidden rounded-2xl  px-2 text-lg sm:row-start-5 sm:row-end-6 lg:col-start-4 lg:col-end-5 lg:row-start-4 lg:row-end-5">
          <div className="relative h-[70%] w-[95%] sm:h-[40%] sm:w-[85%]">
            <Image src="/assets/images/flc_logo.png" alt="" fill />
          </div>
          <Image
            src="/grid_bg_yellow.png"
            alt=""
            fill
            className="z-40l absolute bottom-0 left-0 right-0 top-0 opacity-50"
          />
        </div>
      </div>
    </section>
  );
}

export default Benifits;
