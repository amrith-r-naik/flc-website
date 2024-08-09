import { Button } from "@radix-ui/themes";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Logo from "../logo";
import ThemeToggleSwitch from "../themeToggleSwitch/themeToggleSwitch";
import NavBarMenu from "./dropdownMenu";

const links = [
  { label: "Home", url: "/" },
  { label: "Events", url: "/events" },
  { label: "Team", url: "/team" },
];

const Navbar = () => {
  const router = useRouter();

  const activePath = links.find((link) => link.url === router.pathname);

  return (
    <nav className="sticky left-0 top-0 z-40 flex  min-h-8 w-full items-center border border-border  bg-primary-foreground/5  bg-clip-padding px-[8%] py-3 backdrop-blur-lg backdrop-filter sm:px-[12%] sm:py-5 ">
      <Link href="/" className="flex items-center">
        <Logo />
        <p className="ml-3 text-sm font-bold text-white md:text-lg">
          Finite-Loop-Club
        </p>
      </Link>
      <div className="ml-auto flex gap-10 ">
        <div className="flex items-center  gap-8 ">
          {links.map((link) => (
            <Link
              key={link.url}
              className="group hidden space-y-0.5 text-foreground sm:flex"
              href={link.url}
            >
              <p className="px-0.5 text-sm font-bold md:text-base">
                {link.label}
              </p>
              <span
                className={`${
                  activePath?.label === link.label ? "max-w-full" : "max-w-0"
                } block h-0.5 bg-white transition-all duration-500 group-hover:max-w-full`}
              ></span>
            </Link>
          ))}
        </div>
        <div className="flex w-fit items-center ">
          <ThemeToggleSwitch />

          <Button
            asChild
            className="ml-8 hidden rounded border border-border bg-white px-3 py-2 font-bold hover:bg-white/5 sm:flex"
          >
            <Link
              href="/"
              className="flex gap-3  text-sm font-light text-black no-underline"
            >
              <LogIn size={18} />
              Login
            </Link>
          </Button>
          <NavBarMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
