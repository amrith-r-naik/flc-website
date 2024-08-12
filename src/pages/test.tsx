import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";



import { api } from "~/utils/api";


export default function Home() {
  const router = useRouter();

  const signUp = api.auth.signUp.useMutation();
  const sendVerificationEmail = api.auth.sendVerifyEmail.useMutation();
  const sendPasswordResetEmail = api.auth.sendPasswordResetEmail.useMutation();
  const resetPassword = api.auth.resetPassword.useMutation();
  const verifyEmail = api.auth.verifyEmail.useMutation();

  // const test = api.test.test.useMutation();

  return (
    <main className="bg- flex h-screen w-full flex-col items-center justify-center gap-10">
      <h1>hello this is titile</h1>

      <Link href="/landing">Landing</Link>

      <button
        onClick={() => {
          signUp.mutate({
            branchId: "clzo1cfsl0000pbobgzz785ap",
            email: "len@nmamit.in",
            name: "len",
            password: "password",
            confirmPassword: "password",
            phone: "8660241724",
            year: "2023",
          });
        }}
      >
        Create
      </button>

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
          const res = signIn("credentials", {
            email: "len@nmamit.in",
            password: "password",
            redirect: false,
          });
          res
            .then((res) => {
              res?.status === 200 && router.push("/home");
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        sign in
      </button>

      <button
        onClick={async () => {
          await signOut();
        }}
      >
        signout
      </button>

      {/* <button
        onClick={() => {
          test.mutate();
        }}
      >
        test protected ProcedureType
      </button> */}
    </main>
  );
}