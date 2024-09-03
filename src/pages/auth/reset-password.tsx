"use client";

import { type NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import ResetPasswordForm from "~/components/forms/reset-password";

const SendResetEmail: NextPage = () => {
  const router = useRouter();

  const { token } = router.query;
  const tokenString = Array.isArray(token) ? token[0] : token;

  return (
    <>
      <div className="-mt-10 flex h-screen w-full items-center justify-center ">
        <div className="bg-gradient-to-rl mx-8 w-4/5 justify-center rounded-xl border border-purple-950 from-[#1e1333] via-[#0a001c] to-[#350236be] p-4 sm:w-96">
          <div className="m-4">
            {tokenString ? (
              <ResetPasswordForm token={tokenString} />
            ) : (
              <div className="flex justify-center p-3 text-2xl">
                Invalid Token
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SendResetEmail;
