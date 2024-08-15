import { zodResolver } from "@hookform/resolvers/zod";
import React, { type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
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
import { Label } from "~/components/ui/label";
import { Slider } from "~/components/ui/slider";

import AddQuestion from "~/components/admin/quiz/addQuestion";
import QuestionCard from "~/components/admin/quiz/questionCard";
import { cn } from "~/lib/utils";
import { api } from "~/utils/api";
import { createQuizZ } from "~/zod/quizZ";

const CreateQuizForm: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  const createQuiz = api.quiz.createQuiz.useMutation();

  const formSchema = createQuizZ;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      timeLimit: 1,
      questions: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("Creating quiz...");
    createQuiz.mutate(
      {
        title: values.title,
        questions: values.questions,
        timeLimit: values.timeLimit,
      },
      {
        onSuccess: () => {
          toast.dismiss(toastId);
          toast.success("Quiz created successfully");
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
        <FormMessage className="flex justify-center text-4xl text-white">
          Create Quiz
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
              <FormLabel>Questions</FormLabel>
              <FormControl>
                <AddQuestion
                  addQuestion={(newQuestion) => {
                    form.setValue("questions", [...field.value, newQuestion]);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          {form.getValues("questions").map((question, idx) => (
            <QuestionCard key={idx} question={question} />
          ))}
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full border">
            {form.getValues("questions").map((field, index) => (
              <AccordionItem
                key={field.id}
                value={`item-${index}`}
                className="m-2 border border-white"
              >
                <AccordionTrigger className="flex flex-row items-center justify-between p-3">
                  <span>Question {index + 1}</span>
                  <Button
                    type="button"
                    onClick={
                      () => null
                      // remove(index)
                    }
                    className="rounded bg-red-500 px-2 py-1 text-white"
                  >
                    Remove
                  </Button>
                </AccordionTrigger>

                <AccordionContent className="space-y-4 p-3">
                  <div>
                    <Label className="block">Question Text</Label>
                    <Input className="w-full rounded border p-2" />
                  </div>
                  <div>
                    <Label className="block">Image Source (optional)</Label>
                    <Input className="w-full rounded border p-2" />
                  </div>
                  <div>
                    <Label className="block">Score</Label>
                    <Input
                      className="w-full rounded border p-2"
                      type="number"
                    />
                  </div>
                  <div>
                    <Label className="block">Options (MCQ only)</Label>
                    {/* <Controller
                        name={`questions.${index}.options`}
                        control={control}
                        render={({ field }) => (
                          <>
                            {field.value.map((option, optIndex) => (
                              <div key={optIndex} className="mb-2">
                                <Input
                                  {...register(
                                    `questions.${index}.options.${optIndex}.text`,
                                  )}
                                  className="w-full rounded border p-2"
                                  placeholder={`Option ${optIndex + 1}`}
                                />
                              </div>
                            ))}
                            <Button
                              type="button"
                              onClick={() =>
                                setValue(`questions.${index}.options`, [
                                  ...field.value,
                                  { id: Math.random().toString(), text: "" },
                                ])
                              }
                              className="rounded bg-blue-500 px-4 py-2 text-white"
                            >
                              Add Option
                            </Button>
                          </>
                        )}
                      /> */}
                  </div>
                  <div>
                    <Label className="block">
                      Correct Option ID (MCQ) / Correct Answer (Text)
                    </Label>
                    <Input
                      // {...register(`questions.${index}.correctOptionId`)}
                      className="w-full rounded border p-2"
                      placeholder="ID of the correct option or the correct answer"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Create Quiz
        </Button>
      </form>
    </Form>
  );
};

export default CreateQuizForm;
