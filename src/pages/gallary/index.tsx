import Image from "next/image";

import BlurFade from "~/components/magicui/blur-fade";
import BoxReveal from "~/components/magicui/box-reveal";
import { ConfettiButton } from "~/components/magicui/confetti";

const images = [
  { src: "img1.jpeg", title: "Induction 2024" },
  { src: "img2.jpeg", title: "Induction 2024" },
  { src: "img3.jpeg", title: "Alumini Talk" },
  { src: "img5.jpeg", title: "FareWell 2024" },
  { src: "img6.jpeg", title: "FareWell 2024" },
  { src: "img7.jpeg", title: "FareWell 2024" },
  { src: "img9.jpeg", title: "FareWell 2024" },
  { src: "img8.jpeg", title: "Image 8" },
  { src: "img11.jpeg", title: "Image 11" },
  { src: "img10.jpeg", title: "Image 10" },
  { src: "img12.jpeg", title: "Image 12" },
  { src: "img13.jpeg", title: "Image 13" },
  { src: "img14.jpeg", title: "Image 14" },
  { src: "img15.jpeg", title: "Image 15" },
  { src: "img16.jpeg", title: "Image 16" },
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
              Explore our collection of beautiful memories, randomly generated
              images. Each image showcases a unique blend of colors and shapes
              to inspire creativity and enhance your visual experience.
            </p>
          </BoxReveal>
          <hr />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {images.map((image, idx) => (
            <BlurFade key={image.src} delay={0.25 + idx * 0.05} inView>
              <ConfettiButton
                options={{
                  get angle() {
                    return Math.random() * 360;
                  },
                }}
              >
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  
                  <Image
                    src={`/${image.src}`}
                    layout="responsive"
                    width={100}
                    height={100}
                    alt={image.title}
                    className="h-auto w-full object-cover"
                    priority={idx < 2}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-1 text-white md:p-8">
                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                      <div className="subheading text-left">{image.title}</div>
                    </BoxReveal>
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
