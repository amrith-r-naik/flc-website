"use client";

import Image, { type StaticImageData } from "next/image";

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
  return (
    <section className="content-container min-h-screen w-full space-y-8  bg-gradient-to-b from-black via-indigo-950 to-black ">
      <h3 className="rounded-r-full border border-yellow-700 p-4 text-center text-4xl font-semibold">
        Why To Join Us
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
