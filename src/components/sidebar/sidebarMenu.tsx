
"use client";

import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { DiamondIcon } from "lucide-react";
import Logo from "../logo";
import { AdminLinks } from "~/constants";

const MobileNav = () => {
  

  return (
    <section className="w-full">
      <Sheet>
        <SheetTrigger asChild>
          <IconMenu className="cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none">
          <div className="mt-4 flex items-center justify-between p-2">
            <Link href="/" className="flex cursor-pointer items-center">
              <Logo />
              <p className="ml-3 text-sm font-bold md:block md:text-2xl">
                Admin Dashboard
              </p>
            </Link>
          </div>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto p-2">
            <section className="flex h-full flex-col gap-6 pt-5 ">
              <div className="flex flex-col gap-8 sm:hidden">
                {AdminLinks.map((link, index) => (
                  <div key={index}>
                    {link.sublinks ? (
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={`item-${index}`} className="rounded-l-none border-l-2 border-border border-b p-2">
                          <AccordionTrigger className="text-sm font-bold md:text-base">
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent>
                            {link.sublinks.map((sublink, ) => (
                              <SheetClose asChild key={sublink.url}>
                                <Link
                                  className="group flex items-center space-y-0.5 pl-4 text-foreground"
                                  href={sublink.url}
                                >
                                  <DiamondIcon
                                    size={"16px"}
                                    className="mr-2"
                                  />
                                  <p className="text-sm md:text-base">
                                    {sublink.label}
                                  </p>
                                </Link>
                              </SheetClose>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <SheetClose asChild key={link.url}>
                        <Link
                          className="group space-y-0.5 text-foreground "
                          href={link.url}
                        >
                          <p className="px-1 text-sm font-bold md:text-base rounded-l-none border-l-2 border-border border-b p-4">
                            {link.label}
                          </p>
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
