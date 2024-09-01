import { LogIn } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { type FunctionComponent } from "react";

import { Button } from "~/components/ui/button";

import AvatarIcon from "../avatar";
import DropDown from "../dropdown";

const AuthButton: FunctionComponent = () => {
  const { data: session } = useSession();

  return (
    <div className="hidden gap-2 sm:flex">
      <div className="sm:flex md:flex"></div>
      {session ? (
        <>
          <Link href="/profile">

            <AvatarIcon
              src={session.user?.image ?? "https://github.com/shadcn.png"}
            />

          </Link>
        </>
      ) : (
        <Button size={"sm"}>
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 text-white"
          >
            <LogIn size={18} className="" /> Login
          </Link>
        </Button>

      )}
    </div>
  );
};

export default AuthButton;
