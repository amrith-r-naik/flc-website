import { type NextPage } from "next";
import Image from "next/image";
import React from "react";

import Resetpassword from "~/components/forms/reset-password";

const SendResetEmail: NextPage = () => {
  return (
    <>
      <div className="radialgradient flex  h-screen w-full items-center justify-center">
        <div className="mx-8 w-4/5  justify-center rounded-lg  bg-white/15 sm:w-96">
          <div className="m-4">
            <Resetpassword />
          </div>
        </div>
      </div>
    </>
  );
};

export default SendResetEmail;
