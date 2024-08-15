
import { DiamondIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import { AdminLinks } from "~/constants";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import MobileNav from "./sidebarMenu";

const AdminSidebar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleAccordionClick = (label: string) => {
    setActiveItem(activeItem === label ? null : label);
  };

  return (
    <>
      <div className="fixed left-0 right-0 top-[13%] z-50 w-full bg-gray-500 p-4 sm:hidden">
        <MobileNav />
      </div>

      <div className="sticky top-20 hidden h-[89vh] w-[15%] space-y-3 bg-black px-4 text-white shadow-md sm:block border-r">
        <h1 className="mt-4 subheading font-extrabold tracking-wide text-muted text-white text-left   border-b">
          Admin Dashboard
        </h1>

        {AdminLinks.map((item, index) =>
          item.sublinks ? (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="w-full space-y-1"
            >
              <AccordionItem
                value={`item-${index}`}
                className={`w-full rounded-lg px-2 hover:bg-zinc-800 rounded-l-none border-l-2 border-border border-b ${
                  activeItem === item.label ? "bg-zinc-800" : ""
                }`}
              >
                <div className="flex w-full items-center">
                  <AccordionTrigger
                    onClick={() => handleAccordionClick(item.label)}
                    className="w-full"
                  >
                    <h1>{item.label}</h1>
                  </AccordionTrigger>
                </div>
                <AccordionContent
                  className={`space-y-3 ${
                    activeItem === item.label ? "block" : "hidden"
                  }`}
                >
                  {item.sublinks.map((sublink, subIndex) => (
                    <div
                      key={subIndex}
                      className="flex items-center gap-2 pl-4"
                    >
                      <DiamondIcon size={"16px"} />
                      <button>
                        <Link href={sublink.url} className="hover:underline">
                          {sublink.label}
                        </Link>
                      </button>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <div
              key={index}
              className={`mt-2 w-full cursor-pointer space-y-1 rounded-r-lg border-l-2 border-border border-b p-4 px-2 hover:bg-zinc-800 ${
                activeItem === item.label ? "bg-zinc-800" : ""
              }`}
              onClick={() => setActiveItem(item.label)}
            >
              <Link href={item.url}>
                <p>{item.label}</p>
              </Link>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default AdminSidebar;

