import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
<<<<<<< HEAD
import { DiamondIcon } from "lucide-react";
import Link from "next/link";
import SidebarMenu from "./SidebarMenu";

const AdminSidebar = () => {
  const [option, setOption] = useState("");

  return (
    <div className=" sticky top-20 hidden h-[89vh] w-[15%] space-y-3 bg-black px-4  text-white shadow-md sm:visible sm:block">
      <h1 className="mt-4 text-lg font-extrabold tracking-wide text-muted text-white">
=======
import {
  DiamondIcon,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

const AdminSidebar = () => {
  
  const [option, setOption] = useState("");

  return (

    <div className=" w-[20%]  px-4 py-6 space-y-3 bg-[#4e5258] text-black shadow-md">

      <h1 className="font-extrabold text-lg tracking-wide text-[#EEEEEE]">
>>>>>>> becfc021b9645726dc6c6dd7396d031d8e545d02
        Admin Dashboard
      </h1>

      <Accordion type="single" collapsible className="w-full space-y-1">
        <AccordionItem
          value="item-1"
<<<<<<< HEAD
          className={`w-full rounded-lg px-2 hover:bg-zinc-800 ${
            option == "Events" ? "rounded-l-none border-l-2 border-border" : ""
          }`}
        >
          <div className="flex w-full items-center">
=======
          className={`px-2 hover:bg-gray-700 hover:rounded-r-md hover:border-0 hover:border-l-2 ${
            option == "Events"
              ? "border-l-2 border-[#EEEEEE] rounded-none border-b-0"
              : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-[#EEEEEE]" />

>>>>>>> becfc021b9645726dc6c6dd7396d031d8e545d02
            <AccordionTrigger
              onClick={() => {
                option === "Events" ? setOption("") : setOption("Events");
              }}
<<<<<<< HEAD
              className="w-full"
            >
              <h1>Events</h1>
            </AccordionTrigger>
          </div>
          <AccordionContent className="space-y-3">
            <div className="flex items-center gap-2 pl-4">
              <DiamondIcon size={"16px"} />
              <button>
                <Link href="/admin/all-events" className="hover:underline">
=======
              className="flex-1 text-[#EEEEEE]"
            >
              Events
            </AccordionTrigger>

          </div>
          <AccordionContent className="space-y-3">
            <div className="flex gap-2 items-center pl-4">
              <DiamondIcon size={"16px"} className="text-[#EEEEEE]" />
              <button>
                <Link
                  href="/admin/all-events"
                  className="hover:underline text-[#EEEEEE]"
                >
>>>>>>> becfc021b9645726dc6c6dd7396d031d8e545d02
                  All events
                </Link>
              </button>
            </div>

<<<<<<< HEAD
            <div className="flex items-center gap-2 pl-4">
              <DiamondIcon size={"16px"} />
              <button>
                <Link href="/admin/create-event" className="hover:underline">
=======
            <div className="flex gap-2 items-center pl-4">
              <DiamondIcon size={"16px"} className="text-[#EEEEEE]" />
              <button>
                <Link
                  href="/admin/create-event"
                  className="hover:underline text-[#EEEEEE]"
                >
>>>>>>> becfc021b9645726dc6c6dd7396d031d8e545d02
                  Create Event
                </Link>
              </button>
            </div>
<<<<<<< HEAD
          </AccordionContent>
        </AccordionItem>
=======

          </AccordionContent>
        </AccordionItem>

         
>>>>>>> becfc021b9645726dc6c6dd7396d031d8e545d02
      </Accordion>
    </div>
  );
};

export default AdminSidebar;
