import { LogIn } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { type FunctionComponent } from "react";
import { type User, useUser } from "~/store";
import { Button } from "~/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import AvatarIcon from "../avatar";
import DropDown from "../dropdown";

const AuthButton: FunctionComponent = () => {
  const { data: session } = useSession();
  const { user } = useUser();

  return (
    <div className="hidden gap-2 sm:flex">
      
      <div className="sm:flex md:flex"></div>
      {session ? (
        <Link href="/profile">
          <DropDown
            trigger={
              <AvatarIcon
                src={user?.image ?? "https://github.com/shadcn.png"}
              />
            }
          />
        </Link>
      ) : (
        <Link
          href="/login"
          className="flex items-center justify-center gap-2 text-white"
        >
          <Button size={"sm"}>
            <LogIn size={18} className="" /> Login
          </Button>
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
