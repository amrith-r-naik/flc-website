import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

import { api } from "~/utils/api";

const VerifyEmail = () => {
  const router = useRouter();
  const { token } = router.query;
  const [verificationToken, setVerificationToken] = useState("");
  const verifyEmail = api.auth.verifyEmail.useMutation({
    onSuccess: async () => {
      toast.success("Email verified successfully!");
      void router.push("/register");
    },
    onError: ({ message }) => {
      toast.dismiss();
      toast.error(message);
    },
  });

  useEffect(() => {
    if (token) {
      // Handle case where token is an array of strings
      const tokenString = Array.isArray(token) ? token[0] : token;
      console.log("token string: ", tokenString);
      setVerificationToken(tokenString!);
    }
  }, [token]);

  useEffect(() => {
    if (verificationToken) {
      console.log("verificationToken: ", verificationToken);
      verifyEmail.mutate({ token: verificationToken });
    }
  }, [verificationToken, verifyEmail]);
  return (
    <>
      <div className="flex h-screen items-center">
        <div className=" order-1 mx-auto w-4/5 -translate-y-10  justify-center rounded-lg bg-white/15  lg:order-2 ">
          <Link href="/register" className="">
            <h2>Back to login!</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
