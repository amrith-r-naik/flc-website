import { LogIn } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { type FunctionComponent } from "react";

import { Button } from "~/components/ui/button";

import AvatarIcon from "../avatar";
import DropDown from "../dropdown";
import ShimmerButton from "../magicui/shimmer-button";

const AuthButton: FunctionComponent<{ inDashboard?: boolean }> = ({
  inDashboard = false,
}) => {
  const { data: session } = useSession();

  return (
    <div className="hidden gap-2 sm:flex">
      <div className="sm:flex md:flex">
        {/* {!inDashboard && session?.user.role === "ADMIN" && (
        <Button asChild size='sm'>
          <Link href="/dashboard/admin">Dashboard</Link>
        </Button>
      )}
      {!inDashboard && session?.user.role === "ORGANISER" && (
        <Button asChild size='sm'>
          <Link href="/dashboard/organiser">Dashboard</Link>
        </Button>
      )} */}
      </div>
      {session ? (
        <>
          <Link href="/profile">

            <AvatarIcon
              src={session.user?.image ?? "https://github.com/shadcn.png"}
            />

          </Link>
        </>
      ) : (
        // <Button asChild size="sm">
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
