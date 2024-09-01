"use client";

import { useRouter } from "next/router";
import React from "react";

import VerifyEmailForm from "~/components/forms/verify-email";

const VerifyEmail = () => {
  const router = useRouter();

  const { token } = router.query;
  const tokenString = Array.isArray(token) ? token[0] : token;

  return (
    <div className=" flex h-screen w-full items-center justify-center">
      <div className="mx-8 w-4/5 justify-center rounded-lg  border-2 border-white bg-white bg-opacity-5 p-4 sm:w-96">
        {tokenString ? (
          <VerifyEmailForm token={tokenString} />
        ) : (
          <div className="flex justify-center p-3 text-2xl">Invalid Token</div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
