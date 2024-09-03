"use client";

import {
  SiTrpc,
  SiReact,
  SiZod,
  SiDocker,
  SiGithub,
  SiGo,
  SiJavascript,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiTypescript,
  SiGraphql,
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiKubernetes,
  SiElixir,
  SiRust,
} from "@icons-pack/react-simple-icons";
import gsap from "gsap";
import {
  createElement,
  type FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";

import OrbitingCircles from "~/components/magicui/orbiting-circles";

const iconConfig = [
  {
    radius: 80,
    radiusThreshold: 100,
    duration: 30,
    icons: [
      { element: SiNodedotjs, color: "#5FA04E", invert: false },
      { element: SiExpress, color: "#000000", invert: true },
      { element: SiFlutter, color: "#02569B", invert: false },
      { element: SiTailwindcss, color: "#06B6D4", invert: false },
    ],
  },
  {
    radius: 145,
    radiusThreshold: 200,
    duration: 25,
    icons: [
      { element: SiPython, color: "#3776AB", invert: false },
      { element: SiDocker, color: "#2496ED", invert: false },
      { element: SiReact, color: "#61DAFB", invert: false },
      { element: SiJavascript, color: "#F7DF1E", invert: false },
      { element: SiTypescript, color: "#3178C6", invert: false },
      { element: SiThreedotjs, color: "#000000", invert: true },
      { element: SiGraphql, color: "#E10098", invert: false },
    ],
  },
  {
    radius: 210,
    radiusThreshold: 550,
    duration: 20,
    icons: [
      { element: SiTrpc, color: "#2596BE", invert: false },
      { element: SiPostgresql, color: "#4169E1", invert: false },
      { element: SiElixir, color: "#4B275F", invert: false },
      { element: SiRust, color: "#000000", invert: true },
      { element: SiNextdotjs, color: "#000000", invert: true },
      { element: SiPrisma, color: "#2D3748", invert: true },
      { element: SiGo, color: "#00ADD8", invert: false },
      { element: SiGithub, color: "#181717", invert: true },
      { element: SiZod, color: "#3E67B1", invert: false },
      { element: SiKubernetes, color: "#326CE5", invert: false },
    ],
  },
];

const TechStack: FunctionComponent = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getDynamicRadius = (baseRadius: number) =>
    baseRadius + (screenWidth - 768) / 10;

  useEffect(() => {
    const heroRefResolved = heroRef.current;
    if (!heroRefResolved) return;

    const thirdRefResolved = thirdRef.current;
    if (!thirdRefResolved) return;

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
        if (entry?.isIntersecting) {
          animateElement(heroRefResolved, "left");
          heroObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    const thirdObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          animateElement(thirdRefResolved, "up");
          thirdObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    heroObserver.observe(heroRefResolved);
    thirdObserver.observe(thirdRefResolved);
    return () => {
      heroObserver.unobserve(heroRefResolved);
      thirdObserver.unobserve(thirdRefResolved);
    };
  }, []);

  return (
    <div>
      <div className="text-center" ref={thirdRef}>
        <h1 className="z-10 py-2 pt-14 font-title text-3xl font-bold sm:py-2 md:text-6xl xl:text-7xl">
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
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center font-title text-3xl leading-none text-transparent dark:from-white dark:to-gray-800 sm:text-5xl md:text-6xl lg:text-6xl">
            Tech Resources
          </span>

          {iconConfig.map((circle) =>
            circle.icons.map((icon, idx) => (
              <OrbitingCircles
                key={idx}
                className="border-none bg-transparent"
                duration={circle.duration}
                delay={(idx * circle.duration) / circle.icons.length}
                radius={
                  getDynamicRadius(circle.radius) > circle.radiusThreshold
                    ? circle.radiusThreshold
                    : getDynamicRadius(circle.radius)
                }
              >
                {createElement(icon.element, {
                  className:
                    "aspect-square h-8 w-8 overflow-hidden rounded-full object-contain md:h-10 md:w-10 lg:h-12 lg:w-12",
                  style: {
                    color: icon.color,
                    ...(icon.invert && {
                      filter: "invert(1)",
                    }),
                  },
                })}
              </OrbitingCircles>
            )),
          )}
        </div>
      </section>
    </div>
  );
};

export default TechStack;
