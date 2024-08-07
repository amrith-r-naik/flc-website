import { AnswerType, FeedbackTemplateState } from "@prisma/client";
import { z } from "zod";

const createFeedbackTemplateZ = z.object({
  eventId: z.number(),
  questions: z.array(z.string()),
  answers: z.array(z.string()),
  answerstype: z.array(z.nativeEnum(AnswerType)),
});

const editFeedbackTemplateZ = z.object({
  id: z.string(),
  eventId: z.number(),
  questions: z.array(z.string()),
  answers: z.array(z.string()),
  answerstype: z.array(z.nativeEnum(AnswerType)),
});

const deleteFeedbackTemplateZ = z.object({
  templateId: z.string(),
  eventId: z.number(),
});

const toggleTemplateStateZ = z.object({
  templateId: z.string(),
  eventId: z.number(),
  state: z.nativeEnum(FeedbackTemplateState),
});

const submitFeedbackZ = z.object({
  templateId: z.string(),
  answers: z.array(z.string()),
  userId: z.number(),
});

const getFeedbackTemplateZ = z.object({
  templateId: z.string(),
});

const responseForEventZ = z.object({
  templateId: z.string(),
  eventId: z.number(),
});

export {
  createFeedbackTemplateZ,
  editFeedbackTemplateZ,
  deleteFeedbackTemplateZ,
  toggleTemplateStateZ,
  submitFeedbackZ,
  responseForEventZ,
  getFeedbackTemplateZ,
};
