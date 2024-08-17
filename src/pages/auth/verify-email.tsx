"use client";

import { useRouter } from "next/router";
import React from "react";

import VerifyEmailForm from "~/components/forms/verify-email";

const VerifyEmail = () => {
  const router = useRouter();

  const { token } = router.query;
  const tokenString = Array.isArray(token) ? token[0] : token;

  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto -translate-y-10  justify-center rounded-lg bg-white/15  lg:order-2">
        {tokenString ? (
          <VerifyEmailForm token={tokenString} />
        ) : (
          <div className="p-3">Invalid Token</div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
