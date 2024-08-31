import { type NextPage } from "next";
import React from "react";

import SendVerifyEmailForm from "~/components/forms/send-verify";

const SendVerifyEmail: NextPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="justify-centers mx-8 w-4/5 rounded-lg  sm:w-96">
        <div className=" rounded-2xl border border-purple-950 bg-gradient-to-br from-purple-950/10 via-purple-700/30 to-purple-950/10 p-4  filter backdrop-blur-3xl">
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
