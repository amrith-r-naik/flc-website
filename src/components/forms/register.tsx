import { zodResolver } from "@hookform/resolvers/zod";
import React, { type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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

interface Props {
  className?: string;
}

const RegisterForm: FunctionComponent<Props> = ({ className }) => {
  const { data: user } = api.user.getMe.useQuery();

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
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
      branch: user?.Branch.name ?? "",
      year: user?.year ?? "",
      reasonToJoin: "",
      expectations: "",
      contribution: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("Registering to FLC...");
    register.mutate(
      {
        reasonToJoin: values.reasonToJoin,
        expectations: values.expectations,
        contribution: values.contribution,
      },
      {
        onSuccess: () => {
          toast.dismiss(toastId);
          toast.success("Registered to FLC successfully!");
        },
        onError: ({ message }) => {
          toast.dismiss(toastId);
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
              <FormLabel>Name</FormLabel>
              <FormControl>
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
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
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
            <FormItem className="rounded-lg bg-black p-4">
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <InputOTP maxLength={10} {...field} disabled>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                  <InputOTPSlot index={8} />
                  <InputOTPSlot index={9} />
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="branch"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Branch</FormLabel>
              <FormControl>
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
              <FormLabel>Graduation Year</FormLabel>
              <FormControl>
                <Input placeholder="Graduation Year" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reasonToJoin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why do you want to join FLC?</FormLabel>
              <FormControl>
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
              <FormLabel>What are your expectations from FLC?</FormLabel>
              <FormControl>
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
              <FormLabel>How would you contribute to FLC?</FormLabel>
              <FormControl>
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
