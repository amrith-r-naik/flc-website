import { type NextPage } from "next";
import React from "react";

import SendVerifyEmailForm from "~/components/forms/send-verify";

const SendVerifyEmail: NextPage = () => {
  return (
    <div className="radialgradient flex  h-screen w-full items-center justify-center">
      <div className="justify-centers mx-8  w-4/5  rounded-lg border-2  border-white bg-white bg-opacity-5 sm:w-96">
        <div className="m-4">
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
