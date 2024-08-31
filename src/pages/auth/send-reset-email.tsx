import { type NextPage } from "next";
import React from "react";

import SendResetForm from "~/components/forms/send-reset";

const SendResetEmail: NextPage = () => {
  return (
    <>
      <div className=" flex h-screen w-full items-center justify-center">
        <div className="mx-8  w-4/5 border-spacing-1 justify-center rounded-lg border-white backdrop-blur-lg sm:w-96">
          <div className="rounded-2xl border border-purple-950 bg-gradient-to-br from-purple-950/10 via-purple-700/30 to-purple-950/10 p-4  filter backdrop-blur-3xl">
            <h1 className=" title mb-8 flex justify-center text-center text-4xl text-white">
              Reset Password
            </h1>
            <SendResetForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SendResetEmail;
