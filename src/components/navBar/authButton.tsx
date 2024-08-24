import { LogIn, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { type FunctionComponent } from "react";
import { toast } from "sonner";

import { Button } from "~/components/ui/button";

const AuthButton: FunctionComponent<{ inDashboard?: boolean }> = ({
  inDashboard = false,
}) => {
  const router = useRouter();
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
        <Button
          onClick={async () => {
            toast.loading("Signing out...");
            signOut({
              redirect: false,
            })
              .then(() => {
                toast.dismiss();
                toast.success("Signed out successfully");
                setTimeout(() => void router.push("/"), 1000);
              })
              .catch((e) => {
                toast.dismiss();
                console.error(e);
                toast.error("Failed to sign out");
              });
          }}
        >
          <LogOut size={18} className="mr-2" /> Sign out
        </Button>
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
