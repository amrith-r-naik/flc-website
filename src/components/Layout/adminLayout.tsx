import Navbar from "../navbar/navbar";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AdminSidebar from "../Sidebar/adminSidebar";

gsap.registerPlugin(ScrollTrigger);

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <div>
      <Navbar />
      <main className="flex">
        <AdminSidebar />
        <div className="flex-1">{children}</div>
=======
    <div className="w-screen h-screen">
      <Navbar />
      <main className="flex w-full">
        <AdminSidebar />
        <div className="w-full ">
          {children}
        </div>
>>>>>>> becfc021b9645726dc6c6dd7396d031d8e545d02
      </main>
    </div>
  );
}
