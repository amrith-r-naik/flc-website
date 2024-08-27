"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { type FC, useRef } from "react";

import BoxReveal from "../magicui/box-reveal";

interface CardProps {
  heading: string;
  image: string;
  description: string;
  link: string;
}

const eodmaosp = [
  {
    heading: "DSA",
    image: "/dsa.jpg",
    description: "Learn Data Structures and Algorithms.",
    link: "#",
  },
  {
    heading: "Web Dev",
    image: "/web.avif",
    description: "Master Full Stack Web development skills.",
    link: "#",
  },
  {
    heading: "App Dev",
    image: "/app.avif",
    description: "Build and deploy mobile applications.",
    link: "#",
  },
  {
    heading: "Blockchain",
    image: "/blockchain.avif",
    description: "Understand blockchain technology.",
    link: "#",
  },
];

const Card: FC<CardProps> = ({ heading, image, description, link }) => {
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

  return (
    <Link href={link}>
      <div
        ref={cardRef}
        className=" relative mb-2 flex h-40 flex-col justify-end overflow-hidden rounded-lg border border-gray-300 shadow-sm md:h-80"
      >
        <Image
          src={image}
          alt={heading}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 h-full w-full"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative z-20 flex flex-col items-start p-4 text-left font-sub-heading  text-white ">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h3 className="mb-2  text-xl font-bold">{heading}</h3>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-md">{description}</p>
          </BoxReveal>
        </div>
      </div>
    </Link>
  );
};

const Roadmap: FC = () => {
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
    <section className="mb-2 min-h-[100vh] space-y-16 p-2 md:mt-10 md:p-10">
      <div ref={ref}>
        <div className="text-center">
          <h1 className="py-2 pt-14 font-title text-3xl font-bold sm:py-2 xl:text-6xl">
            “ FLC Presents: The Roadmap for 2024-25 ❞
          </h1>
        </div>

        {/* Horizontal Line with Points for Larger Screens */}
        <div className="relative mb-16 mt-10 hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-1 w-full bg-gray-300"></div>
          </div>
          <div className="relative flex justify-between">
            {eodmaosp.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mt-6 h-6 w-6 rounded-full bg-blue-500"></div>
                <div className="mt-2 text-center text-sm">{item.heading}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Line with Points for Smaller Screens */}
        <div className="relative mb-16 mt-10 block md:hidden">
          <div className="flex items-start gap-2">
            {/* Vertical Line */}
            <div className="relative flex flex-col items-center  border-l  ">
              {eodmaosp.map((item, index) => (
                <div key={index} className="relative mb-36 ">
                  <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                  <div className="mt-2 text-center text-sm">{item.heading}</div>
                </div>
              ))}
            </div>

            {/* Cards */}
            <div className="space-y-10  ">
              {eodmaosp.map((item, index) => (
                <Card
                  key={index}
                  heading={item.heading}
                  image={item.image}
                  description={item.description}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Card Section for Larger Screens */}
        <div className="hidden grid-cols-1 gap-6 p-2 md:grid md:grid-cols-4">
          {eodmaosp.map((item, index) => (
            <Card
              key={index}
              heading={item.heading}
              image={item.image}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
