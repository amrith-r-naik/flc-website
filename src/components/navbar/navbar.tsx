import React from "react";
import Logo from "../logo";
import Link from "next/link";
import NavBarMenu from "./dropdownMenu";
import { Button } from "@radix-ui/themes";

const Navbar = () => {
  return (
    <nav className="sticky left-0 top-0 flex min-h-8  w-full items-center border border-border bg-background  px-[8%] py-3 sm:px-[12%] sm:py-5 ">
      <Link href="/" className="flex items-center">
        <Logo />
        <p className="ml-3 text-sm font-bold text-white md:text-lg">
          Finite-Loop-Club
        </p>
      </Link>
      <div className="ml-auto flex items-center gap-4 ">
        <div className="hidden gap-8 sm:flex">
          <Link className="text-foreground" href="/">
            Home
          </Link>
          <Link className="text-foreground" href="/events">
            Events
          </Link>
          <Link className="ml-auto text-foreground" href="/team">
            Team
          </Link>
        </div>
        <Button
          asChild
          className="rounded border border-border bg-primary-foreground px-4 py-2 font-bold text-white hover:bg-accent"
        >
          <Link href="/" className="text-white no-underline">
            Register
          </Link>
        </Button>
        {/* <Button className='text-foreground' variant="soft">Register</Button> */}
        <NavBarMenu />
      </div>
    </nav>
  );
};

export default Navbar;
