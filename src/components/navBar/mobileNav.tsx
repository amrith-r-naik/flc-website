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

import { userNavItems } from "~/constants";

import Logo from "../logo";
import AuthButton from "./authButton";

function MobileNav() {
  const activePath = null;

  return (
    <section className="w-full ">
      <Sheet>
        <SheetTrigger asChild>
          <IconMenu className="cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none ">
          <div className="mt-4 flex items-center justify-between p-2 ">
            <SheetClose asChild>
              <Link href="/" className="flex cursor-pointer items-center">
                <Logo />
                <p className="ml-3  text-sm font-bold md:block md:text-2xl">
                  Finite-Loop-Club
                </p>
              </Link>
            </SheetClose>
          </div>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto p-2 ">
            <section className="flex h-full flex-col gap-6 pt-5 text-black">
              <div className="flex flex-col gap-8 sm:hidden">
                {userNavItems.map((link) => (
                  <SheetClose asChild key={link.link}>
                    <Link
                      className="group space-y-0.5 text-foreground"
                      href={link.link}
                    >
                      <p className="px-0.5 text-sm font-bold md:text-base">
                        {link.name}
                      </p>
                      <span
                        className={`${
                          activePath === link.link ? "max-w-full" : "max-w-0"
                        } block h-0.5 bg-white transition-all duration-500 group-hover:max-w-full`}
                      ></span>
                    </Link>
                  </SheetClose>
                ))}
              </div>

              <div className="mb-4 flex  flex-col gap-2 pt-2">
                <SheetClose asChild>
                  <AuthButton />
                </SheetClose>
              </div>
            </section>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
