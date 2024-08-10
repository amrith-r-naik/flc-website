"use client";

import { signOut } from "next-auth/react";

import { api } from "~/utils/api";

export default function Home() {
  const sendVerificationEmail = api.auth.sendVerifyEmail.useMutation();
  const resetPassword = api.auth.resetPassword.useMutation();
  const verifyEmail = api.auth.verifyEmail.useMutation();

  return (
    <main className="bg- flex h-screen w-full flex-col items-center justify-center gap-10">
      <button
        onClick={() => {
          sendVerificationEmail.mutate({
            email: "len@nmamit.in",
          });
        }}
      >
        send password reset emaik
      </button>

      <button
        onClick={() => {
          verifyEmail.mutate({
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbHhvcXMzbzMwMDAwMTN2aWt2NzJrN3M2IiwianRpIjoiY2x4b3FzOTI3MDAwMjEzdmlyNHQ2ZGFkdyIsImlhdCI6MTcxODk3NzQzOSwiZXhwIjoxNzE5MDYzODM5fQ.uPsK9Me38dAZVQJdj4-Kb9AtI6i49YcW45eTlQ6-4vE",
          });
        }}
      >
        reset password
      </button>

      <button
        onClick={async () => {
          await signOut();
        }}
      >
        signout
      </button>
    </main>
  );
}
