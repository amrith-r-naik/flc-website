import { DiamondIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const AdminSidebar = () => {
  const [option, setOption] = useState("");

  return (
    <div className=" sticky top-20 hidden h-[89vh] w-[15%] space-y-3 bg-black px-4  text-white shadow-md sm:visible sm:block">
      <h1 className="mt-4 text-lg font-extrabold tracking-wide text-muted text-white">
        Admin Dashboard
      </h1>

      <Accordion type="single" collapsible className="w-full space-y-1">
        <AccordionItem
          value="item-1"
          className={`w-full rounded-lg px-2 hover:bg-zinc-800 ${
            option == "Events" ? "rounded-l-none border-l-2 border-border" : ""
          }`}
        >
          <div className="flex w-full items-center">
            <AccordionTrigger
              onClick={() => {
                option === "Events" ? setOption("") : setOption("Events");
              }}
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
                  All events
                </Link>
              </button>
            </div>

            <div className="flex items-center gap-2 pl-4">
              <DiamondIcon size={"16px"} />
              <button>
                <Link href="/admin/create-event" className="hover:underline">
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
