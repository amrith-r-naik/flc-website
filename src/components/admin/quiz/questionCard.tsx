import { QuestionType, type quizQuestionZ } from "prisma/schemaZ";
import React, { type FunctionComponent } from "react";
import { type z } from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const QuestionCard: FunctionComponent<{
  question: z.infer<typeof quizQuestionZ>;
}> = ({ question }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{question.question}</CardTitle>
        <CardDescription>ID - {question.id}</CardDescription>
      </CardHeader>
      {question.questionType === QuestionType.MCQ && (
        <CardContent>
          {question.options.map((option, idx) => (
            <div key={idx}>
              {idx}. {option}
            </div>
          ))}
        </CardContent>
      )}
      <CardFooter className="flex flex-col justify-between">
        <div>Correct Answer</div>
        <div>{question.answer}</div>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
