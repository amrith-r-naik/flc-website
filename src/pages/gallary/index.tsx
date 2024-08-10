import Image from "next/image";

import BlurFade from "~/components/magicui/blur-fade";
import BoxReveal from "~/components/magicui/box-reveal";
import { ConfettiButton } from "~/components/magicui/confetti";

// Image source array
const images = [
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img5.jpeg",
  "img6.jpeg",
  "img7.jpeg",
  "img9.jpeg",
  "img8.jpeg",
  "img11.jpeg",
  "img10.jpeg",
  "img12.jpeg",
  "img13.jpeg",
  "img14.jpeg",
  "img15.jpeg",
  "img16.jpeg",
];

export function BlurFadeDemo() {
  return (
    <section
      id="photos"
      className="bg-gradient-to-b from-blue-950 via-purple-800 to-yellow-500 px-4 py-8"
    >
      <div className="p-4">
        <div className="mb-8 space-y-4 text-left">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h1 className="mb-2 rounded-r-full border border-yellow-400 p-4 text-3xl font-bold text-white">
              Image Gallery
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-lg text-gray-200">
              Explore our collection of beautiful memories , randomly generated
              images. Each image showcases a unique blend of colors and shapes
              to inspire creativity and enhance your visual experience.
            </p>
          </BoxReveal>
          <hr />
          <div className="relative"></div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((src, idx) => (
            <BlurFade key={src} delay={0.25 + idx * 0.05} inView>
              <ConfettiButton
                options={{
                  get angle() {
                    return Math.random() * 360;
                  },
                }}
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={`/${src}`}
                    layout="responsive"
                    width={100}
                    height={100}
                    alt={`Random stock image ${idx + 1}`}
                    className="h-auto w-full object-cover"
                    priority={idx < 2}
                  />
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
