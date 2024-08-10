import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface ImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, ...rest }) => {
  const [emblaRef] = useEmblaCarousel();

  const imageItems = images.map((img: string, index: number) => (
    <Image
      key={index}
      src={img}
      width={413}
      height={531}
      sizes="30vw"
      className="h-full w-auto"
      objectFit="cover"
      alt={`poster${index}`}
    />
  ));
  return (
    <div className={`${rest.className} h-full overflow-hidden`} ref={emblaRef}>
      <div className="rowOfImages flex h-full gap-2">{imageItems}</div>
    </div>
  );
};

export default ImageCarousel;
