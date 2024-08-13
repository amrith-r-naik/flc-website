import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

import { activityPointsRouter } from "./routers/activitypoints";
import { attendanceRouter } from "./routers/attendance";
import { authRouter } from "./routers/auth";
import { branchRouter } from "./routers/branch";
import { certificateRouter } from "./routers/certificate";
import { eventRouter } from "./routers/event";
import { feedbackRouter } from "./routers/feedback";
import { organiserRouter } from "./routers/organiser";
import { payment } from "./routers/payment";
import { quizRouter } from "./routers/quiz";
import { teamRouter } from "./routers/team";
import { userRouter } from "./routers/user";
import { userLinkRouter } from "./routers/userLink";
import { winnerRouter } from "./routers/winner";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  event: eventRouter,
  feedback: feedbackRouter,
  attendance: attendanceRouter,
  team: teamRouter,
  auth: authRouter,
  winner: winnerRouter,
  certificate: certificateRouter,
  activitypoints: activityPointsRouter,
  organiser: organiserRouter,
  branch: branchRouter,
  userLink: userLinkRouter,
  payment: payment,
  quiz: quizRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
