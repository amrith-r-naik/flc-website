"use client";

import Image, { type StaticImageData } from "next/image";

import canva from "~/assets/icons/canva.webp";
import Gc from "~/assets/icons/gc.svg";
import graphqlIcon from "~/assets/icons/graphql-svgrepo-com.svg";
import jsIcon from "~/assets/icons/javascript-svgrepo-com.svg";
import nextAuth from "~/assets/icons/na.png";
import nextJsIcon from "~/assets/icons/nextjs-icon-svgrepo-com.svg";
import postgress from "~/assets/icons/PostgreSQL.png";
import prisma from "~/assets/icons/prisma-svgrepo-com.svg";
import pythonIcon from "~/assets/icons/python.svg";
import tailwindIcon from "~/assets/icons/tailwind-svgrepo-com.svg";
import trpcIcon from "~/assets/icons/trpc.svg";
import tsIcon from "~/assets/icons/typescript-svgrepo-com.svg";
import vscode from "~/assets/icons/vs.png";

import OrbitingCircles from "../magicui/orbiting-circles";

const techStack: { name: string; icon: StaticImageData }[] = [
  {
    name: "Python",
    icon: pythonIcon as StaticImageData,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "Google Cloud",
    icon: Gc as StaticImageData,
  },
  {
    name: "JavaScript",
    icon: jsIcon as StaticImageData,
  },
  {
    name: "GraphQL",
    icon: graphqlIcon as StaticImageData,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon as StaticImageData,
  },
  {
    name: "PostgreSQL",
    icon: postgress,
  },
  {
    name: "TypeScript",
    icon: tsIcon as StaticImageData,
  },
  {
    name: "Prisma",
    icon: prisma as StaticImageData,
  },
  {
    name: "Next.js",
    icon: nextJsIcon as StaticImageData,
  },
  {
    name: "NextAuth",
    icon: nextAuth,
  },
  {
    name: "TRPC",
    icon: trpcIcon as StaticImageData,
  },
];

export default function TechStack() {
  return (
    <section className="flex h-full flex-col items-center  justify-center p-2   md:h-[100vh] md:w-screen md:flex-row ">
      <div className="relative flex h-[110vh] w-full  max-w-full items-center justify-center space-y-2 overflow-hidden  md:h-full  ">
        <span className="pointer-events-none whitespace-pre-wrap  bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center  text-3xl leading-none text-transparent dark:from-white dark:to-black sm:text-5xl md:text-6xl lg:text-6xl">
          “ Tech Stack ❞
        </span>
        {techStack.map((tech, idx) => (
          <OrbitingCircles
            key={idx}
            className="size-[20px] border-none bg-transparent sm:size-[25px] md:size-[40px]"
            duration={10 + Math.random() * 20}
            delay={Math.random() * 100}
            radius={(1 + (idx % 5)) * 70}
            reverse={Math.random() > 0.5}
          >
            <Image
              src={tech.icon}
              className="overflow-hidden rounded-full object-cover"
              alt={tech.name}
            />
          </OrbitingCircles>
        ))}
      </div>
    </section>
  );
}
