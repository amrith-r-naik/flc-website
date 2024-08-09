import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Building,
  DiamondIcon,
  FilePlus,
  Layers,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

const AdminSidebar = () => {
  
  const [option, setOption] = useState("");

  return (

    <div className=" w-[20%]  px-4 py-6 space-y-3 bg-[#4e5258] text-black shadow-md">

      <h1 className="font-extrabold text-lg tracking-wide text-[#EEEEEE]">
        Admin Dashboard
      </h1>

      <Accordion type="single" collapsible className="w-full space-y-1">
        <AccordionItem
          value="item-1"
          className={`px-2 hover:bg-gray-700 hover:rounded-r-md hover:border-0 hover:border-l-2 ${
            option == "Events"
              ? "border-l-2 border-[#EEEEEE] rounded-none border-b-0"
              : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-[#EEEEEE]" />

            <AccordionTrigger
              onClick={() => {
                option === "Events" ? setOption("") : setOption("Events");
              }}
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
                  All events
                </Link>
              </button>
            </div>

            <div className="flex gap-2 items-center pl-4">
              <DiamondIcon size={"16px"} className="text-[#EEEEEE]" />
              <button>
                <Link
                  href="/admin/create-event"
                  className="hover:underline text-[#EEEEEE]"
                >
                  Create Event
                </Link>
              </button>
            </div>

          </AccordionContent>
        </AccordionItem>

         
      </Accordion>
    </div>
  );
};

export default AdminSidebar;
