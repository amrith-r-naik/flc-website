import { type NextPage } from "next";
import React from "react";

import Background from "~/components/background";
import SendResetForm from "~/components/forms/send-reset";

const SendResetEmail: NextPage = () => {
  return (
    <>
      <div className="z-0">
        <Background />
      </div>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <h1>Reset Password</h1>
        <SendResetForm />
      </div>
    </>
  );
};

export default SendResetEmail;
