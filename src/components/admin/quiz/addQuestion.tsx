import { zodResolver } from "@hookform/resolvers/zod";
import { QuestionType, quizQuestionZ } from "prisma/schemaZ";
import React, { useState, type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { LuCheck, LuMinus, LuPlus, LuTrash2 } from "react-icons/lu";
import { type z } from "zod";

import { Button } from "~/components/ui/button";
import { InputButton } from "~/components/ui/custom/input-button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Slider } from "~/components/ui/slider";

const AddQuestion: FunctionComponent<{
  questionId: number;
  addQuestion: (values: z.infer<typeof quizQuestionZ>) => void;
  className?: string;
}> = ({ questionId, addQuestion, className }) => {
  const [open, setOpen] = useState(false);
  const [optionValue, setOptionValue] = useState("");

  const formSchema = quizQuestionZ;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: questionId,
      question: "",
      image: "", // TODO(Omkar): Add image
      questionType: QuestionType.MCQ,
      options: [],
      answer: 0,
      points: 5,
    },
  });

  const onOptionAdd: (values: string[]) => void = (values) => {
    if (optionValue.length === 0) {
      form.setError("options", {
        message: "Option cannot be empty",
      });
      return;
    }
    form.setValue("options", [...values, optionValue]);
    setOptionValue("");
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (values.questionType === QuestionType.MCQ)
      addQuestion({
        id: values.id,
        question: values.question,
        image: values.image,
        questionType: QuestionType.MCQ,
        options: values.options,
        answer: values.answer,
        points: values.points,
      });
    else
      addQuestion({
        id: values.id,
        question: values.question,
        image: values.image,
        questionType: QuestionType.TEXT,
        answer: values.answer,
        points: values.points,
      });
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        form.reset();
      }}
    >
      <DialogTrigger asChild>
        <Button className={className}>
          <LuPlus className="mr-2 size-5" />
          Question
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>Add Question</DialogTitle>
            </DialogHeader>

            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Question" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="questionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      if (
                        QuestionType[value as keyof typeof QuestionType] ===
                        QuestionType.TEXT
                      )
                        form.setValue("answer", "");
                      field.onChange(value);
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Question Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(QuestionType).map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="points"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Point ({field.value})</FormLabel>
                  <FormControl>
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      value={[field.value]}
                      onValueChange={(e) => field.onChange(e[0])}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* TODO(Omkar): Add image */}
            {form.getValues("questionType") === QuestionType.MCQ ? (
              <>
                <FormField
                  control={form.control}
                  name="options"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Options</FormLabel>
                      {form.getValues("options").map((option, idx) => {
                        return (
                          <InputButton
                            key={idx}
                            value={`${idx + 1}. ${option}`}
                            className={
                              idx === +form.getValues("answer")
                                ? "outline-none ring-2 ring-ring ring-offset-2 disabled:opacity-60"
                                : ""
                            }
                            disabled
                          >
                            <Button
                              variant={"ghost"}
                              className="px-2"
                              onClick={() => form.setValue("answer", idx)}
                            >
                              {idx === +form.getValues("answer") ? (
                                <LuMinus className="size-5" />
                              ) : (
                                <LuCheck className="size-5" />
                              )}
                            </Button>
                            <Button
                              variant={"ghost"}
                              className="px-2"
                              onClick={() => {
                                form.setValue(
                                  "options",
                                  field.value.filter((_, i) => i !== idx),
                                );
                                if (form.getValues("answer") === idx)
                                  form.reset({ answer: 0 });
                              }}
                            >
                              <LuTrash2 className="size-5" />
                            </Button>
                          </InputButton>
                        );
                      })}
                      <FormControl>
                        {form.getValues("options").length < 5 && (
                          <InputButton
                            value={optionValue}
                            placeholder="Option Value"
                            onChange={(e) => setOptionValue(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                onOptionAdd(field.value);
                              }
                            }}
                          >
                            <Button
                              variant={"ghost"}
                              className="px-2"
                              onClick={() => onOptionAdd(field.value)}
                              onBlur={() => onOptionAdd(field.value)}
                            >
                              <LuPlus className="size-5" />
                            </Button>
                          </InputButton>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="answer"
                  render={() => (
                    <FormItem>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            ) : (
              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Answer</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Answer" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <DialogFooter>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuestion;
