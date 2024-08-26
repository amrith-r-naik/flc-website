import { useSession } from "next-auth/react";
import Link from "next/link";
import { type FunctionComponent } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

import AuthButton from "~/components/navBar/authButton";
import SunMoonToggle from "~/components/navBar/sunMoonToggle";

import Search from "./search";

const NavBar: FunctionComponent = () => {
  const { data: session } = useSession();

  return (
    // NOTE: If height changed, update in <DashboardLayout/> as well
    <header className="flex h-16 min-h-16 w-full items-center gap-4 border-0 border-b bg-transparent p-4 md:px-6">
      <div className="flex-grow" />

      <Search />

      <SunMoonToggle />

      <AuthButton inDashboard />
    </header>
  );
};

export default NavBar;
