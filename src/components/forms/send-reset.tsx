import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Button } from '../ui/button'
import { cn } from '~/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPasswordFormZ, verifyEmailFormZ } from '~/zod/formSchemaZ'
import { z } from 'zod'
import { api } from '~/utils/api'
import { toast } from 'sonner'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form';

const SendResetForm = ({ className }:{className? :string}) => {
  const sendPasswordResetEmail = api.auth.sendPasswordResetEmail.useMutation()
  const formSchema = resetPasswordFormZ;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    sendPasswordResetEmail.mutate(
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
  )
}

export default SendResetForm