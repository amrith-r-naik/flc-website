import { type User } from "next-auth";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { type FunctionComponent } from "react";
import { LuLogOut } from "react-icons/lu";
import { toast } from "sonner";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import SpaceBG from "~/components/layout/spaceBG";

interface Props {
  user: User;
}

const Unauthorized: FunctionComponent<Props> = ({ user }) => {
  const router = useRouter();

  return (
    <div className="h-screen w-full">
      <SpaceBG>
        <div className="flex size-full items-center justify-center p-3">
          <Card className="backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Not Authorized</CardTitle>
              <CardDescription>Error 401</CardDescription>
            </CardHeader>
            <CardContent className="flex max-w-prose flex-col gap-3">
              <div>You are not authorized to access this website.</div>
              <div>
                If you think this is an error, verify that you are signed in
                with the correct account.
              </div>
              <div>
                You are currently signed in as{" "}
                <span className="font-bold">{user.name}</span> (
                <span className="font-bold">{user.email}</span>) through Google.
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={async () => {
                  toast.loading("Signing out...");
                  signOut({
                    redirect: false,
                  })
                    .then(() => {
                      toast.dismiss();
                      toast.success("Signed out successfully");
                      void router.push("/");
                    })
                    .catch((e) => {
                      toast.dismiss();
                      console.error(e);
                      toast.error("Failed to sign out");
                    });
                }}
              >
                <LuLogOut className="mr-2 size-5" />
                Sign Out
              </Button>
            </CardFooter>
          </Card>
        </div>
      </SpaceBG>
    </div>
  );
};

export default Unauthorized;
