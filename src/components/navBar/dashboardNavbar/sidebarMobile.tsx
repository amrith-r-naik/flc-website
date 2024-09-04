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

import { adminNavItems } from "~/constants";

const MobileNav = () => {
  return (
    <section className="w-full">
      <Sheet>
        <SheetTrigger asChild>
          <IconMenu className="cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none text-white">
          <div className="mt-4 flex items-center justify-between p-2">
            <Link href="/" className="flex cursor-pointer items-center">
              <p className="ml-3 text-sm font-bold md:block md:text-2xl">
                Admin Dashboard
              </p>
            </Link>
          </div>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto p-2">
            <section className="flex h-full flex-col gap-6 pt-5 ">
              <div className="flex flex-col gap-8 sm:hidden">
                {adminNavItems.map((link, index) => (
                  <div key={index}>
                    <SheetClose asChild key={link.name}>
                      <Link
                        className="group space-y-0.5 !text-white"
                        href={link.link}
                      >
                        <p className="rounded-l-none border-b border-l-2 border-border p-4 px-1 text-sm font-bold md:text-base">
                          {link.name}
                        </p>
                      </Link>
                    </SheetClose>
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
