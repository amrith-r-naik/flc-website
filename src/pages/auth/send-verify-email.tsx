import { type NextPage } from "next";
import React from "react";

import SendVerifyEmailForm from "~/components/forms/send-verify";

const SendVerifyEmail: NextPage = () => {
  return (
    <div className="-mt-12 flex h-screen w-full items-center justify-center">
      <div className="justify-centers mx-4 w-4/5 rounded-lg sm:mx-8  sm:w-96">
        <div className=" to-[#350236be]filter rounded-2xl border border-purple-950 bg-gradient-to-bl from-[#1e1333] via-[#0a001c] p-4 backdrop-blur-3xl sm:p-8">
          <h1 className=" mb-8 flex justify-center text-center text-4xl">
            Verify Email
          </h1>
          <SendVerifyEmailForm />
        </div>
      </div>
    </div>
  );
};

export default SendVerifyEmail;
