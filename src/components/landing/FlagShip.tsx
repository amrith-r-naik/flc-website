import Link from "next/link";
import React from "react";

import { MacbookScroll } from "../ui/macbook-scroll";
import Image from "next/image";

export function FlagShip() {
  return (
    <div className="w-full overflow-hidden bg-white bg-gradient-to-b from-[#0B0B0F] via-[#333333] to-[#564306]">
      <MacbookScroll
        title={
          <span className="text-yellow-600 heading">
            Introducing U Our FlagShip Event <span className="underline text-red-600 font-extrabold text-5xl">HackFest</span>
          </span>
        }
        badge={
          <Link href="https://peerlist.io/manuarora">
           <Image
           alt="logo"
           src="/logo.webp"
           width={70}
           height={70}
           className=" rounded-md"
           />
          </Link>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}
