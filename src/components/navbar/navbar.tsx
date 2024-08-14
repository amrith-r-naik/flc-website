import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import AuthButton from "~/components/navbar/authButton";

import Logo from "../logo";
import ThemeToggleSwitch from "../themeToggleSwitch/index.tsx";
import MobileNav from "./mobileNav";


const links = [
  { label: "Gallery", url: "/gallery" },
  { label: "Events", url: "/events" },
  { label: "Blogs", url: "/blogs" },
  { label: "Team", url: "/team" },
];

const Navbar = () => {
  const router = useRouter();

  const activePath = links.find((link) => link.url === router.pathname);

  return (
    <nav className="sticky left-0 top-0 z-40 flex  min-h-8 w-full items-center border border-border  bg-primary-foreground/5  bg-clip-padding px-[8%] py-3 backdrop-blur-lg backdrop-filter sm:px-[6%] sm:py-5 ">
      {" "}
      <Link href="/" className="flex cursor-pointer items-center">
        <Logo />
        <p className="ml-3 hidden text-sm font-bold lg:block  lg:text-2xl">
          Finite-Loop-Club
        </p>
      </Link>
      <div className="ml-auto flex items-center gap-8 ">
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
        <div className="hidden md:block">
          <AuthButton />
        </div>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
