import { useRouter } from "next/router";
import React, { type FunctionComponent } from "react";
import { LuKeyRound } from "react-icons/lu";

import { Button } from "~/components/ui/button";

import SpaceBG from "~/components/layout/spaceBG";

const SignIn: FunctionComponent = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-full">
      <SpaceBG>
        <div className="flex size-full items-center justify-center">
          <Button
            onClick={async () => {
              await router.push("/login");
            }}
            className="text-base"
          >
            <LuKeyRound className="mr-2 size-4" />
            Sign In
          </Button>
        </div>
      </SpaceBG>
    </div>
  );
};

export default SignIn;
