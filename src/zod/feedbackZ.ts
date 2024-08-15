import { FeedbackState } from "@prisma/client";
import { feedbackAnswerZ, feedbackQuestionZ } from "prisma/schemaZ";
import { z } from "zod";

const createFeedbackZ = z.object({
  eventId: z.number(),
  title: z.string(),
  questions: z.array(feedbackQuestionZ),
});

const createFeedbackResponseZ = z.object({
  feedbackId: z.string(),
  answers: z.array(feedbackAnswerZ),
});

const getFeedbackByIdZ = z.object({
  feedbackId: z.string(),
});

const getFeedbackResponseByIdZ = z.object({
  responseId: z.string(),
});

const updateFeedbackZ = z.object({
  feedbackId: z.string(),
  eventId: z.number().optional(),
  title: z.string().optional(),
  questions: z.array(feedbackQuestionZ).optional(),
});

const updateFeedbackStateZ = z.object({
  feedbackId: z.string(),
  feedbackState: z.nativeEnum(FeedbackState),
});

const deleteFeedbackZ = z.object({
  feedbackId: z.string(),
});

export {
  createFeedbackZ,
  createFeedbackResponseZ,
  getFeedbackByIdZ,
  getFeedbackResponseByIdZ,
  updateFeedbackStateZ,
  updateFeedbackZ,
  deleteFeedbackZ,
};
