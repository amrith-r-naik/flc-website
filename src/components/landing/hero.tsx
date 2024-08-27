import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { LuArrowRight } from "react-icons/lu";

import AnimatedShinyText from "~/components/magicui/animated-shiny-text";
import ShimmerButton from "~/components/magicui/shimmer-button";
import { api } from "~/utils/api";

function Hero() {
  const { data: session } = useSession();
  const { data: user } = api.user.getUser.useQuery(void null, {
    enabled: !!session,
  });
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [shimmerWidth, setShimmerWidth] = useState<number>(0);

  useEffect(() => {
    if (textContainerRef.current) {
      setShimmerWidth(textContainerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="absolute min-h-screen w-full place-content-center text-center">
      <div className="relative -translate-y-[12vh] space-y-6 md:space-y-9 xl:space-y-12">
        <div ref={textContainerRef} className="w-full">
          <AnimatedShinyText
            className="inline-flex w-full items-center justify-center  px-4 py-1 font-title text-5xl brightness-[1.15] [text-shadow:_0_0_10px_#ffd70066] dark:text-[#ffb222a5] sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
            shimmerWidth={shimmerWidth}
          >
            <span>FINITE LOOP CLUB</span>
          </AnimatedShinyText>
        </div>

        <p className="mx-auto max-w-lg px-4 text-center font-sub-heading font-thin sm:text-lg md:max-w-xl md:text-xl lg:max-w-5xl lg:text-3xl ">
          We are a Coding club of NMAMIT aiming at Realizing the idea and
          Inspiring the next!
        </p>
        {!user?.paymentId && (
          <div className="z-10 flex items-center justify-center">
            <Link href="/register">
              <ShimmerButton
                background="radial-gradient(
                circle at 50% -180%,
                #800080e3 30%,
                #0b011df5 75%
              )"
                className="px-4 py-2 shadow-2xl sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4"
              >
                <span className=" mr-2 text-center font-title text-sm font-thin tracking-tight text-white sm:text-sm md:text-lg lg:text-xl">
                  Register Now
                </span>
                <LuArrowRight size={16} color="white" />
              </ShimmerButton>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
