"use client";

import { useRouter } from "next/router";
import React from "react";

import { Button } from "~/components/ui/button";

import VerifyEmailForm from "~/components/forms/verify-email";

const VerifyEmail = () => {
  const router = useRouter();

  const { token } = router.query;
  const tokenString = Array.isArray(token) ? token[0] : token;

  return (
    <div className="-mt-4 flex h-screen w-full items-center justify-center">
      <div className="mx-8 w-4/5 justify-center rounded-lg  p-4 sm:w-96">
        {tokenString ? (
          <VerifyEmailForm token={tokenString} />
        ) : (
          <>
            <div className=" flex h-[75svh] w-full flex-col items-center justify-center">
              <h1 className="title mb-2 flex justify-center px-8 text-center text-2xl  text-white sm:mb-8 md:text-4xl">
                Invalid token
              </h1>
              <div className="">
                <Button>Back to Login</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
