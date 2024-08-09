import { LogIn, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { type FunctionComponent } from "react";

import { Button } from "~/components/ui/button";

const AuthButton: FunctionComponent<{ className?: string }> = ({
  className,
}: {
  className?: string;
}) => {
  const { data: session } = useSession();

  if (session)
    return (
      <Button className={className} onClick={() => signOut()}>
        <LogOut size={18} className="mr-2" /> Sign out
      </Button>
    );
  else
    return (
      <Button className={className} asChild>
        <Link href="/login">
          <LogIn size={18} className="mr-2" /> Login
        </Link>
      </Button>
    );
};

export default AuthButton;
