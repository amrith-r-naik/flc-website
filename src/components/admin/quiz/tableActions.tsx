import { zodResolver } from "@hookform/resolvers/zod";
import { QuizState } from "@prisma/client";
import { useRouter } from "next/router";
import React, { useState, type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { LuMoreHorizontal } from "react-icons/lu";
import { toast } from "sonner";
import { type z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { type QuizDataRow } from "~/components/admin/quiz/tableColumns";
import { api } from "~/utils/api";
import { updateQuizStateZ } from "~/zod/quizZ";

const Actions: FunctionComponent<{ quiz: QuizDataRow }> = ({ quiz }) => {
  const router = useRouter();

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const updateState = api.quiz.updateQuizState.useMutation();

  const formSchema = updateQuizStateZ;

  const updateStateForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quizId: quiz.id,
      quizState: quiz.quizState,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("Updating quiz state...");
    updateState.mutate(
      {
        quizId: values.quizId,
        quizState: values.quizState,
      },
      {
        onSuccess: () => {
          toast.dismiss(toastId);
          toast.success("Quiz state updated successfully");
          updateState.reset();
          setDialogOpen(false);
        },
        onError: ({ message }) => {
          toast.dismiss(toastId);
          toast.error(message);
          setDialogOpen(false);
        },
      },
    );
  };

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <LuMoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Button
            variant={"ghost"}
            className="w-full"
            onClick={async () => {
              await router.push(`/admin/quiz/edit/${quiz.id}`);
            }}
          >
            Update Quiz
          </Button>
        </DropdownMenuItem>
        <Dialog
          open={dialogOpen}
          onOpenChange={(open) => {
            setDialogOpen(open);
            updateStateForm.reset();
          }}
        >
          <DialogTrigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()} asChild>
              <Button variant={"ghost"} className="w-full">
                Update State
              </Button>
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent>
            <Form {...updateStateForm}>
              <form
                onSubmit={updateStateForm.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <DialogHeader>
                  <DialogTitle>Update Quiz State</DialogTitle>
                  <DialogDescription>
                    You can change data of the product here
                  </DialogDescription>
                </DialogHeader>

                <FormField
                  control={updateStateForm.control}
                  name="quizState"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a verified email to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.entries(QuizState).map(([key, value]) => (
                            <SelectItem key={key} value={value}>
                              {key}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit">Update</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
