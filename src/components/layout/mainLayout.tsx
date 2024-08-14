import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";

import Navbar from "../navbar/navbar";

gsap.registerPlugin(ScrollTrigger);

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
