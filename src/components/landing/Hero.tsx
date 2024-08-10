import { ArrowRight,Badge } from "lucide-react";
import Link from "next/link";

import { Boxes } from "~/components/ui/background-boxes";

import Button from "~/components/Button";

function Hero() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900">
      <div className=" pointer-events-none absolute inset-0 z-20 h-full w-full space-y-4 bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />

      <Boxes />
      <h1 className="title relative z-20  text-white text-center ">NMAMIT<br/>FINITE LOOP CLUB</h1>
      <p className="relative z-20 mt-4 text-center text-neutral-300 leading-relaxed">
        We are a Coding club of NMAMIT aiming at Realizing the idea and
        Inspiring the next!
        <br />
      </p>
      <div className="z-20 mt-4 gap-2 flex flex-row">
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

export default Hero;
