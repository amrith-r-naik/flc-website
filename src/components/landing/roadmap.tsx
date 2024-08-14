"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { type FC, useRef } from "react";

import BoxReveal from "../magicui/box-reveal";

// Define the props interface for the Card component
interface CardProps {
  heading: string;
  image: string;
  description: string;
  link: string;
}

// Data array for the cards
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
        className="relative flex  h-40 flex-col justify-end overflow-hidden rounded-lg border border-gray-300 shadow-sm md:h-80"
      >
        <Image
          src={image}
          alt={heading}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 h-full w-full"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative z-20 flex flex-col items-start p-4 text-left text-white">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h3 className="mb-2 text-lg font-semibold">{heading}</h3>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-sm">{description}</p>
          </BoxReveal>
        </div>
      </div>
    </Link>
  );
};

// Roadmap component with GSAP animation
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
    <section className="h-screen space-y-16  p-2  md:p-10   ">
      <div ref={ref}>
        <div className="rounded-r-full p-4 text-center md:mb-10">
          <h1 className="subheading text-3xl  font-bold">
            “ Finite Loop Club Presents: The Roadmap for 2024-25 ❞
          </h1>
        </div>

        <div className="card-container grid grid-cols-1 gap-6 p-2 md:grid-cols-4">
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
