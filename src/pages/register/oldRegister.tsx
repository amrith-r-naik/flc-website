import Image from "next/image";
import React, { useState, type ChangeEvent } from "react";
import { toast, Toaster } from "sonner";

import Background from "~/components/background";
import { api } from "~/utils/api";
import { RegisterZ } from "~/zod/authZ";

function Index() {
  const signUp = api.auth.signUp.useMutation({
    onSuccess: async (data) => {
      sendVerifyEmail.mutate({ email: data.email });
    },
    onError: ({ message }) => {
      toast.dismiss();
      toast.error(message);
    },
  });
  const sendVerifyEmail = api.auth.sendVerifyEmail.useMutation({
    onSuccess: async (data) => {
      console.log("toast");
      toast.success("Verification link sent to email", {
        position: "bottom-center",
      });
    },
    onError: ({ message }) => {
      toast.dismiss();
      toast.error(message);
    },
  });
  const [formData, setFormData] = useState({
    branchId: "cly1kesbp00004bj8a2twttca",
    name: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <div className="z-0">
        <Background />
      </div>
      <div className="radialgradient flex min-h-screen gap-10">
        <div className="my-10 flex w-full flex-col items-center gap-8 sm:my-20 sm:gap-16 lg:mx-24 lg:flex-row">
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

          <div className="order-1 mx-8 w-4/5 flex-col justify-center rounded-lg bg-white/15 sm:w-2/3 lg:order-2 lg:w-1/2">
            <h2 className="mt-4 flex justify-center text-2xl sm:m-8 sm:mt-8 sm:text-3xl md:text-4xl">
              Register Now
            </h2>
            <div className="mx-4 mb-6 mt-2 sm:mx-10 sm:mb-16 sm:mt-8">
              <div className="mb-2 sm:mb-4">
                <label className="block sm:mb-1">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded bg-white/5 p-2 pl-10"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Image
                      src="/assets/name.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-2 sm:mb-4">
                <label className="block sm:mb-1">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded bg-white/5 p-2 pl-10"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Image
                      src="/assets/email.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2 sm:mb-4">
                <label className="block sm:mb-1">Phone</label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded bg-white/5 p-2 pl-10"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Image
                      src="/assets/phone.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-2 sm:mb-4 sm:flex">
                <div className="mb-2 sm:mb-0 sm:w-1/2 sm:pr-2">
                  <label className="block sm:mb-1">Branch</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="branch"
                      className="w-full rounded bg-white/5 p-2 pl-10"
                      placeholder="Branch"
                      value={formData.branch}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <Image
                        src="/assets/branch.png"
                        alt="Icon"
                        width={18}
                        height={18}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:w-1/2 sm:pl-2">
                  <label className="block sm:mb-1">Year</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="year"
                      className="w-full rounded bg-white/5 p-2 pl-10"
                      placeholder="Year"
                      value={formData.year}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <Image
                        src="/assets/year.png"
                        alt="Icon"
                        width={18}
                        height={18}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 sm:mb-4">
                <label className="block sm:mb-1">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    className="w-full rounded bg-white/5 p-2 pl-10"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Image
                      src="/assets/password.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-2 sm:mb-4">
                <label className="block sm:mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="w-full rounded bg-white/5 p-2 pl-10"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Image
                      src="/assets/password.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  console.log(formData);
                  const parsed = RegisterZ.parse(formData);
                  console.log("parsed", parsed);
                  const res = signUp.mutate({
                    ...parsed,
                  });
                }}
                className="mt-4 w-full rounded bg-yellow-300 p-2 font-bold text-gray-900 sm:mt-6"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
