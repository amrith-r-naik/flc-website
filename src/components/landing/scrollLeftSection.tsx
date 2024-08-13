import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useRef, useEffect } from "react";

import TechStack from "./techStack";

gsap.registerPlugin(ScrollTrigger);

function ScrollLeftSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: "-300vw",
      },
      {
        translateX: "0",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      },
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          {/* <div className="scroll-section">
            <Events />
          </div> */}
          <div className="scroll-section">
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollLeftSection;
