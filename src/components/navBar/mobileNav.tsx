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

import AuthButton from "./authButton";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import AvatarIcon from "../avatar";
import { LayoutDashboard, LogOut } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";

function MobileNav() {
  const activePath = null;
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <section className="w-full flex items-center gap-3 ">
      <Sheet>
        <SheetTrigger asChild>
          <IconMenu className="cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side="right" className="border-none focus:border-none z-[80] w-[60%] sm:w-[50%] bg-[#040513]">
          <div className="mt-4 flex items-center justify-between p-2 ">
            <SheetClose asChild>
              <Link href="/" className="flex cursor-pointer items-center">
                <p className="ml-3  text-lg font-extrabold md:block md:text-2xl">
                  Finite-Loop-Club
                </p>
              </Link>
            </SheetClose>
          </div>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto p-2 ">
            <section className="flex h-full flex-col gap-6 pt-5 text-black">
              <div className=" flex flex-col gap-2 pt-2 text-foreground font-bold text-sm">
                <SheetClose asChild>
                  {session && <Link href='/profile' className="flex items-center gap-2"><AvatarIcon src={session.user?.image ?? "https://github.com/shadcn.png"} />Profile</Link>}
                </SheetClose>
              </div>
              
              <div className="flex flex-col gap-8 sm:hidden text-foreground">
                {userNavItems.map((link) => (
                  <SheetClose asChild key={link.link}>
                    <Link
                      className="group space-y-0.5 text-foreground"
                      href={link.link}
                    >
                      <p className="px-0.5 text-sm font-bold md:text-base flex items-center gap-2">
                        {link.Icon}{link.name}
                      </p>
                      <span
                        className={`${activePath === link.link ? "max-w-full" : "max-w-0"
                          } block h-0.5 bg-white transition-all duration-500 group-hover:max-w-full`}
                      ></span>
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  {session?.user.role === "ADMIN" ? (

                    <Link className="text-sm font-bold md:text-base flex items-center gap-2" href="/dashboard/admin">
                      <LayoutDashboard /> Dashboard
                    </Link>

                  )
                    : session?.user.role === "ORGANISER" ? (

                      <Link className="font-bold" href="/dashboard/organiser">Dashboard</Link>

                    ) : <></>}
                </SheetClose>
              </div>
              <div>
                
              </div>

            </section>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
