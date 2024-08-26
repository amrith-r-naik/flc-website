/* eslint-disable */
"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import docker from "~/assets/icons/docker.png";
import Gc from "~/assets/icons/gc.svg";
import github from "~/assets/icons/git.webp";
import go from "~/assets/icons/go.svg";
import graphqlIcon from "~/assets/icons/graphql-svgrepo-com.svg";
import jsIcon from "~/assets/icons/javascript-svgrepo-com.svg";
import nextAuth from "~/assets/icons/na.png";
import next from "~/assets/icons/ns.webp";
import ps from "~/assets/icons/postgress.svg";
import prisma from "~/assets/icons/prisma.png";
import pythonIcon from "~/assets/icons/py.png";
import tailwindIcon from "~/assets/icons/tailwind-svgrepo-com.svg";
import trpcIcon from "~/assets/icons/trpc.svg";
import tsIcon from "~/assets/icons/typescript-svgrepo-com.svg";
import vscode from "~/assets/icons/vs.png";

import OrbitingCircles from "../magicui/orbiting-circles";

/* eslint-disable */

/* eslint-disable */

export default function TechStack() {
  const heroRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getDynamicRadius = (baseRadius: number) => {
    return baseRadius + (screenWidth - 768) / 10;
  };

  const getDynamicSize = (baseSize: number) => {
    return baseSize + (screenWidth - 768) / 50;
  };

  useEffect(() => {
    const animateElement = (
      element: HTMLDivElement | null,
      direction: "left" | "right" | "up",
    ) => {
      if (element) {
        gsap.from(element, {
          x: direction === "left" ? -1000 : direction === "right" ? 1000 : 0,
          y: direction === "up" ? 1000 : 0,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        });
      }
    };
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }
        if (entry.isIntersecting) {
          animateElement(heroRef.current, "left");
          heroObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    const thirdObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }
        if (entry.isIntersecting) {
          animateElement(thirdRef.current, "up");
          thirdObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }
    if (thirdRef.current) {
      thirdObserver.observe(thirdRef.current);
    }
    return () => {
      if (heroRef.current) {
        heroObserver.unobserve(heroRef.current);
      }
      if (thirdRef.current) {
        thirdObserver.unobserve(thirdRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="text-center" ref={thirdRef}>
        <h1 className="z-10 py-2 pt-14 font-title text-3xl font-bold sm:py-2 xl:text-6xl">
          Tech Stackz: Powered by Our Club
        </h1>
        <div className="flex flex-col space-y-4 text-center">
          <p className="text-sm leading-relaxed md:text-lg">
            Technologies to build impactful real-world projects.
          </p>
        </div>
      </div>
      <section className="flex h-full flex-col items-center justify-center p-2 md:h-[100vh] md:w-screen md:flex-row">
        <div
          className="relative flex h-[110vh] w-full max-w-full items-center justify-center space-y-2 overflow-hidden md:h-full"
          ref={heroRef}
        >
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center font-title text-3xl leading-none text-transparent dark:from-white dark:to-black sm:text-5xl md:text-6xl lg:text-6xl">
            “ Tech Resources ❞
          </span>

          {/* First Orbit with slower speed */}
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={35}
            delay={0}
            radius={getDynamicRadius(80)}
          >
            <Image
              src={tailwindIcon as string}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="Tailwind CSS"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={35}
            delay={15}
            radius={getDynamicRadius(80)}
          >
            <Image
              src={trpcIcon as string}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="tRPC"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={35}
            delay={30}
            radius={getDynamicRadius(80)}
          >
            <Image
              src={Gc as string}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="Google Cloud"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={35}
            delay={45}
            radius={getDynamicRadius(80)}
          >
            <Image
              src={pythonIcon}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="Python"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={35}
            delay={60}
            radius={getDynamicRadius(80)}
          >
            <Image
              src={docker}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="Docker"
            />
          </OrbitingCircles>

          {/* Second Orbit with medium speed */}
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={25}
            delay={0}
            radius={getDynamicRadius(150)}
          >
            <Image
              src={jsIcon as string}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="JavaScript"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={25}
            delay={15}
            radius={getDynamicRadius(150)}
          >
            <Image
              src={tsIcon as string}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="TypeScript"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={25}
            delay={30}
            radius={getDynamicRadius(150)}
          >
            <Image
              src={nextAuth.src}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="NextAuth.js"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={25}
            delay={45}
            radius={getDynamicRadius(150)}
          >
            <Image
              src={vscode.src}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="VS Code"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={25}
            delay={60}
            radius={getDynamicRadius(150)}
          >
            <Image
              src={graphqlIcon as string}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="GraphQL"
            />
          </OrbitingCircles>

          {/* Third Orbit with faster speed */}
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={20}
            delay={0}
            radius={getDynamicRadius(220)}
          >
            <Image
              src={ps as string}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="PostgreSQL"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={20}
            delay={15}
            radius={getDynamicRadius(220)}
          >
            <Image
              src={next}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="Next.js"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={20}
            delay={30}
            radius={getDynamicRadius(220)}
          >
            <Image
              src={prisma}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="Prisma"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={20}
            delay={45}
            radius={getDynamicRadius(220)}
          >
            <Image
              src={github}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="GitHub"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={20}
            delay={60}
            radius={getDynamicRadius(220)}
          >
            <Image
              src={go as string}
              width={getDynamicSize(40)}
              height={getDynamicSize(40)}
              className="overflow-hidden rounded-full object-cover"
              alt="Go"
            />
          </OrbitingCircles>
        </div>
      </section>
    </div>
  );
}
