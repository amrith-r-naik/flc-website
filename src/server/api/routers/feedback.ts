import { TRPCError } from "@trpc/server";

import {
  createFeedbackResponseZ,
  createFeedbackZ,
  deleteFeedbackZ,
  getFeedbackByIdZ,
  getFeedbackResponseByIdZ,
  updateFeedbackStateZ,
  updateFeedbackZ,
} from "~/zod/feedbackZ";

import {
  adminProcedure,
  createTRPCRouter,
  organiserProcedure,
  protectedProcedure,
} from "../trpc";

export const feedbackRouter = createTRPCRouter({
  // Create
  createFeedback: organiserProcedure
    .input(createFeedbackZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.feedback.create({
        data: {
          title: input.title,
          questions: input.questions,
          feedbackState: "DRAFT",
          Event: {
            connect: {
              id: input.eventId,
            },
          },
        },
      });
    }),

  createFeedbackResponse: protectedProcedure
    .input(createFeedbackResponseZ)
    .mutation(async ({ ctx, input }) => {
      const feedbackResponse = await ctx.db.feedbackResponse.findUnique({
        where: {
          userId_feedbackId: {
            userId: ctx.session.user.id,
            feedbackId: input.feedbackId,
          },
        },
        select: { id: true },
      });

      if (feedbackResponse)
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You have already submitted feedback for this event",
        });

      const feedback = await ctx.db.feedback.findUniqueOrThrow({
        where: { id: input.feedbackId },
        select: { feedbackState: true },
      });

      if (feedback.feedbackState !== "LIVE")
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You cannot submit this feedback",
        });

      await ctx.db.feedbackResponse.create({
        data: {
          answers: input.answers,
          Feedback: {
            connect: {
              id: input.feedbackId,
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
  getFeedbackById: protectedProcedure
    .input(getFeedbackByIdZ)
    .query(async ({ ctx, input }) => {
      return await ctx.db.feedback.findUniqueOrThrow({
        where: { id: input.feedbackId },
      });
    }),

  getFeedbackResponseByIdZ: organiserProcedure
    .input(getFeedbackResponseByIdZ)
    .query(async ({ ctx, input }) => {
      return await ctx.db.feedbackResponse.findUniqueOrThrow({
        where: { id: input.responseId },
      });
    }),

  getAllFeebacks: adminProcedure.query(async ({ ctx }) => {
    return await ctx.db.feedback.findMany();
  }),

  // Update
  updateFeedback: organiserProcedure
    .input(updateFeedbackZ)
    .mutation(async ({ ctx, input }) => {
      const feedback = await ctx.db.feedback.findUniqueOrThrow({
        where: { id: input.feedbackId },
        select: { feedbackState: true },
      });

      if (feedback.feedbackState !== "DRAFT")
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot update feedback unless it's draft",
        });

      await ctx.db.feedback.update({
        where: { id: input.feedbackId },
        data: {
          title: input.title,
          questions: input.questions,
          Event: input.eventId
            ? {
                connect: {
                  id: input.eventId,
                },
              }
            : undefined,
        },
      });
    }),

  updateFeedbackState: organiserProcedure
    .input(updateFeedbackStateZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.feedback.update({
        where: { id: input.feedbackId },
        data: { feedbackState: input.feedbackState },
      });
    }),

  // Delete
  deleteFeedback: adminProcedure
    .input(deleteFeedbackZ)
    .mutation(async ({ ctx, input }) => {
      const feedback = await ctx.db.feedback.findUniqueOrThrow({
        where: { id: input.feedbackId },
        select: { feedbackState: true },
      });

      if (feedback.feedbackState !== "DRAFT")
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot delete feedback unless it's in draft",
        });

      await ctx.db.feedback.delete({
        where: { id: input.feedbackId },
      });
    }),
});
