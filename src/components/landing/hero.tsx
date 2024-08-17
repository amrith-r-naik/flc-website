import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";

function Hero() {
  return (
    <section className="textCursor z-50 grid min-h-[70vh] w-full place-content-center ">
      <div className="content-container space-y-6  text-center">
        <h1 className="bg-gradient-to-r from-[#F0C78E] to-[#E98F81] bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl md:text-5xl lg:text-7xl">
          “ FINITE LOOP CLUB ❞
        </h1>
        <p className="mx-auto max-w-sm text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          numquam{" "}
        </p>

        <Button variant={"ghost"} className="border-2 border-yellow-400">
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
