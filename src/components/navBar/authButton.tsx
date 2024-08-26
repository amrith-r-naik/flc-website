import { LogIn } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { type FunctionComponent } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

const AuthButton: FunctionComponent<{ inDashboard?: boolean }> = ({
  inDashboard = false,
}) => {
  const { data: session } = useSession();

  return (
    <div className="hidden gap-3 md:flex">
      {!inDashboard && session?.user.role === "ADMIN" && (
        <Button asChild>
          <Link href="/dashboard/admin">Dashboard</Link>
        </Button>
      )}
      {!inDashboard && session?.user.role === "ORGANISER" && (
        <Button asChild>
          <Link href="/dashboard/organiser">Dashboard</Link>
        </Button>
      )}
      {session ? (
        <Link href="/profile">
          <Avatar>
            <AvatarImage
              src={session.user.image ?? "https://github.com/shadcn.png"}
            />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
        </Link>
      ) : (
        <Button asChild>
          <Link href="/login">
            <LogIn size={18} className="mr-2" /> Login
          </Link>
        </Button>
      )}
    </div>
  );
};

export default AuthButton;
