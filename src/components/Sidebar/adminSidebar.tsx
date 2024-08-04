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

    <div className="h-screen w-[20%]  px-4 py-6 space-y-3 bg-white text-black shadow-md">

      <h1 className="font-extrabold text-lg tracking-wide text-muted">
        Admin Dashboard
      </h1>

      <Accordion type="single" collapsible className="w-full space-y-1">
        <AccordionItem
          value="item-1"
          className={`px-2 hover:bg-slate-100 rounded-lg ${
            option == "Events"
              ? "border-l-2 border-border rounded-l-none"
              : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <ShoppingCart />

            <AccordionTrigger
              onClick={() => {
                option === "Events" ? setOption("") : setOption("Events");
              }}
              className="flex-1"
            >
              Events
            </AccordionTrigger>

          </div>
          <AccordionContent className="space-y-3">
            <div className="flex gap-2 items-center pl-4">
              <DiamondIcon size={"16px"} />
              <button>
                <Link
                  href="/admin/all-events"
                  className="hover:underline"
                >
                  All events
                </Link>
              </button>
            </div>

            <div className="flex gap-2 items-center pl-4">
              <DiamondIcon size={"16px"} />
              <button>
                <Link
                  href="/admin/create-event"
                  className="hover:underline"
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
