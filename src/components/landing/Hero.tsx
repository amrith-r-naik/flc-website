import { ArrowRight, Badge } from "lucide-react";
import Link from "next/link";

import { Boxes } from "~/components/ui/background-boxes";

import Button from "~/components/Button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {


  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          scale: 0.5,
          duration: 5,
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
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900">
      <div className=" pointer-events-none absolute inset-0 z-20 h-full w-full space-y-4 bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />

      <Boxes />
      <h1 className="  text-4xl sm:text-6xl md:text-7xl lg:text-8xl relative z-20 bg-gradient-to-r from-blue-700 via-white to-yellow-500 bg-clip-text text-center text-transparent " ref={ref}>
        NMAMIT
        <br />
        FINITE LOOP CLUB
      </h1>
      <p className="text-white-300 relative z-20 mt-4 text-center leading-relaxed">
        We are a Coding club of NMAMIT aiming at Realizing the idea and
        Inspiring the next!
        <br />
      </p>
      <div className="z-20 mt-4 flex flex-row gap-2">
        <Button>
          <Link
            href="/register"
            className="flex items-center gap-2 text-white "
          >
            <span>Register</span>
            <ArrowRight size={16} />
          </Link>
        </Button>
        <Button>
          <Link
            href="/register"
            className="flex items-center gap-2 text-white "
          >
            <span> Events</span>
            <Badge size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
