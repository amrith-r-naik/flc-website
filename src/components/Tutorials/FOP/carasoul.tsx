/* eslint-disable @next/next/no-img-element */
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";


interface ImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
}

const TutorialCarasoul: React.FC<ImageCarouselProps> = ({ images, ...rest }) => {
  const [emblaRef] = useEmblaCarousel();

  const imageItems = images.map((img: string, index: number) => (
    <img
      key={index}
      src={img}
      width={413}
      height={531}
      sizes="30vw"
      className="h-full w-auto"
      alt={`poster${index}`}
    />
  ));
  return (
    <div className={`${rest.className} h-full overflow-hidden`} ref={emblaRef}>
      <div className="rowOfImages flex h-full gap-2">{imageItems}</div>
    </div>
  );
};

export default TutorialCarasoul;