import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { type HTMLAttributes, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  div,
}: {
  children: JSX.Element;
  className?: string;
  div?: HTMLAttributes<HTMLDivElement>;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      {
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        delay: delay,
        duration: 0.5,
        scrollTrigger: {
          // markers: true,
          trigger: ref.current,
          toggleActions: "restart none none reverse",
        },
      },
    );
  }, [ref]);
  return (
    <div className={className} ref={ref} {...div}>
      {children}
    </div>
  );
}
