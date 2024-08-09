import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
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
import { Password } from "~/components/ui/password";

import { cn } from "~/lib/utils";
import { loginFormZ } from "~/zod/formSchemaZ";

interface Props {
  className?: string;
}

const LoginForm: FunctionComponent<Props> = ({ className }) => {
  const router = useRouter();

  const formSchema = loginFormZ;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    })
      .then((s) => {
        if (s?.ok) {
          toast.success("Logged in successfully");
          void router.push("/profile");
        }
      })
      .catch((e) => {
        console.error(e);
        toast.error("Failed to log in");
      });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(className, "space-y-8")}
      >
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

        <Button type="submit">Submit</Button>

        <div className="!mt-2 flex justify-between text-sm">
          <Link
            href="/send-reset-email"
            className="text-muted-foreground underline"
          >
            Forgot password
          </Link>
          <Link
            href="/send-verify-email"
            className="text-muted-foreground underline"
          >
            Verify email
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
