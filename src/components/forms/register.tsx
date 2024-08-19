import { zodResolver } from "@hookform/resolvers/zod";
import { type inferProcedureOutput } from "@trpc/server";
import { useRouter } from "next/router";
import React, { type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { type AppRouter } from "~/server/api/root";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

import { cn } from "~/lib/utils";
import { api } from "~/utils/api";
import { registerZ } from "~/zod/authZ";

import { InputOTP, InputOTPSlot } from "../ui/input-otp";

const RegisterForm: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  const { data: user } = api.user.getUser.useQuery();
  if (!user) return null;
  return <InnerRegisterForm className={className} user={user} />;
};

const InnerRegisterForm: FunctionComponent<{
  user: inferProcedureOutput<AppRouter["user"]["getUser"]>;
  className?: string;
}> = ({ className, user }) => {
  const router = useRouter();

  const register = api.auth.register.useMutation();

  const formSchema = z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    branch: z.string(),
    year: z.string(),
    reasonToJoin: registerZ.shape.reasonToJoin,
    expectations: registerZ.shape.expectations,
    contribution: registerZ.shape.contribution,
    paymentProof: registerZ.shape.paymentProof,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      branch: user.Branch.name,
      year: user.year,
      reasonToJoin: "",
      expectations: "",
      contribution: "",
      paymentProof: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.loading("Registering to FLC...");
    register.mutate(
      {
        reasonToJoin: values.reasonToJoin,
        expectations: values.expectations,
        contribution: values.contribution,
        paymentProof: values.paymentProof,
      },
      {
        onSuccess: () => {
          toast.dismiss();
          toast.success("Registered to FLC successfully!");
          void router.push("/profile");
        },
        onError: ({ message }) => {
          toast.dismiss();
          toast.error(message);
        },
      },
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(className, "space-y-4")}
      >
        <FormMessage className="flex justify-center text-4xl text-white/90">
          Register
        </FormMessage>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white dark:text-white">Name</FormLabel>
              <FormControl className="bg-[#494949]">
                <Input placeholder="Name" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="text-white dark:text-white">
                Email
              </FormLabel>
              <FormControl className="bg-[#494949]">
                <Input placeholder="Email" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex-1 rounded-lg">
              <FormLabel className="text-white dark:text-white">
                Phone
              </FormLabel>
              <FormControl className="bg-[#494949]">
                <InputOTP maxLength={10} {...field} disabled>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <InputOTPSlot
                      key={index}
                      index={index}
                      className="size-6 bg-[#494949] sm:size-10"
                    />
                  ))}
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <FormField
            control={form.control}
            name="branch"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white dark:text-white">
                  Branch
                </FormLabel>
                <FormControl className="bg-[#494949]">
                  <Input placeholder="Branch" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white dark:text-white">
                  Graduation Year
                </FormLabel>
                <FormControl className="bg-[#494949]">
                  <Input placeholder="Graduation Year" {...field} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="reasonToJoin"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white dark:text-white">
                Why do you want to join FLC?
              </FormLabel>
              <FormControl className="bg-[#494949]">
                <Textarea placeholder="Answer" rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="expectations"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white dark:text-white">
                What are your expectations from FLC?
              </FormLabel>
              <FormControl className="bg-[#494949]">
                <Textarea placeholder="Answer" rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contribution"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white dark:text-white">
                How would you contribute to FLC?
              </FormLabel>
              <FormControl className="bg-[#494949]">
                <Textarea placeholder="Answer" rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentProof"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white dark:text-white">
                Payment Proof
              </FormLabel>
              <FormControl className="bg-[#494949]">
                <Textarea placeholder="Answer" rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button className="bg-yellow-300 hover:bg-yellow-300" type="submit">
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
