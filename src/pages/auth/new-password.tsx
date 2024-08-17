import { type NextPage } from "next";
import React from "react";

import Resetpassword from "~/components/forms/reset-password";

const SendResetEmail: NextPage = () => {
  return (
    <>
      <div className="radialgradient flex  h-screen w-full items-center justify-center">
        <div className="mx-8 w-4/5  justify-center rounded-lg  border-2  border-white bg-white bg-opacity-5 sm:w-96">
          <div className="m-4">
            <Resetpassword />
          </div>
        </div>
      </div>
    </>
  );
};

export default SendResetEmail;
