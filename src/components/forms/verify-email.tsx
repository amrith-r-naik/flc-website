import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, type FunctionComponent } from "react";
import { toast } from "sonner";

import { Button } from "~/components/ui/button";

import { api } from "~/utils/api";

const VerifyEmailForm: FunctionComponent<{
  token: string;
}> = ({ token }) => {
  const router = useRouter();

  const verifyEmail = api.auth.verifyEmail.useMutation();

  useEffect(() => {
    toast.loading("Verifying email...");
    verifyEmail.mutate(
      { token: token },
      {
        onSuccess: () => {
          toast.dismiss();
          toast.success("Email verified successfully!");
          setTimeout(() => void router.push("/login"), 1000);
        },
        onError: ({ message }) => {
          toast.dismiss();
          toast.error(message);
          setTimeout(() => void router.push("/send-verify-email"), 1000);
        },
      },
    );
    // don't pass router or verifyEmail as dependencies, it causes infinite rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Link href="/login">
      <Button>Back to login!</Button>
    </Link>
  );
};

export default VerifyEmailForm;
