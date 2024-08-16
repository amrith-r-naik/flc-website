import { zodResolver } from "@hookform/resolvers/zod";
import { type inferProcedureOutput } from "@trpc/server";
import React, { type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";

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
import { Slider } from "~/components/ui/slider";

import AddQuestion from "~/components/admin/quiz/addQuestion";
import QuestionCard from "~/components/admin/quiz/questionCard";
import { api } from "~/utils/api";
import { updateQuizZ } from "~/zod/quizZ";

const UpdateQuiz: FunctionComponent<{
  quiz: inferProcedureOutput<AppRouter["quiz"]["getQuizById"]>;
}> = ({ quiz }) => {
  const updateQuiz = api.quiz.updateQuiz.useMutation();

  const formSchema = updateQuizZ;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quizId: quiz.id,
      title: quiz.title,
      timeLimit: quiz.timeLimit,
      questions: quiz.questions,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("Updating quiz...");
    updateQuiz.mutate(
      {
        quizId: values.quizId,
        title: values.title,
        questions: values.questions,
        timeLimit: values.timeLimit,
      },
      {
        onSuccess: () => {
          toast.dismiss(toastId);
          toast.success("Quiz updated successfully");
          form.reset();
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
      <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-4"}>
        <FormMessage className="flex justify-center text-4xl text-white">
          Update Quiz
        </FormMessage>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl className="bg-[#494949]">
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timeLimit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time Limit ({field.value} minutes)</FormLabel>
              <FormControl>
                <Slider
                  min={1}
                  max={30}
                  step={1}
                  value={[field.value]}
                  onValueChange={(e) => field.onChange(e[0])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="questions"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Questions ({field.value.length})</FormLabel>
                <FormControl>
                  <AddQuestion
                    className="ml-auto"
                    questionId={field.value.length}
                    addQuestion={(newQuestion) => {
                      form.setValue("questions", [...field.value, newQuestion]);
                    }}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {form.getValues("questions").map((question, idx) => (
            <QuestionCard
              key={idx}
              question={question}
              onDelete={() => {
                form.setValue(
                  "questions",
                  form.getValues("questions").filter((_, i) => i !== idx),
                );
              }}
            />
          ))}
        </div>

        <Button type="submit">Update Quiz</Button>
      </form>
    </Form>
  );
};

export default UpdateQuiz;
