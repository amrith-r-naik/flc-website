import { useSession } from "next-auth/react";
import Image from "next/image";

import BlurFade from "~/components/magicui/blur-fade";
import BoxReveal from "~/components/magicui/box-reveal";
import { ConfettiButton } from "~/components/magicui/confetti";

const images = [
  { src: "img5.jpeg", title: "FareWell 2024" },
  { src: "img6.jpeg", title: "FareWell 2024" },
  { src: "img7.jpeg", title: "FareWell 2024" },
  { src: "img9.jpeg", title: "FareWell 2024" },
  { src: "img8.jpeg", title: "Image 8" },
  { src: "img10.jpeg", title: "Image 10" },
];

export function BlurFadeDemo() {
  const { data: session } = useSession();

  return (
    <section
      id="photos"
      className=" px-1 py-8 md:px-4"
      style={{
        background:
          "radial-gradient(50% 70.31% at 50% 0%, rgb(184 148 255 / 33%) 0%, rgba(126, 61, 255, 0) 100%), rgb(21 0 59 / 80%)",
      }}
    >
      <div className="px-2 md:p-4">
        <div className="my-10 flex w-full flex-col items-center md:my-20">
          <div className="flex items-center justify-center gap-4 font-title uppercase">
            <BoxReveal>
              <h1 className="meet mb-3 text-center text-2xl font-bold text-primary md:text-4xl">
                Memories Stored in the Database
              </h1>
            </BoxReveal>
          </div>
          <p className="text-center text-sm text-foreground md:text-lg">
            {" "}
            Curated Collection Of Moments That Reflect The Spirit In Terminal
          </p>
        </div>
        <hr className="mb-5 text-white" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3">
          {images.map((image, idx) => (
            <BlurFade key={image.src} delay={0.25 + idx * 0.05} inView>
              <ConfettiButton
                options={{
                  get angle() {
                    return Math.random() * 360;
                  },
                }}
              >
                <div className="group transform overflow-hidden rounded-lg border border-gray-700 bg-gray-900 text-white transition-transform hover:scale-105">
                  {" "}
                  <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>

                    <div className="w-16"></div>
                  </div>
                  <div className="p-4 font-mono ">
                    <div className="text-left text-sm">
                      <p className="mb-2 ">
                        <span className="text-green-400">
                          USER@{session?.user.name}
                        </span>{" "}
                        ~/Desktop/FiniteLoop-Club
                      </p>
                      <p className="> mb-4">
                        <span className="text-green-400">
                          USER@{session?.user.name}
                        </span>{" "}
                        ~/Desktop/FiniteLoop-Club/
                        <span className=" m-1 font-title text-xl font-bold text-green-400">
                          {image.title.toLowerCase().replace(/\s+/g, "-")}
                        </span>
                      </p>
                    </div>
                    <hr className="mb-2" />
                    <div className="relative">
                      <Image
                        src={`/${image.src}`}
                        layout="responsive"
                        width={100}
                        height={100}
                        alt={image.title}
                        className="h-auto w-full rounded-2xl object-cover"
                        priority={idx < 2}
                      />
                    </div>
                  </div>
                </div>
              </ConfettiButton>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlurFadeDemo;
