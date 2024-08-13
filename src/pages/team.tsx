import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";

import MemberCard from "~/components/team/memberCard";
import { teamTabs } from "~/constants";

const Team = () => {
  const [toggleState, setToggleState] = useState(5); //Default year is 2024-25

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    // Title animation when screen width > 1024px
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const vw = window.innerWidth * 0.01;
    const fontSize = `${vw + 5}vmin`;

    if (mediaQuery.matches) {
      gsap.from([".meet", ".the", ".team"], {
        opacity: 0,
        stagger: 0.5,
        ease: "power1.out",
        delay: 0.2,
        duration: 0.05,
      });
      gsap.from([".meet", ".the", ".team"], {
        fontSize: fontSize,
        ease: "power1.out",
        delay: 1.5,
      });
      gsap.from(".titleContainer", {
        width: "100vw",
        height: "80vh",
        paddingBottom: "30vh",
        gap: 60,
        ease: "power1.out",
        delay: 1.5,
      });
    }
  });

  // Animating the cards when year is changed
  const cardsContainer = useRef<HTMLDivElement | null>(null);
  const { contextSafe } = useGSAP({ scope: cardsContainer });
  const onYearChange = contextSafe(() => {
    gsap.from(".mainCard", {
      delay: 0.2,
      scale: 0.8,
      y: 50,
      stagger: 0.1,
      duration: 0.1,
      display: "none",
    });
  });

  return (
    <div className="absolute top-0 flex h-screen w-screen flex-col items-center overflow-y-scroll bg-background pt-24">
      <div className="my-10 flex w-full flex-col items-center md:my-20">
        <div className="titleContainer flex items-center justify-center gap-4">
          <h1 className="meet mb-3 text-2xl font-bold text-primary md:text-4xl">
            MEET
          </h1>
          <h1 className="the mb-3 text-2xl font-bold text-primary md:text-4xl">
            THE
          </h1>
          <h1 className="team mb-3 text-2xl font-bold text-primary md:text-4xl">
            TEAM
          </h1>
        </div>
        <p className="text-lg text-foreground">Dynamic and Agile</p>
      </div>

      {/* The horizontal list of years (when widow width > md) */}
      <ul className="hidden flex-wrap justify-center md:flex">
        {teamTabs.map((tab, index) => (
          <li key={index}>
            <a
              onClick={() => {
                setToggleState(index);
                onYearChange();
              }}
              className="relative block cursor-pointer p-4"
            >
              {toggleState === index ? (
                <span className="absolute inset-x-0 -bottom-px h-px w-full bg-primary"></span>
              ) : null}
              <div className="flex items-center justify-center">
                <span className="ml-3 text-xs font-light text-foreground lg:text-sm lg:font-medium">
                  {tab.replace("Year", "").replace("to", " - ")}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* A dropdown(select) of year for smaller screens */}
      {/* UI needs to corrected */}
      <div className="flex w-full items-center justify-center md:hidden">
        <select
          className="rounded-md border-2 border-border bg-card px-3 py-1 text-white"
          value={toggleState}
        >
          {teamTabs.map((year, index) => (
            <option
              className="text-center text-xs text-white"
              key={index}
              onClick={() => {
                setToggleState(index);
                onYearChange();
              }}
              value={index}
            >
              {year.replace("Year", "").replace("to", " - ")}
            </option>
          ))}
        </select>
      </div>

      {/* Member Cards Container */}
      <div
        ref={cardsContainer}
        className="mt-8 flex w-full justify-center pb-24"
      >
        <div className="grid gap-4 gap-y-24 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Iterate and display the cards here */}
          <MemberCard
            src="/images/GalaxyTexture.jpg"
            name="Amrith R Naik"
            role="Developer"
            github="flkajdfl"
            linkedin="ldjfl"
          />
          <MemberCard
            src="/images/GalaxyTexture.jpg"
            name="Amrith R Naik"
            role="Developer"
            github="flkajdfl"
            linkedin="ldjfl"
          />
          <MemberCard
            src="/images/GalaxyTexture.jpg"
            name="Amrith R Naik"
            role="Developer"
            github="flkajdfl"
            linkedin="ldjfl"
          />
          <MemberCard
            src="/images/GalaxyTexture.jpg"
            name="Amrith R Naik"
            role="Developer"
            github="flkajdfl"
            linkedin="ldjfl"
          />
          <MemberCard
            src="/images/GalaxyTexture.jpg"
            name="Amrith R Naik"
            role="Developer"
            github="flkajdfl"
            linkedin="ldjfl"
          />
          <MemberCard
            src="/images/GalaxyTexture.jpg"
            name="Amrith R Naik"
            role="Developer"
            github="flkajdfl"
            linkedin="ldjfl"
          />
          <MemberCard
            src="/images/GalaxyTexture.jpg"
            name="Amrith R Naik"
            role="Developer"
            github="flkajdfl"
            linkedin="ldjfl"
          />
          <MemberCard
            src="/images/GalaxyTexture.jpg"
            name="Amrith R Naik"
            role="Developer"
            github="flkajdfl"
            linkedin="ldjfl"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
