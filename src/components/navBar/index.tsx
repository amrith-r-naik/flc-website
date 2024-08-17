import Link from "next/link";
import { useRouter } from "next/router";
import React, { type FunctionComponent } from "react";

import AdminNavBar from "~/components/navBar/adminNavBar";
import AuthButton from "~/components/navBar/authButton";
import SunMoonToggle from "~/components/navBar/sunMoonToggle";
import { userLinks } from "~/constants";

import Logo from "../logo";
import MobileNav from "./mobileNav";

const Navbar: FunctionComponent<{ isDashBoard?: boolean }> = ({
  isDashBoard = false,
}) => {
  const router = useRouter();

  if (isDashBoard) return <AdminNavBar />;

  const activePath = userLinks.find((link) => link.url === router.pathname);

  return (
    // NOTE: If h or py changes, update in <Layout/> as well
    <nav className="fixed top-0 z-50 flex w-full items-center justify-center border-0 border-b border-border px-20 py-4 backdrop-blur-lg backdrop-filter">
      <Link href="/" className="flex cursor-pointer items-center gap-3">
        <Logo />
        <p className="hidden font-bold lg:block lg:text-2xl">
          Finite-Loop-Club
        </p>
      </Link>
      <div className="ml-auto flex items-center gap-8 ">
        <div className="hidden gap-8 sm:flex">
          {userLinks.map((link) => (
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

        <SunMoonToggle />

        <div className="hidden gap-3 md:flex">
          <AuthButton />
        </div>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
