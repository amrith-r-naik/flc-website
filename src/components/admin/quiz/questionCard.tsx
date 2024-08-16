import { QuestionType, type quizQuestionZ } from "prisma/schemaZ";
import React, { type MouseEventHandler, type FunctionComponent } from "react";
import { LuTrash2 } from "react-icons/lu";
import { type z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { cn } from "~/lib/utils";

const QuestionCard: FunctionComponent<{
  question: z.infer<typeof quizQuestionZ>;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}> = ({ question, className, onDelete }) => {
  return (
    <Card className={cn(className, "w-full")}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Q. {question.question}</span>
          <Button variant="ghost" onClick={onDelete}>
            <LuTrash2 className="size-5 text-red-500" />
          </Button>
        </CardTitle>
        <CardDescription className="flex items-center justify-between">
          <span>QID - {question.id}</span>
          <span>{question.questionType}</span>
        </CardDescription>
      </CardHeader>
      {question.questionType === QuestionType.MCQ && (
        <CardContent>
          <h1 className="text-xl">Options</h1>
          <div className="grid grid-cols-2">
            {question.options.map((option, idx) => (
              <div key={idx}>
                {idx}. {option}
              </div>
            ))}
          </div>
        </CardContent>
      )}
      <CardFooter className="flex flex-col justify-between">
        <div>Correct Answer</div>
        <div>
          {question.questionType === QuestionType.MCQ && "Option "}
          {question.answer}
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
