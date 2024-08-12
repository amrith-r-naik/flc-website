import { TRPCError } from "@trpc/server";

import { somethingWentWrong } from "~/utils/error";
import { editProfileZ } from "~/zod/userZ";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  editUser: protectedProcedure
    .input(editProfileZ)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { ...input },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      return { status: "success", user };
    }),

  getUser: protectedProcedure.query(async ({ ctx }) => {
    try {
      const user = await ctx.db.user.findUnique({
        where: { id: ctx.session.user.id },
        include: {
          Attendance: true,
          Certificate: true,
          Organiser: true,
          Branch: true,
          UserFeedback: true,
          UserLink: true,
          ActivityPoint: true,
          Team: true,
          QuizResponse: true,
        },
      });

      if (!user)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });

      return user;
    } catch (e) {
      console.log(e);
      somethingWentWrong(e);
    }
  }),
  getUserEvents: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      include: {
        Team: {
          include: {
            Event: true,
          },
        },
      },
    });

    if (!user) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User not found",
      });
    }
    const userEvents = user.Team.map((team) => team.Event);
    return userEvents;
  }),
});
