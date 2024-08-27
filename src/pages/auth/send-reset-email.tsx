import { type NextPage } from "next";
import React from "react";

import SendResetForm from "~/components/forms/send-reset";

const SendResetEmail: NextPage = () => {
  return (
    <>
      <div className="radialgradient flex h-screen w-full items-center justify-center">
        <div className="mx-8  w-4/5 justify-center rounded-lg border-2 border-white backdrop-blur-lg sm:w-96">
          <div className="m-4">
            <h1 className=" mb-8 flex justify-center text-center text-4xl text-white">
              Reset password
            </h1>
            <SendResetForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SendResetEmail;
