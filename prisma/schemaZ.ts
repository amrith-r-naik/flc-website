import { z } from "zod";

// export namespace Enum {
// export const QuestionType : {
//  MCQ: "MCQ",
//  TEXT: "TEXT",
// };
// export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]
// }
// type QuestionTypeT = Enum.QuestionType;

enum QuestionType {
  MCQ = "MCQ",
  TEXT = "TEXT",
}

const galleryZ = z.object({
  id: z.number(),
  title: z.string(),
  src: z.string(),
});

const blogImagesZ = z.object({
  id: z.number(),
  title: z.string(),
  src: z.string(),
});

const __baseQuizQuestionZ = z.object({
  id: z.number(),
  question: z.string().min(1, { message: "Question cannot be empty" }),
  image: z
    .string()
    .transform((string) => (string === "" ? undefined : string))
    .or(z.string().url())
    .optional(),
  points: z.number().positive(),
});

const quizQuestionZ = z.discriminatedUnion("questionType", [
  __baseQuizQuestionZ.extend({
    questionType: z.literal(QuestionType.MCQ),
    options: z
      .array(z.string())
      .refine((options) => options.length >= 2 && options.length <= 5, {
        message: "Only 2-5 options are allowed",
      }),
    answer: z.number().positive(),
  }),
  __baseQuizQuestionZ.extend({
    questionType: z.literal(QuestionType.TEXT),
    answer: z.string().min(1, { message: "Answer cannot be empty" }),
  }),
]);

const quizAnswerZ = z.object({
  questionId: z.number(),
  answer: z.number().positive().or(z.string()),
});

const __baseFeedbackQuestion = z.object({
  id: z.number(),
  question: z.string(),
  image: z.string().url().optional(),
});

const feedbackQuestionZ = __baseFeedbackQuestion
  .extend({
    questionType: z.literal(QuestionType.MCQ),
    options: z.array(z.string()).refine((options) => options.length > 4, {
      message: "Atleast 4 options are required",
    }),
    answer: z.number().positive(),
  })
  .or(
    __baseFeedbackQuestion.extend({
      questionType: z.literal(QuestionType.TEXT),
      answer: z.string(),
    }),
  );

const feedbackAnswerZ = z.object({
  questionId: z.number(),
  answer: z.number().positive().or(z.string()),
});

const facultyZ = z.object({
  name: z.string(),
  position: z.string(),
  image: z.string(),
  linkedin: z.string(),
  instagram: z.string(),
  github: z.string(),
});

const officeBearerZ = z.object({
  name: z.string(),
  position: z.string(),
  image: z.string(),
  linkedin: z.string().optional(),
  instagram: z.string().optional(),
  github: z.string().optional(),
  year: z.number().int(),
});

export {
  QuestionType,
  galleryZ,
  quizQuestionZ,
  quizAnswerZ,
  feedbackQuestionZ,
  feedbackAnswerZ,
  blogImagesZ,
  facultyZ,
  officeBearerZ,
};
