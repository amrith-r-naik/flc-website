import { QuizState } from "@prisma/client";
import { quizAnswerZ, quizQuestionZ } from "prisma/schemaZ";
import { z } from "zod";

const createQuizZ = z.object({
  title: z.string().min(3, { message: "Title must be atleast 3 characters" }),
  questions: z
    .array(quizQuestionZ)
    .min(1, { message: "Atleast one question is required" }),
  timeLimit: z.number().positive(),
});

const createQuizResponseZ = z.object({
  quizId: z.string(),
  answers: z.array(quizAnswerZ),
});

const getQuizByIdZ = z.object({
  quizId: z.string(),
});

const getQuizResponseByIdZ = z.object({
  responseId: z.string(),
});

const getInfiniteQuizByMeZ = z.object({
  cursor: z.string().nullish(),
  take: z.number(),
});

const updateQuizZ = z.object({
  quizId: z.string().min(1, { message: "Please select a valid quiz" }),
  title: z.string().min(3, { message: "Title must be atleast 3 characters" }),
  questions: z
    .array(quizQuestionZ)
    .min(1, { message: "Atleast one question is required" }),
  timeLimit: z.number().positive(),
});

const updateQuizStateZ = z.object({
  quizId: z.string(),
  quizState: z.nativeEnum(QuizState),
});
const deleteQuizZ = z.object({
  quizId: z.string(),
});

export {
  createQuizZ,
  createQuizResponseZ,
  getQuizByIdZ,
  getInfiniteQuizByMeZ,
  getQuizResponseByIdZ,
  updateQuizZ,
  updateQuizStateZ,
  deleteQuizZ,
};
