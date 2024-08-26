import activityPointsRouter from "~/server/api/routers/activityPoints";
import attendanceRouter from "~/server/api/routers/attendance";
import authRouter from "~/server/api/routers/auth";
import blogRouter from "~/server/api/routers/blog";
import branchRouter from "~/server/api/routers/branch";
import certificateRouter from "~/server/api/routers/certificate";
import coreRouter from "~/server/api/routers/core";
import eventRouter from "~/server/api/routers/event";
import feedbackRouter from "~/server/api/routers/feedback";
import organiserRouter from "~/server/api/routers/organiser";
import paymentRouter from "~/server/api/routers/payment";
import quizRouter from "~/server/api/routers/quiz";
import teamRouter from "~/server/api/routers/team";
import userRouter from "~/server/api/routers/user";
import winnerRouter from "~/server/api/routers/winner";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  activitypoints: activityPointsRouter,
  attendance: attendanceRouter,
  auth: authRouter,
  blog: blogRouter,
  branch: branchRouter,
  certificate: certificateRouter,
  core: coreRouter,
  event: eventRouter,
  feedback: feedbackRouter,
  organiser: organiserRouter,
  payment: paymentRouter,
  quiz: quizRouter,
  team: teamRouter,
  user: userRouter,
  winner: winnerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 * ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
