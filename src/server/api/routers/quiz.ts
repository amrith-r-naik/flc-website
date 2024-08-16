import { TRPCError } from "@trpc/server";
import { QuestionType, quizAnswerZ, quizQuestionZ } from "prisma/schemaZ";
import { z } from "zod";

import {
  createQuizZ,
  updateQuizZ,
  getQuizByIdZ,
  deleteQuizZ,
  createQuizResponseZ,
  getQuizResponseByIdZ,
  updateQuizStateZ,
  getInfiniteQuizByMeZ,
} from "~/zod/quizZ";

import {
  adminProcedure,
  createTRPCRouter,
  organiserProcedure,
  protectedProcedure,
} from "../trpc";

export const quizRouter = createTRPCRouter({
  // Create
  createQuiz: organiserProcedure
    .input(createQuizZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.quiz.create({
        data: {
          title: input.title,
          questions: input.questions,
          timeLimit: input.timeLimit,
          maxPoints: input.questions.reduce(
            (acc, question) => acc + question.points,
            0,
          ),
          quizState: "DRAFT",
        },
      });
    }),

  createQuizResponse: protectedProcedure
    .input(createQuizResponseZ)
    .mutation(async ({ ctx, input }) => {
      const quizResponse = await ctx.db.quizResponse.findUnique({
        where: {
          userId_quizId: {
            userId: ctx.session.user.id,
            quizId: input.quizId,
          },
        },
        select: { id: true },
      });

      if (quizResponse)
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You have already attempted this quiz",
        });

      const quiz = await ctx.db.quiz.findUniqueOrThrow({
        where: { id: input.quizId },
        select: { quizState: true, questions: true },
      });

      if (quiz.quizState !== "LIVE")
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You cannot attempt this quiz",
        });

      const { success: parseSuccess, data: questions } = z
        .array(quizQuestionZ)
        .safeParse(quiz.questions);

      if (!parseSuccess)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Invalid quiz questions",
        });

      const score = input.answers.reduce((acc, answer) => {
        const question = questions.find((q) => q.id === answer.questionId);
        if (!question) return acc;
        if (question.questionType === QuestionType.MCQ) {
          if (typeof answer.answer !== "number")
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: `Invalid answer type! Question no. ${answer.questionId}`,
            });
          if (question.answer === answer.answer) acc += question.points;
        } else if (question.questionType === QuestionType.TEXT) {
          if (typeof answer.answer !== "string")
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: `Invalid answer type! Question no. ${answer.questionId}`,
            });
          if (question.answer === answer.answer) acc += question.points;
        }
        return acc;
      }, 0);

      await ctx.db.quizResponse.create({
        data: {
          score: score,
          answers: input.answers,
          Quiz: {
            connect: {
              id: input.quizId,
            },
          },
          User: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),

  // Retrieve
  getQuizById: protectedProcedure
    .input(getQuizByIdZ)
    .query(async ({ ctx, input }) => {
      const unparsedQuiz = await ctx.db.quiz.findUniqueOrThrow({
        where: { id: input.quizId },
      });

      const { data: parsedQuestions, success } = z
        .array(quizQuestionZ)
        .safeParse(unparsedQuiz.questions);

      if (!success)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Invalid quiz questions",
        });

      return {
        ...unparsedQuiz,
        questions: parsedQuestions,
      };
    }),

  getQuizResponseById: organiserProcedure
    .input(getQuizResponseByIdZ)
    .query(async ({ ctx, input }) => {
      const unparsedQuizResponse = await ctx.db.quizResponse.findUniqueOrThrow({
        where: { id: input.responseId },
      });

      const { data: parsedAnswers, success } = z
        .array(quizAnswerZ)
        .safeParse(unparsedQuizResponse.answers);

      if (!success)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Invalid quiz answers",
        });

      return {
        ...unparsedQuizResponse,
        answers: parsedAnswers,
      };
    }),

  getInfiniteQuizByMe: organiserProcedure
    .input(getInfiniteQuizByMeZ)
    .query(async ({ ctx, input }) => {
      const unparsedQuizes = await ctx.db.quiz.findMany({
        where: {},
        orderBy: {
          createdAt: "desc",
        },
        take: input.take + 1,
        cursor: input.cursor ? { id: input.cursor } : undefined,
      });

      let nextCursor: typeof input.cursor | undefined = undefined;

      const quizzes = unparsedQuizes
        .map((quiz) => {
          const { data: parsedQuestions, success } = z
            .array(quizQuestionZ)
            .safeParse(quiz.questions);
          if (success)
            return {
              ...quiz,
              questions: parsedQuestions,
            };
        })
        .filter((quiz) => typeof quiz !== "undefined");

      if (quizzes.length > input.take) {
        const nextQuiz = quizzes.pop();
        nextCursor = nextQuiz?.id;
      }

      return {
        quizzes,
        nextCursor,
      };
    }),

  // Update
  updateQuiz: organiserProcedure
    .input(updateQuizZ)
    .mutation(async ({ ctx, input }) => {
      const quiz = await ctx.db.quiz.findUniqueOrThrow({
        where: { id: input.quizId },
        select: { quizState: true },
      });

      if (quiz.quizState !== "DRAFT")
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot update quiz unless it's draft",
        });

      await ctx.db.quiz.update({
        where: { id: input.quizId },
        data: {
          title: input.title,
          questions: input.questions,
          timeLimit: input.timeLimit,
          maxPoints: input.questions.reduce(
            (acc, question) => acc + question.points,
            0,
          ),
        },
      });
    }),

  updateQuizState: organiserProcedure
    .input(updateQuizStateZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.quiz.update({
        where: { id: input.quizId },
        data: { quizState: input.quizState },
      });
    }),

  // Delete
  deleteQuiz: adminProcedure
    .input(deleteQuizZ)
    .mutation(async ({ ctx, input }) => {
      const quiz = await ctx.db.quiz.findUniqueOrThrow({
        where: { id: input.quizId },
        select: { quizState: true },
      });

      if (quiz.quizState !== "DRAFT")
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot delete quiz unless it's in draft",
        });

      await ctx.db.quiz.delete({
        where: { id: input.quizId },
      });
    }),
});
