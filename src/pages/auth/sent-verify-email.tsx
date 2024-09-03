import { LogIn } from "lucide-react";
import { type NextPage } from "next";
import Link from "next/link";
import React from "react";

import { Button } from "~/components/ui/button";

const SentVerifyEmail: NextPage = () => {
  return (
    <>
      <div className="-mt-12 flex h-screen w-full flex-col items-center justify-center gap-6 bg-gradient-to-bl from-[#1e1333] via-[#0a001c] to-[#0e0a2a] sm:gap-4">
        <h1 className="title mb-2 flex justify-center px-8 text-center text-2xl  text-white sm:mb-8 md:text-4xl">
          Verification email sent! Please check your inbox
        </h1>
        <div className="">
          <Link href="/login">
            <Button className="max-w-max">
              <span className="flex items-center justify-center gap-2">
                <LogIn size={18} className="" />
                Back to Login
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SentVerifyEmail;
