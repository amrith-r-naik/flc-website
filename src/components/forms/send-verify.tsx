import { zodResolver } from "@hookform/resolvers/zod";
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
import { verifyEmailFormZ } from "~/zod/formSchemaZ";

interface Props {
  className?: string;
}

const SendVerifyEmailForm: FunctionComponent<Props> = ({ className }) => {
  const sendVerificationEmail = api.auth.sendVerifyEmail.useMutation();

  const formSchema = verifyEmailFormZ;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    sendVerificationEmail.mutate(
      {
        email: values.email,
      },
      {
        onSuccess: () => {
          toast.success("Verification email sent successfully");
          toast.info("Please check your email");
        },
        onError: ({ message }) => {
          toast.error(message);
        },
      },
    );
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

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default SendVerifyEmailForm;
