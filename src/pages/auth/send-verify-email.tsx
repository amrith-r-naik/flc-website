import { type NextPage } from "next";
import React from "react";

import Background from "~/components/background";
import SendVerifyEmailForm from "~/components/forms/send-verify";

const SendVerifyEmail: NextPage = () => {
  return (
    <>
      <div className="z-0">
        <Background />
      </div>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <h1>Verify Email</h1>

        <SendVerifyEmailForm />
      </div>
    </>
  );
};

export default SendVerifyEmail;
