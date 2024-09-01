import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { type ReactNode } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const DropDown = ({ trigger }: { trigger: ReactNode }) => {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="radial-gradient(50% 70.31% at 50% 0%, rgb(184 148 255 / 33%) 0%, rgba(126, 61, 255, 0) 100%), rgb(21 0 59 / 80%) z-[100]">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile">
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </Link>
        {session?.user.role === "ADMIN" && (
          <DropdownMenuItem>
            <Link href="/dashboard/admin">Dashboard</Link>
          </DropdownMenuItem>
        )}
        {session?.user.role === "ORGANISER" && (
          <DropdownMenuItem>
            <Link href="/dashboard/organiser">Dashboard</Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
/* {!inDashboard && session?.user.role === "ADMIN" && (
        <Button asChild size='sm'>
          <Link href="/dashboard/admin">Dashboard</Link>
        </Button>
      )}
      {!inDashboard && session?.user.role === "ORGANISER" && (
        <Button asChild size='sm'>
          <Link href="/dashboard/organiser">Dashboard</Link>
        </Button>
      )} */
export default DropDown;
