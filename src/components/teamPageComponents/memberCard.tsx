import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import styles from "./memberCard.module.css";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import Link from "next/link";

interface MemberCardProps {
  src: string;
  name: string;
  role: string;
  linkedin: string;
  github: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  src,
  name,
  role,
  linkedin,
  github,
}) => {
  return (
    <Tilt
      className={` ${styles.baseCard} mainCard h-[80vw] max-h-[300px] w-[80vw] max-w-[300px]`}
      tiltReverse={true}
      gyroscope={true}
      glareEnable={true}
    >
      <div
        className={`${styles.rised} cardContent  absolute left-3 top-3 rounded-md bg-background/80 p-2 px-4 text-xs font-semibold text-primary`}
      >
        {role}
      </div>
      <Image
        src={src}
        alt={`${name}'s Profile Image`}
        fill
        objectFit="cover"
        className="absolute rounded-lg"
      />

      <div
        className={`${styles.rised} cardContent  absolute -bottom-8 w-full rounded-t-lg p-2 px-4 text-center font-semibold text-white`}
      >
        {name}
      </div>

      <div
        className={`${styles.rised2} cardContent  absolute -bottom-11 flex w-full justify-center gap-4`}
      >
        <Link href={linkedin}>
          <Linkedin height={20} width={20} color="grey" />
        </Link>
        <Link href={github}>
          <Github height={20} width={20} color="grey" />
        </Link>
      </div>
    </Tilt>
  );
};

export default MemberCard;
