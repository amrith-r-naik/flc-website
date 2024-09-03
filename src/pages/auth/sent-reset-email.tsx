import { LogIn } from "lucide-react";
import { type NextPage } from "next";
import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";

import { Button } from "~/components/ui/button";

const SentResetEmail: NextPage = () => {
  return (
    <>
      <div className="-mt-12 flex h-screen w-full flex-col items-center justify-center gap-6 bg-gradient-to-bl from-[#1e1333] via-[#0a001c] to-[#0e0a2a] sm:gap-4">
        <h1 className="title mb-2 flex flex-col justify-center gap-3 px-8 text-center text-2xl text-white sm:mb-8 md:text-4xl">
          <span>Password reset email sent!</span>
          <span className="text-xl">Please check your inbox</span>
        </h1>
        <div className="flex flex-col gap-3 md:flex-row">
          <Link href="/send-reset-email">
            <Button className="max-w-max">
              <span className="flex items-center justify-center gap-2">
                <MdEmail size={18} className="" />
                Resend Email
              </span>
            </Button>
          </Link>
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

export default SentResetEmail;
