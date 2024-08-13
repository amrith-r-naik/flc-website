import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";

import Navbar from "./navbar/navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
