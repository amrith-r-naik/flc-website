"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

import sampleImage from "~/assets/images/sample.jpg";

import Marquee from "../magicui/marquee";

const benifits = [
  {
    icon: sampleImage,
    title: "Workshops",
    content:
      "The members get free access to all the events and workshops conducted by the Finite Loop club.",
  },
  {
    icon: sampleImage,
    title: "Internships",
    content: "Get a chance to grab internships and put your skills into use.",
  },
  {
    icon: sampleImage,
    title: "Peer to Peer Learning",
    content:
      "Explain your ideas to others and participate in activities through which you can learn from your peers.",
  },
  {
    icon: sampleImage,
    title: "Guest Lecture",
    content:
      "Get an opportunity to listen to some of the renowned experts, and engage in discussions.",
  },
  {
    icon: sampleImage,
    title: "Real-Time Projects",
    content:
      "Being in this club, you get to work on real time projects, which allows you to bring out your creative side.",
  },
  {
    icon: sampleImage,
    title: "Coding Contest",
    content:
      "We ensure to conduct biweekly coding contests, to improve your analytical and problem solving skills.",
  },
];

const firstRow = benifits.slice(0, benifits.length / 2);
const secondRow = benifits.slice(benifits.length / 2);

const ReviewCard = ({
  icon,
  title,
  content,
}: {
  icon: StaticImageData;
  title: string;
  content: string;
}) => {
  return (
    <figure className="relative w-80 cursor-pointer overflow-hidden rounded-xl border border-black bg-white p-6 hover:bg-slate-200 dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
      <div className="flex flex-row items-center gap-3">
        <Image
          className="rounded-full"
          src={icon}
          alt={title}
          width={48}
          height={48}
          layout="intrinsic"
        />
        <div className="flex flex-col">
          <figcaption className="caption font-medium dark:text-white">
            {title}
          </figcaption>
        </div>
      </div>
      <blockquote className="caption mt-3">{content}</blockquote>
    </figure>
  );
};

export function Benifits() {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ref.current,
          toggleActions: "restart none none reverse",
        },
      });

      gsap.from(".benifit", {
        opacity: 0,
        y: 100,
        stagger: {
          grid: "auto",
          amount: 1,
        },
        scrollTrigger: {
          trigger: ref.current,
          toggleActions: "restart none none reverse",
        },
      });
    },
    { scope: ref },
  );
  return (
    <section
      className="mb-12 mt-12 min-h-[80vh] w-full space-y-8 md:p-10   "
      ref={ref}
    >
      <h3 className="subheading text-center font-semibold">
        {" "}
        “ Why To join us ❞{" "}
      </h3>

      <div className="w-full flex-1 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((benefit, index) => (
            <ReviewCard key={index} {...benefit} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((benefit, index) => (
            <ReviewCard key={index} {...benefit} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Benifits;
