import { type NextPage } from "next";
import React from "react";

import SendVerifyEmailForm from "~/components/forms/send-verify";

const SendVerifyEmail: NextPage = () => {
  return (
    <>
      {/* <div className="z-0">
        <Background />
      </div> */}
      <>
        <div className="radialgradient flex  h-screen w-full items-center justify-center">
          <div className="mx-8 w-4/5  justify-center rounded-lg  bg-white/15 sm:w-96">
            <div className="m-4">
              <h1 className=" mb-8 flex justify-center text-center text-4xl">
                Verify Email
              </h1>
              <SendVerifyEmailForm />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SendVerifyEmail;
