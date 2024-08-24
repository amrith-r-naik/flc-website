import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";

function Hero() {
  return (
    <section className="absolute min-h-screen w-full place-content-center text-center ">
      <div className="relative -translate-y-[10vh] space-y-6 md:space-y-9 xl:space-y-12">
        <h1 className="bg-gradient-to-r from-amber-200 to-[#E98F81] bg-clip-text font-title text-4xl font-bold text-transparent sm:text-6xl md:text-[4.05rem] lg:text-[5.25rem] xl:text-9xl">
          ❝FINITE LOOP CLUB❞
        </h1>
        <p className="mx-auto max-w-lg px-4 text-center font-sub-heading font-thin sm:text-lg md:max-w-xl md:text-xl lg:max-w-5xl lg:text-3xl">
          We are a Coding club of NMAMIT aiming at Realizing the idea and
          Inspiring the next!
        </p>

        <Button
          variant={"ghost"}
          // size={"lg"}
          className="z-40 rounded-full border-yellow-400 bg-[#0b011d] shadow-inner shadow-yellow-200 md:px-6 md:py-6 md:text-lg xl:py-8 xl:text-xl"
        >
          <Link href="/register" className="flex items-center gap-2">
            <span>Register</span>
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
