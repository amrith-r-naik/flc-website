import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";

import Navbar from "../navbar/navbar";
import Cursor from "../cursor/cursor";

gsap.registerPlugin(ScrollTrigger);

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <Cursor></Cursor>
      <main>{children}</main>
    </div>
  );
}
