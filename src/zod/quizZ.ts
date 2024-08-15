import { QuizState } from "@prisma/client";
import { quizAnswerZ, quizQuestionZ } from "prisma/schemaZ";
import { z } from "zod";

const createQuizZ = z.object({
  title: z.string().min(3, { message: "Title must be atleast 3 characters" }),
  questions: z.array(quizQuestionZ),
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

const updateQuizZ = z.object({
  quizId: z.string(),
  title: z.string().optional(),
  questions: z.array(quizQuestionZ).optional(),
  timeLimit: z.number().positive().optional(),
  maxScore: z.number().positive().optional(),
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
  getQuizResponseByIdZ,
  updateQuizZ,
  updateQuizStateZ,
  deleteQuizZ,
};
