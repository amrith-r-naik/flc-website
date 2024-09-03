import { type FunctionComponent } from "react";

import AuthButton from "~/components/navBar/authButton";
import SunMoonToggle from "~/components/navBar/sunMoonToggle";

const NavBar: FunctionComponent = () => {
  return (
    // NOTE: If height changed, update in <DashboardLayout/> as well
    <header className="flex h-16 min-h-16 w-full items-center gap-4 border-0 border-b bg-transparent p-4 md:px-6">
      <div className="flex-grow" />

      <SunMoonToggle />

      <AuthButton />
    </header>
  );
};

export default NavBar;
