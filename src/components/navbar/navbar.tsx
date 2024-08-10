import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import AuthButton from "~/components/navbar/authButton";

import Logo from "../logo";
import ThemeToggleSwitch from "../themeToggleSwitch/themeToggleSwitch";
import NavBarMenu from "./dropdownMenu";

const links = [
  { label: "Home", url: "/" },
  { label: "Events", url: "/events" },
  { label: "Calender", url: "/calender" },
  { label: "Team", url: "/team" },
];

const Navbar = () => {
  const router = useRouter();

  const activePath = links.find((link) => link.url === router.pathname);

  return (
    <nav className="sticky left-0 top-0 z-40 flex  min-h-8 w-full items-center border border-border  bg-gradient-to-r from-blue-950 via-indigo-950 to-yellow-600 px-[8%] py-3  sm:px-[12%] sm:py-5 ">
      <Link href="/" className="flex items-center">
        <Logo />
        <p className="ml-3 text-sm font-bold text-white md:text-lg">
          Finite-Loop-Club
        </p>
      </Link>
      <div className="ml-auto flex items-center gap-10 ">
        <div className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.url}
              className="group space-y-0.5 text-foreground"
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
        <div>
          <ThemeToggleSwitch />
        </div>

        <AuthButton />

        <NavBarMenu />
      </div>
    </nav>
  );
};

export default Navbar;
