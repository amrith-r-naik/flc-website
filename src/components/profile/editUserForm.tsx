import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import React, { type ReactNode, type FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";

import { Button } from "~/components/ui/button";
import {
  DialogDrawer,
  DialogDrawerContent,
  DialogDrawerFooter,
  DialogDrawerHeader,
  DialogDrawerTitle,
  DialogDrawerTrigger,
} from "~/components/ui/custom/dialog-drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { InputOTP, InputOTPSlot } from "~/components/ui/input-otp";
import { Textarea } from "~/components/ui/textarea";

import { useRefetchContext } from "~/context/refetchContext";
import { cn } from "~/lib/utils";
import { type User, useUser } from "~/store";
import { api } from "~/utils/api";
import { editUserZ } from "~/zod/userZ";

const EditUserForm: FunctionComponent<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const { user } = useUser();
  if (!user) return null;
  return (
    <InnerEditUserForm user={user} className={className}>
      {children}
    </InnerEditUserForm>
  );
};

const InnerEditUserForm: FunctionComponent<{
  children: ReactNode;
  className?: string;
  user: User;
}> = ({ children, className, user }) => {
  const { executeRefetch } = useRefetchContext("user");

  const { data: session } = useSession();

  const [open, setOpen] = useState(false);

  const editUser = api.user.editUser.useMutation();

  const formSchema = editUserZ;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: user.id,
      name: user.name,
      email: user.email,
      bio: user.bio ?? "",
      phone: user.phone,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.loading("Updating profile...");
    editUser.mutate(
      {
        id: values.id,
        name: values.name,
        email: values.email,
        bio: values.bio,
        phone: values.phone,
      },
      {
        onSuccess: () => {
          toast.dismiss();
          toast.success("Profile updated successfully");
          executeRefetch();
          setOpen(false);
        },
        onError: (error) => {
          toast.dismiss();
          toast.error(error.message);
        },
      },
    );
  };

  if (!session) return null;

  return (
    <DialogDrawer
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        form.reset();
      }}
    >
      <DialogDrawerTrigger asChild>
        <button
          // variant={"ghost"}
          className={cn(className, "relative inline p-2")}
        >
          {children}
        </button>
      </DialogDrawerTrigger>
      <DialogDrawerContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 px-4 md:px-0"
          >
            <DialogDrawerHeader>
              <DialogDrawerTitle>Edit User</DialogDrawerTitle>
            </DialogDrawerHeader>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Name" />
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
                    <Input {...field} placeholder="Email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Bio" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={10} {...field}>
                      {Array.from({ length: 10 }).map((_, idx) => (
                        <InputOTPSlot key={idx} index={idx} />
                      ))}
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogDrawerFooter>
              <Button type="submit">Edit</Button>
            </DialogDrawerFooter>
          </form>
        </Form>
      </DialogDrawerContent>
    </DialogDrawer>
  );
};

export default EditUserForm;
