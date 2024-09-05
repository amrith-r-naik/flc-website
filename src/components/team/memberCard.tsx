import { Linkedin, Github, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tilt from "react-parallax-tilt";

import styles from "./memberCard.module.css";

interface MemberCardProps {
  className?: string;
  src: string;
  name: string;
  role: string;
  linkedin: string | undefined;
  github: string | undefined;
  instagram: string | undefined;
}

const MemberCard: React.FC<MemberCardProps> = ({
  className,
  src,
  name,
  role,
  linkedin,
  github,
  instagram,
}) => {
  return (
    <Tilt
      className={` ${styles.baseCard} ${className} mainCard h-[80vw] max-h-[300px] w-[80vw] max-w-[300px]`}
      tiltReverse={true}
    >
      <Image
        src={src}
        alt={`${name}'s Profile Image`}
        fill
        objectFit="cover"
        className="absolute rounded-lg"
      />

      <div
        className={`${styles.rised} cardContent absolute -bottom-8 w-full rounded-t-lg p-2 px-4 text-center font-semibold text-white`}
      >
        {name}
      </div>
      <div
        className={`${styles.rised2} cardContent absolute -bottom-12 w-full rounded-t-lg p-2 px-4 text-center text-sm font-semibold text-yellow-500/90`}
      >
        {role}
      </div>
      <div
        className={`${styles.rised3} cardContent absolute -bottom-16 flex w-full justify-center gap-4 `}
      >
        {linkedin && (
          <Link href={linkedin}>
            <Linkedin height={20} width={20} color="grey" />
          </Link>
        )}
        {github && (
          <Link href={github}>
            <Github height={20} width={20} color="grey" />
          </Link>
        )}
        {instagram && (
          <Link href={instagram}>
            <Instagram height={20} width={20} color="grey" />
          </Link>
        )}
      </div>
    </Tilt>
  );
};

export default MemberCard;
