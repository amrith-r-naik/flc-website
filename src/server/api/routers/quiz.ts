import { type QuizState, type Prisma } from "@prisma/client";
import { adminProcedure, createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import {
  createQuizZ,
  updateQuizZ,
  deleteQuestionZ,
  getQuizByIdZ,
  deleteQuizZ,
  createQuizResponseZ,
  getQuizResponseByIdZ,
} from "~/zod/quizZ";

export const quizRouter = createTRPCRouter({
  createQuiz: adminProcedure
    .input(createQuizZ)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.quiz.create({
        data: {
          ...input,
        },
      });
    }),

  updateQuiz: adminProcedure
    .input(updateQuizZ)
    .mutation(async ({ ctx, input }) => {
      const quiz = await ctx.db.quiz.findUnique({
        where: { id: input.quizId },
      });

      ensureQuizInDraftState<typeof quiz>(quiz);

      return await ctx.db.quiz.update({
        where: { id: input.quizId },
        data: {
          ...input,
        },
      });
    }),

  deleteQuestion: adminProcedure
    .input(deleteQuestionZ)
    .mutation(async ({ ctx, input }) => {
      const quiz = await ctx.db.quiz.findUnique({
        where: { id: input.quizId },
      });

      ensureQuizExists<typeof quiz>(quiz);
      ensureQuizInDraftState<typeof quiz>(quiz);

      const questions = quiz!.questions as Prisma.JsonObject[];
      const updatedQuestions = questions.filter(
        (q) => q.id !== input.questionId,
      );

      await ctx.db.quiz.update({
        where: { id: input.quizId },
        data: { questions: updatedQuestions },
      });

      return { success: true, message: "Question deleted successfully" };
    }),

  deleteQuiz: adminProcedure
    .input(deleteQuizZ)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.quiz.delete({
        where: { id: input.quizId },
      });
    }),

  getQuizById: protectedProcedure
    .input(getQuizByIdZ)
    .query(async ({ ctx, input }) => {
      const quiz = await ctx.db.quiz.findFirst({
        where: {
          id: input.quizId,
          state: "PUBLISHED",
        },
      });

      ensureQuizExists(quiz);

      return quiz;
    }),

  adminGetQuizById: adminProcedure
    .input(getQuizByIdZ)
    .query(async ({ ctx, input }) => {
      const quiz = await ctx.db.quiz.findUnique({
        where: { id: input.quizId },
      });

      ensureQuizExists(quiz);

      return quiz;
    }),

  createQuizResponse: protectedProcedure
    .input(createQuizResponseZ)
    .mutation(async ({ ctx, input }) => {
      const existingResponse = await ctx.db.quizResponse.findFirst({
        where: {
          quizId: input.quizId,
          userId: input.userId,
        },
      });

      if (existingResponse) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Quiz response already exists. You cannot submit again.",
        });
      }

      const quiz = await ctx.db.quiz.findUnique({
        where: { id: input.quizId },
      });

      ensureQuizExists(quiz);

      const questions = quiz!.questions as Prisma.JsonObject[];
      const gradedAnswers = input.answers.map((answer) => {
        const question = questions.find((q) => q.id === answer.questionId);
        const scoreRewarded =
          question && question.correctOptionId === answer.selectedOptionId
            ? question.score
            : 0;

        return {
          ...answer,
          scoreRewarded: scoreRewarded as number,
        };
      });

      const totalScore = gradedAnswers.reduce((acc, answer) => {
        const score = answer.scoreRewarded;
        return acc + score;
      }, 0);

      return await ctx.db.quizResponse.create({
        data: {
          quizId: input.quizId,
          userId: input.userId,
          answers: gradedAnswers,
          totalScore,
        },
      });
    }),

  getQuizResponseById: protectedProcedure
    .input(getQuizResponseByIdZ)
    .query(async ({ ctx, input }) => {
      const quizResponse = await ctx.db.quizResponse.findFirst({
        where: {
          id: input.responseId,
          userId: input.userId,
        },
      });

      if (!quizResponse) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Quiz response not found",
        });
      }

      return quizResponse;
    }),

  getAllQuizzes: protectedProcedure.query(async ({ ctx }) => {
    const quizzes = await ctx.db.quiz.findMany({
      where: { state: "PUBLISHED" },
    });
    return quizzes;
  }),

  adminGetAllQuizzes: adminProcedure.query(async ({ ctx }) => {
    const quizzes = await ctx.db.quiz.findMany();
    return quizzes;
  }),
});

// Helper functions
function ensureQuizExists<T>(quiz: T) {
  if (!quiz) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Quiz not found",
    });
  }
}

function ensureQuizInDraftState<T extends { state: QuizState } | null>(
  quiz: T,
) {
  if (quiz && quiz.state !== "DRAFT") {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Cannot update quiz unless it's in draft",
    });
  }
}
