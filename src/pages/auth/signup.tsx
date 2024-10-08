import { type NextPage } from "next";
import Image from "next/image";
import React from "react";

import SignUpForm from "~/components/forms/signup";

const SignUp: NextPage = () => {
  return (
    <>
      <div className="flex min-h-screen gap-10 bg-gradient-to-bl from-[#1e1333] via-[#0a001c] to-[#0e0a2a] ">
        <div className="my-5 flex w-full flex-col items-center gap-8 sm:my-1 sm:mb-20 sm:gap-16 lg:mx-24 lg:flex-row">
          <div className="order-2 w-full flex-col md:w-4/5 lg:order-1 lg:w-1/2">
            <Image
              className="ml-2 h-auto w-full rounded-lg object-cover p-2 sm:p-0 "
              src="/images/ui/login.png"
              alt="Login Logo"
              layout="responsive"
              width={1600}
              height={900}
            />
          </div>
          <div className="order-1 mx-8 mt-16 w-4/5 flex-col justify-center rounded-lg sm:w-2/3 lg:order-2 lg:w-1/2">
            <div className="m-0 sm:m-4">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
