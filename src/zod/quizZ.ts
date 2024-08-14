import { QuizState } from "@prisma/client";
import { z } from "zod";

const questionSchema = z.object({
  id: z.string(),
  text: z.string(),
  imgSrc: z.string().optional(),
  score: z.number(),
  options: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    }),
  ),
  correctOptionId: z.string(),
});

const answerSchema = z.object({
  questionId: z.string(),
  selectedOptionId: z.string(),
});

const createQuizZ = z.object({
  title: z.string(),
  timeLimit: z.number().min(0),
  state: z.nativeEnum(QuizState).optional().default("DRAFT"),
  questions: z.array(questionSchema),
  maxScore: z.number().min(0),
});

const updateQuizZ = z.object({
  quizId: z.string(),
  title: z.string().optional(),
  timeLimit: z.number().min(0).optional(),
  state: z.nativeEnum(QuizState).optional(),
  questions: z.array(questionSchema).optional(),
  maxScore: z.number().min(0).optional(),
});

const deleteQuestionZ = z.object({
  quizId: z.string(),
  questionId: z.string(),
});

const getQuizByIdZ = z.object({
  quizId: z.string(),
});

const deleteQuizZ = z.object({
  quizId: z.string(),
});

const createQuizResponseZ = z.object({
  quizId: z.string(),
  userId: z.number(),
  answers: z.array(answerSchema),
});

const getQuizResponseByIdZ = z.object({
  responseId: z.string(),
  userId: z.number(),
});

export {
  createQuizZ,
  updateQuizZ,
  deleteQuestionZ,
  getQuizByIdZ,
  deleteQuizZ,
  createQuizResponseZ,
  getQuizResponseByIdZ,
};
