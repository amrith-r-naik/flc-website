import { type NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login: NextPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-center text-4xl">Login</h1>
        <input
          className="m-2 border border-gray-500 p-2"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="m-2 border border-gray-500 p-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="m-2 rounded bg-blue-500 p-2 text-white"
          onClick={async () => {
            signIn("credentials", {
              email: username,
              password: password,
              redirect: false,
            })
              .then(() => {
                void router.push("/profile");
              })
              .catch(console.error);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
