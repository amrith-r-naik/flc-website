import { LogIn } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { type FunctionComponent } from "react";

import { Button } from "~/components/ui/button";

import { api } from "~/utils/api";

import AvatarIcon from "../avatar";

const AuthButton: FunctionComponent = () => {
  const { data: session } = useSession();
  const user = api.user.getUser.useQuery();
  return (
    <div className="hidden gap-2 sm:flex">
      <div className="sm:flex md:flex"></div>
      {session ? (
        <Link href="/profile">
          <AvatarIcon
            src={user.data?.image ?? "https://github.com/shadcn.png"}
          />
        </Link>
      ) : (
        <Link
          href="/login"
          className="flex items-center justify-center gap-2 text-white"
        >
          <Button size="sm">
            <LogIn size={18} /> Login
          </Button>
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
