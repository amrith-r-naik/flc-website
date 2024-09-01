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
        <h1 className="z-10 py-2 pt-14 font-title text-3xl font-bold sm:py-2 md:text-7xl xl:text-8xl">
          Tech Stacks: Powered by Our Club
        </h1>
        <div className="flex flex-col space-y-4 text-center">
          <p className="text-sm leading-relaxed md:text-lg">
            Technologies to build impactful real-world projects.
          </p>
        </div>
      </div>
      <section className="flex h-full flex-col items-center justify-center p-2 md:w-screen md:flex-row">
        <div
          className="relative flex w-full max-w-full items-center justify-center space-y-2 md:h-full"
          style={{
            height:
              2 * (getDynamicRadius(210) > 575 ? 575 : getDynamicRadius(210)) +
              100 +
              "px",
          }}
          ref={heroRef}
        >
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center font-title text-3xl leading-none text-transparent dark:from-white dark:to-black sm:text-5xl md:text-6xl lg:text-6xl">
            “ Tech Resources ❞
          </span>

          {/* First Orbit with slower speed */}
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={33}
            delay={0}
            radius={getDynamicRadius(80) > 295 ? 295 : getDynamicRadius(80)}
          >
            <Image
              src={tailwindIcon as string}
              width={30}
              height={30}
              className="aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="Tailwind CSS"
            />
          </OrbitingCircles>
          {/* <OrbitingCircles
            className="border-none bg-transparent"
            duration={33}
            delay={15}
            radius={getDynamicRadius(80) > 295 ? 295 : getDynamicRadius(80)}
          >
            <Image
              src={trpcIcon as string}
              width={30}
              height={30}
              className="h-8 w-8 md:h-10 lg:h-12 lg:w-12overflow-hidden rounded-full md:w-10 object-contain aspect-square h-"
              alt="tRPC"
            />
          </OrbitingCircles> */}
          {/* <OrbitingCircles
            className="border-none bg-transparent"
            duration={33}
            delay={30}
            radius={getDynamicRadius(80) > 295 ? 295 : getDynamicRadius(80)}
          >
            <Image
              src={Gc as string}
              width={30}
              height={30}
              className="h-8 w-8 md:h-10 lg:h-12 lg:w-12overflow-hidden rounded-full md:w-10 object-contain aspect-square h-"
              alt="Google Cloud"
            />
          </OrbitingCircles> */}
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={33}
            delay={11}
            radius={getDynamicRadius(80) > 295 ? 295 : getDynamicRadius(80)}
          >
            <Image
              src={pythonIcon}
              width={30}
              height={30}
              className="aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="Python"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={33}
            delay={22}
            radius={getDynamicRadius(80) > 295 ? 295 : getDynamicRadius(80)}
          >
            <Image
              src={docker}
              width={30}
              height={30}
              className="aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="Docker"
            />
          </OrbitingCircles>

          {/* Second Orbit with medium speed */}
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={25}
            delay={0}
            radius={getDynamicRadius(145) > 435 ? 435 : getDynamicRadius(145)}
          >
            <Image
              src={jsIcon as string}
              width={30}
              height={30}
              className="aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="JavaScript"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={25}
            delay={15}
            radius={getDynamicRadius(145) > 435 ? 435 : getDynamicRadius(145)}
          >
            <Image
              src={tsIcon as string}
              width={30}
              height={30}
              className="aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="TypeScript"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={25}
            delay={30}
            radius={getDynamicRadius(145) > 435 ? 435 : getDynamicRadius(145)}
          >
            <Image
              src={nextAuth.src}
              width={30}
              height={30}
              className="aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="NextAuth.js"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={25}
            delay={45}
            radius={getDynamicRadius(145) > 435 ? 435 : getDynamicRadius(145)}
          >
            <Image
              src={vscode.src}
              width={30}
              height={30}
              className="aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="VS Code"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={25}
            delay={60}
            radius={getDynamicRadius(145) > 435 ? 435 : getDynamicRadius(145)}
          >
            <Image
              src={graphqlIcon as string}
              width={30}
              height={30}
              className="aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="GraphQL"
            />
          </OrbitingCircles>

          {/* Third Orbit with faster speed */}
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={20}
            delay={0}
            radius={getDynamicRadius(210) > 575 ? 575 : getDynamicRadius(210)}
          >
            <Image
              src={ps as string}
              width={30}
              height={30}
              className="aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="PostgreSQL"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={20}
            delay={15}
            radius={getDynamicRadius(210) > 575 ? 575 : getDynamicRadius(210)}
          >
            <Image
              src={next}
              width={30}
              height={30}
              className="aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="Next.js"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={20}
            delay={30}
            radius={getDynamicRadius(210) > 575 ? 575 : getDynamicRadius(210)}
          >
            <Image
              src={prisma}
              width={30}
              height={30}
              className="aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="Prisma"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={20}
            delay={45}
            radius={getDynamicRadius(210) > 575 ? 575 : getDynamicRadius(210)}
          >
            <Image
              src={github}
              width={30}
              height={30}
              className="aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="GitHub"
            />
          </OrbitingCircles>
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={20}
            delay={60}
            radius={getDynamicRadius(210) > 575 ? 575 : getDynamicRadius(210)}
          >
            <Image
              src={go as string}
              width={30}
              height={30}
              className="aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="Go"
            />
          </OrbitingCircles>
        </div>
      </section>
    </div>
  );
}
