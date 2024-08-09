import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, type FunctionComponent } from "react";
import { toast } from "sonner";

import Background from "~/components/background";
import { api } from "~/utils/api";

const Verify: FunctionComponent = () => {
  const { query } = useRouter();
  const token = query.token;

  const [status, setStatus] = useState<"LOADING" | "INVALID" | "SUCCESS">(
    "INVALID",
  );

  const verifyEmail = api.auth.verifyEmail.useMutation();

  useEffect(() => {
    if (token && typeof token === "string") {
      setStatus("LOADING");

      verifyEmail.mutate(
        {
          token,
        },
        {
          onSuccess: () => {
            setStatus("SUCCESS");
            toast.success("Email verified successfully");
          },
          onError: ({ message }) => {
            setStatus("INVALID");
            toast.error(message);
          },
        },
      );
    }
  }, [token, verifyEmail]);

  return (
    <>
      <div className="z-0">
        <Background />
      </div>
      <div className="flex h-screen w-full items-center justify-center">
        {status === "LOADING" && <h1>Verifying...</h1>}
        {status === "INVALID" && <h1>Invalid token</h1>}
        {status === "SUCCESS" && (
          <h1>
            Email verified successfully. Please <Link href="/login">Login</Link>
          </h1>
        )}
      </div>
    </>
  );
};

export default Verify;
