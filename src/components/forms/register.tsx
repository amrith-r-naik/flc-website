import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import React, { type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";

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

import { cn } from "~/lib/utils";
import { api } from "~/utils/api";
import { RegisterFormZ } from "~/zod/formSchemaZ";

import { DatePicker } from "../ui/date-picker";
import { InputOTP, InputOTPSlot } from "../ui/input-otp";

// Assuming you have a schema for the register form

interface Props {
  className?: string;
}

const RegisterForm: FunctionComponent<Props> = ({ className }) => {
  const formSchema = RegisterFormZ;
  const { data: branches } = api.branch.getAllBranch.useQuery();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      branchId: "",
      year: new Date(),
      reasonToJoin: "",
      expectations: "",
      contribution: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Handle registration logic here, e.g., calling an API
    toast.success("Registered successfully!");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(className, "space-y-4")}
      >
        <FormMessage className="flex justify-center text-4xl text-white/90">
          Signup
        </FormMessage>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
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
                <Input placeholder="Email" {...field} />
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
                <InputOTP maxLength={10} {...field}>
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
          name="branchId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Branch</FormLabel>
              <FormControl>
                {/* TODO(Omkar): Possibly replace with a combobox */}
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Branch" />
                  </SelectTrigger>
                  <SelectContent>
                    {branches?.map((branch, idx) => (
                      <SelectItem key={idx} value={branch.id}>
                        {branch.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
              <FormLabel>Year</FormLabel>
              <FormControl>
                <DatePicker date={field.value} setDate={field.onChange} />
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
                <Input as="textarea" placeholder="Answer" rows={3} {...field} />
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
                <Input as="textarea" placeholder="Answer" rows={3} {...field} />
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
                <Input as="textarea" placeholder="Answer" rows={3} {...field} />
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
