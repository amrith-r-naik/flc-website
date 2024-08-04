import Navbar from "../navbar/navbar";
import React from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AdminSidebar from "../Sidebar/adminSidebar";

gsap.registerPlugin(ScrollTrigger)

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <main className="flex h-full w-full"><AdminSidebar/>{children}</main>
    </div>
  );
}