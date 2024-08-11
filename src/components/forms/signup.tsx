import { zodResolver } from "@hookform/resolvers/zod";
import React, { type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";

import { Button } from "~/components/ui/button";
import { DatePicker } from "~/components/ui/date-picker";
import {
  FormField,
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { InputOTP, InputOTPSlot } from "~/components/ui/input-otp";
import { Password } from "~/components/ui/password";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { cn } from "~/lib/utils";
import { api } from "~/utils/api";
import { signUpFormZ } from "~/zod/formSchemaZ";

interface Props {
  className?: string;
}

const SignUpForm: FunctionComponent<Props> = ({ className }) => {
  const { data: branches } = api.branch.getAllBranch.useQuery();

  const signUp = api.auth.signUp.useMutation();

  const formSchema = signUpFormZ;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      branchId: "",
      // TODO(omkar): what exactly is date
      year: new Date(),
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    signUp.mutate(
      {
        branchId: values.branchId,
        confirmPassword: values.confirmPassword,
        email: values.email,
        name: values.name,
        password: values.password,
        phone: values.phone,
        // TODO(Omkar): again what is this date
        year: values.year.toISOString(),
      },
      {
        onSuccess: () => {
          toast.success("Sign Up Successful");
        },
        onError: (error) => {
          toast.error(error.message);
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
        <FormMessage className="flex justify-center text-3xl text-white/90">
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
                  <InputOTPSlot index={0} className="bg-white/15" />
                  <InputOTPSlot index={1} className="bg-white/15" />
                  <InputOTPSlot index={2} className="bg-white/15" />
                  <InputOTPSlot index={3} className="bg-white/15" />
                  <InputOTPSlot index={4} className="bg-white/15" />
                  <InputOTPSlot index={5} className="bg-white/15" />
                  <InputOTPSlot index={6} className="bg-white/15" />
                  <InputOTPSlot index={7} className="bg-white/15" />
                  <InputOTPSlot index={8} className="bg-white/15" />
                  <InputOTPSlot index={9} className="bg-white/15" />
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Password placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Password placeholder="Confirm Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button className="bg-yellow-300 hover:bg-yellow-300" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
