import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";

function Hero() {
  return (
    <section className="absolute min-h-screen w-full place-content-center space-y-6 text-center ">
      <h1 className="font-title bg-gradient-to-r from-amber-200 to-[#E98F81] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-5xl lg:text-9xl">
        ❝ FINITE LOOP CLUB ❞
      </h1>
      <p className="font-sub-heading mx-auto max-w-sm text-center font-thin md:text-xl">
        We are a Coding club of NMAMIT aiming at Realizing the idea and
        Inspiring the next!
      </p>

      <Button
        variant={"ghost"}
        className="z-40 rounded-full border-yellow-400 bg-[#0b011d] shadow-inner shadow-yellow-200"
      >
        <Link href="/register" className="flex items-center gap-2">
          <span>Register</span>
          <ArrowRight size={16} />
        </Link>
      </Button>
    </section>
  );
}

export default Hero;
