import Image from "next/image";
import React from "react";

import RegisterForm from "~/components/forms/register";

function Index() {
  return (
    <>
      {/* <div className="z-0">
        <Background />
      </div> */}
      <div className="radialgradient flex min-h-screen gap-10">
        <div className="sm:my-15 my-10 flex w-full flex-col items-center gap-8 sm:gap-16 lg:mx-24 lg:flex-row">
          <div className="order-2 w-full flex-col md:w-4/5 lg:order-1 lg:w-1/2">
            <div className="px-6 sm:px-10">
              <h1 className="flex justify-start text-2xl sm:text-4xl">
                Finite Loop Club
              </h1>

              <div className="mt-6 lg:mt-12">
                <Image
                  className="ml-1"
                  src="/assets/github.png"
                  alt="GitHub Logo"
                  width={40}
                  height={40}
                />
                <h1 className="pt-2 text-lg font-bold text-cyan-50">Github</h1>
                <p className="text-gray-300">
                  Join Finiteloop Club on GitHub for collaborative coding and
                  innovative projects. Explore repositories, contribute to open
                  source, and enhance your programming skills with our
                  community.
                </p>
              </div>
              <div className="mt-6 lg:mt-12">
                <Image
                  className="ml-2"
                  src="/assets/discord.png"
                  alt="Discord Logo"
                  width={40}
                  height={40}
                />
                <h1 className="pt-1 text-lg font-bold text-cyan-50">Discord</h1>
                <p className="text-gray-300">
                  Connect with Finiteloop Club on Discord to engage in lively
                  tech discussions, receive coding support, and participate in
                  exclusive events. Join our community to grow and network with
                  fellow developers.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 mx-8 mt-16 w-4/5 flex-col justify-center rounded-lg bg-white/10 sm:w-2/3 lg:order-2 lg:w-1/2">
            <div className="m-4">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
