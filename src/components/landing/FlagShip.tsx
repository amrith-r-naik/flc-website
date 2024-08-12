// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useRef } from "react";
// import { useState } from "react";
// import Confetti from "react-dom-confetti";
// import { MacbookScroll } from "../ui/macbook-scroll";
// gsap.registerPlugin(ScrollTrigger);
// const config = {
//   angle: 290,
//   spread: 300,
//   startVelocity: 40,
//   elementCount: 50,
//   dragFriction: 0.11,
//   duration: 3020,
//   stagger: 3,
//   width: "8px",
//   height: "14px",
//   perspective: "503px",
//   colors: ["#f00", "#0f0", "#00f", "#FFC700", "#FF0000", "#2E3191", "#41BBC7"],
// };
// export function FlagShip() {
//   const ref = useRef(null);
//   useGSAP(() => {
//     gsap.to(ref.current, {
//       scrollTrigger: {
//         trigger: ref.current,
//         start: "top 1%",
//         onEnter: () => ConfettiExplosion(),
//       },
//     });
//   });
//   const [show, setShow] = useState(false);
//   const ConfettiExplosion = () => {
//     setShow(true);
//     setTimeout(() => setShow(false), 1000);
//   };
//   return (
//     <div className="w-full overflow-hidden bg-white bg-gradient-to-b from-[#0B0B0F] via-[#333333] to-[#564306]">
//       <Confetti active={show} config={config} />
//       <MacbookScroll
//         title={
//           <span className="heading text-yellow-600">
//             Introducing U Our FlagShip Event{" "}
//             <span className="text-5xl font-extrabold text-red-600 underline">
//               HackFest
//             </span>
//           </span>
//         }
//         badge={
//           <Link href="https://peerlist.io/manuarora">
//             <Image
//               alt="logo"
//               src="/logo.webp"
//               width={70}
//               height={70}
//               className=" rounded-md"
//             />
//           </Link>
//         }
//         src={`/linear.webp`}
//         showGradient={false}
//       />
//     </div>
//   );
// }
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-dom-confetti";

import { MacbookScroll } from "../ui/macbook-scroll";

gsap.registerPlugin(ScrollTrigger);

const config = {
  angle: 290,
  spread: 300,
  startVelocity: 40,
  elementCount: 50,
  dragFriction: 0.11,
  duration: 3020,
  stagger: 3,
  width: "8px",
  height: "14px",
  perspective: "503px",
  colors: ["#f00", "#0f0", "#00f", "#FFC700", "#FF0000", "#2E3191", "#41BBC7"],
};

export function FlagShip() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const handleScrollTrigger = () => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 50%", // Trigger when the top of the element reaches 50% of the viewport height
        onEnter: () => setShow(true),
        onLeaveBack: () => setShow(false), // Hide confetti when scrolling back up
      });
    };

    handleScrollTrigger();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => setShow(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden bg-white bg-gradient-to-b from-[#29293f] via-[#333333] to-[#564306]"
    >
      <Confetti active={show} config={config} />

      <MacbookScroll
        title={
          <span className=" title text-white">
            Introducing Our FlagShip Event{" "}
            <span className="bg-gradient-to-b from-pink-800 via-yellow-500  to-pink-700 bg-clip-text font-extrabold text-transparent underline">
              HackFest
            </span>
          </span>
        }
        badge={
          <Link href="https://hackfest.dev">
            <Image
              alt="logo"
              src="/logo.webp"
              width={70}
              height={70}
              className="rounded-md"
            />
          </Link>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}
