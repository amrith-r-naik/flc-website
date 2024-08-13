import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { z } from "zod";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";

import { api } from "~/utils/api";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const questionSchema = z.object({
  id: z.string(),
  text: z.string(),
  imgSrc: z.string().optional(),
  score: z.number(),
  options: z
    .array(
      z.object({
        id: z.string(),
        text: z.string(),
      }),
    )
    .nonempty(),
  correctOptionId: z.string().optional(),
});

const createQuizSchema = z.object({
  title: z.string(),
  timeLimit: z.number().min(0),
  state: z.enum(["DRAFT", "PUBLISHED"]).optional().default("DRAFT"),
  questions: z.array(questionSchema).nonempty(),
  maxScore: z.number().min(0),
});

const CreateQuizForm = () => {
  const { register, handleSubmit, control, getValues, setValue } = useForm({
    resolver: zodResolver(createQuizSchema),
    defaultValues: {
      title: "",
      timeLimit: 0,
      state: "DRAFT",
      questions: [],
      maxScore: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const createQuizMutation = api.quiz.createQuiz.useMutation();

  const onSubmit = async (data) => {
    try {
      await createQuizMutation.mutateAsync(data);
      alert("Quiz created successfully!");
    } catch (error) {
      console.error("Failed to create quiz:", error);
      alert("Failed to create quiz");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <div>
        <Label className="block">Title</Label>
        <Input {...register("title")} className="w-full rounded border p-2" />
      </div>
      <div>
        <Label className="block">Time Limit (minutes)</Label>
        <Input
          {...register("timeLimit", { valueAsNumber: true })}
          className="w-full rounded border p-2"
          type="number"
        />
      </div>
      <div>
        <Label className="block">State</Label>
        <select {...register("state")} className="w-full rounded border p-2">
          <option value="DRAFT">Draft</option>
          <option value="PUBLISHED">Published</option>
        </select>
      </div>
      <div>
        <Label className="block">Max Score</Label>
        <Input
          {...register("maxScore", { valueAsNumber: true })}
          className="w-full rounded border p-2"
          type="number"
        />
      </div>

      <div>
        <div className="m-2 flex flex-row justify-between border border-white p-2">
          <h3 className="subheading font-bold">Questions</h3>
          <Button
            type="button"
            onClick={() =>
              append({
                id: Math.random().toString(),
                text: "",
                imgSrc: "",
                score: 0,
                options: [{ id: Math.random().toString(), text: "" }],
                correctOptionId: "",
              })
            }
            className="rounded bg-green-500 px-4 py-2 text-white"
          >
            Add Question
          </Button>
        </div>

        <Accordion type="single" collapsible className="w-full border">
          {fields.map((field, index) => (
            <AccordionItem
              key={field.id}
              value={`item-${index}`}
              className="m-2 border border-white"
            >
              <AccordionTrigger className="flex flex-row items-center justify-between p-3">
                <span>Question {index + 1}</span>
                <Button
                  type="button"
                  onClick={() => remove(index)}
                  className="rounded bg-red-500 px-2 py-1 text-white"
                >
                  Remove
                </Button>
              </AccordionTrigger>

              <AccordionContent className="space-y-4 p-3">
                <div>
                  <Label className="block">Question Text</Label>
                  <Input
                    {...register(`questions.${index}.text`)}
                    className="w-full rounded border p-2"
                  />
                </div>
                <div>
                  <Label className="block">Image Source (optional)</Label>
                  <Input
                    {...register(`questions.${index}.imgSrc`)}
                    className="w-full rounded border p-2"
                  />
                </div>
                <div>
                  <Label className="block">Score</Label>
                  <Input
                    {...register(`questions.${index}.score`, {
                      valueAsNumber: true,
                    })}
                    className="w-full rounded border p-2"
                    type="number"
                  />
                </div>
                <div>
                  <Label className="block">Options (MCQ only)</Label>
                  <Controller
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
                  />
                </div>
                <div>
                  <Label className="block">
                    Correct Option ID (MCQ) / Correct Answer (Text)
                  </Label>
                  <Input
                    {...register(`questions.${index}.correctOptionId`)}
                    className="w-full rounded border p-2"
                    placeholder="ID of the correct option or the correct answer"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
        Create Quiz
      </Button>
    </form>
  );
};

export default CreateQuizForm;
