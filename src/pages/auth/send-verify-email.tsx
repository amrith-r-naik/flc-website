import { type NextPage } from "next";
import React from "react";

import SendVerifyEmailForm from "~/components/forms/send-verify";

const SendVerifyEmail: NextPage = () => {
  return (
    <div className="-mt-12 flex h-screen w-full items-center justify-center bg-gradient-to-bl from-[#1e1333] via-[#0a001c] to-[#0e0a2a]">
      <div className="justify-centers mx-4 w-full rounded-lg sm:w-96">
        <div className=" bg-gradient-to-rl rounded-2xl border border-purple-950 from-[#1e1333] via-[#0a001c] to-[#350236be] p-4 filter backdrop-blur-3xl sm:p-8">
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
