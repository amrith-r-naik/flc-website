"use client";

import Image from "next/image";

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

export default function TechStack() {
  return (
    <section className="flex h-full flex-col items-center  justify-center p-2   md:h-[100vh] md:w-screen md:flex-row ">
      <div className="relative flex h-[110vh] w-full  max-w-full items-center justify-center space-y-2 overflow-hidden  md:h-full  ">
        <span className="pointer-events-none whitespace-pre-wrap  bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center  text-3xl leading-none text-transparent dark:from-white dark:to-black sm:text-5xl md:text-6xl lg:text-6xl">
          “ Tech Resources ❞
        </span>

        <OrbitingCircles
          className="size-[20px] border-none bg-transparent sm:size-[25px] md:size-[40px]"
          duration={20}
          delay={20}
          radius={0}
        >
          <Image
            src={pythonIcon as string}
            width={30}
            height={30}
            className="overflow-hidden rounded-full object-cover"
            alt="JavaScript"
          />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[20px] border-none bg-transparent sm:size-[25px] md:size-[40px]"
          duration={20}
          delay={20}
          radius={70}
        >
          <Image
            src={vscode}
            width={30}
            height={30}
            className="overflow-hidden rounded-full object-cover"
            alt="JavaScript"
          />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[20px] border-none bg-transparent sm:size-[25px] md:size-[30px]"
          duration={20}
          delay={10}
          radius={70}
        >
          <Image
            src={Gc as string}
            width={30}
            height={30}
            className="overflow-hidden rounded-full object-cover"
            alt="Next.js"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[40px] border-none bg-transparent sm:size-[45px] md:size-[40px]"
          radius={150}
          duration={20}
          delay={30}
        >
          <Image
            src={jsIcon as string}
            width={30}
            height={30}
            className="overflow-hidden rounded-full object-cover"
            alt="TypeScript"
          />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent sm:size-[45px] md:size-[40px]"
          radius={150}
          duration={20}
          delay={20}
        >
          <Image
            src={graphqlIcon as string}
            width={50}
            height={50}
            className="overflow-hidden rounded-full object-cover"
            alt="TypeScript"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[40px] border-none bg-transparent sm:size-[45px] md:size-[50px]"
          radius={220}
          duration={20}
          delay={20}
        >
          <Image
            src={canva}
            width={30}
            height={30}
            className="overflow-hidden rounded-full object-cover"
            alt="Go"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[40px] border-none bg-transparent sm:size-[45px] md:size-[50px]"
          radius={220}
          duration={20}
          delay={50}
        >
          <Image
            src="/go.png"
            width={30}
            height={30}
            className="overflow-hidden rounded-full object-cover"
            alt="Go"
          />
        </OrbitingCircles>
      </div>
      <div className="relative flex    h-[100vh] w-full  max-w-full items-center justify-center space-y-2 overflow-hidden  md:h-full  ">
        <span className="pointer-events-none whitespace-pre-wrap  bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center  text-5xl leading-none text-transparent dark:from-white dark:to-black sm:text-5xl md:text-6xl lg:text-6xl">
          “ T3-Stack ❞
        </span>

        <OrbitingCircles
          className="size-[20px] border-none bg-transparent sm:size-[25px] md:size-[40px]"
          duration={20}
          delay={20}
          radius={0}
        >
          <Image
            src={tsIcon as string}
            width={30}
            height={30}
            className="overflow-hidden rounded-full object-cover"
            alt="JavaScript"
          />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[20px] border-none bg-transparent sm:size-[25px] md:size-[40px]"
          duration={20}
          delay={20}
          radius={70}
        >
          <Image
            src={nextAuth}
            width={30}
            height={30}
            className="overflow-hidden rounded-full object-cover"
            alt="JavaScript"
          />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[20px] border-none bg-transparent sm:size-[25px] md:size-[30px]"
          duration={20}
          delay={10}
          radius={70}
        >
          <Image
            src={nextJsIcon as string}
            width={30}
            height={30}
            className="overflow-hidden rounded-full object-cover"
            alt="Next.js"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[40px] border-none bg-transparent sm:size-[45px] md:size-[40px]"
          radius={150}
          duration={20}
          delay={30}
        >
          <Image
            src={trpcIcon as string}
            width={30}
            height={30}
            className="overflow-hidden rounded-full object-cover"
            alt="TypeScript"
          />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[40px] border-none bg-transparent sm:size-[45px] md:size-[40px]"
          radius={150}
          duration={20}
          delay={20}
        >
          <Image
            src={postgress}
            width={50}
            height={50}
            className="overflow-hidden rounded-full object-cover"
            alt="TypeScript"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[40px] border-none bg-transparent sm:size-[45px] md:size-[50px]"
          radius={220}
          duration={20}
          delay={20}
        >
          <Image
            src={tailwindIcon as string}
            width={30}
            height={30}
            className="overflow-hidden rounded-full object-cover"
            alt="Go"
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[40px] border-none bg-transparent sm:size-[45px] md:size-[50px]"
          radius={220}
          duration={20}
          delay={50}
        >
          <Image
            src={prisma as string}
            width={30}
            height={30}
            className="overflow-hidden rounded-full object-cover"
            alt="Go"
          />
        </OrbitingCircles>
      </div>
    </section>
  );
}
