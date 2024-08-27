import { type NextPage } from "next";
import Image from "next/image";
import React from "react";

import LoginForm from "~/components/forms/login";

const Login: NextPage = () => {
  return (
    <>
      <div className=" radialgradient flex min-h-screen gap-10 ">
        <div className="my-10 flex w-full flex-col items-center gap-8 sm:my-20 sm:gap-16 lg:mx-24 lg:flex-row">
          <div className="order-2 w-full flex-col md:w-4/5 lg:order-1 lg:w-1/2 ">
            <Image
              className="ml-2 h-auto w-full rounded-lg object-cover p-2 sm:p-0 "
              src="/assets/login.png"
              alt="Login Logo"
              layout="responsive"
              width={1600}
              height={900}
            />
          </div>

          <div className="order-1 mx-8 w-4/5 flex-col justify-center rounded-lg backdrop-blur-lg sm:w-2/3 lg:order-2 lg:w-1/3">
            <div className="m-0 sm:m-4">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
