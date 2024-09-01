import { type NextPage } from "next";
import React from "react";

import { Button } from "~/components/ui/button";

const SentVerifyEmail: NextPage = () => {
  return (
    <>
      <div className=" flex h-[75svh] w-full flex-col items-center justify-center">
        <h1 className="title mb-2 flex justify-center px-8 text-center text-2xl  text-white sm:mb-8 md:text-4xl">
          Verification email sent! Please check your inbox
        </h1>
        <div className="">
          <Button>Back to Login</Button>
        </div>
      </div>
    </>
  );
};

export default SentVerifyEmail;
