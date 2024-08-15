import { zodResolver } from "@hookform/resolvers/zod";
import { QuestionType, quizQuestionZ } from "prisma/schemaZ";
import React, { useState, type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { LuPlus } from "react-icons/lu";
import { type z } from "zod";

import { Button } from "~/components/ui/button";
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
  addQuestion: (values: z.infer<typeof quizQuestionZ>) => void;
}> = ({ addQuestion }) => {
  const [open, setOpen] = useState(false);
  const [optionValue, setOptionValue] = useState("");

  const formSchema = quizQuestionZ;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      image: "", // TODO(Omkar): Add image
      questionType: QuestionType.MCQ,
      options: [],
      answer: 1,
      points: 5,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (values.questionType === QuestionType.MCQ)
      addQuestion({
        id: 0,
        question: values.question,
        image: values.image,
        questionType: QuestionType.MCQ,
        options: values.options,
        answer: values.answer,
        points: values.points,
      });
    else
      addQuestion({
        id: 0,
        question: values.question,
        image: values.image,
        questionType: QuestionType.TEXT,
        answer: values.answer,
        points: values.points,
      });
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
        <Button>
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
                    onValueChange={(value) =>
                      field.onChange(value as QuestionType)
                    }
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
                      <FormControl>
                        <>
                          <Input
                            value={optionValue}
                            onChange={(e) => setOptionValue(e.target.value)}
                            placeholder="Option value"
                          />
                          <Button
                            onClick={() => {
                              if (!optionValue)
                                form.setError("options", {
                                  message: "Option cannot be empty",
                                });
                              form.setValue("options", [
                                ...field.value,
                                optionValue,
                              ]);
                              setOptionValue("");
                            }}
                          >
                            Add
                          </Button>
                        </>
                      </FormControl>
                      {form.getValues("options").map((option, idx) => (
                        <div key={idx}>{option}</div>
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="answer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Answer</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} placeholder="Answer" />
                      </FormControl>
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
