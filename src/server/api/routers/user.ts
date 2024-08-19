import { TRPCError } from "@trpc/server";

import { somethingWentWrong } from "~/utils/error";
import { editUserZ, editUserImageZ, getUserZ } from "~/zod/userZ";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  editUser: protectedProcedure
    .input(editUserZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { ...input },
      });
    }),

  editUserImage: protectedProcedure
    .input(editUserImageZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { image: input.image },
      });
    }),

  getUser: protectedProcedure.input(getUserZ).query(async ({ ctx, input }) => {
    try {
      return await ctx.db.user.findUniqueOrThrow({
        where: { id: input?.userId ?? ctx.session.user.id },
        include: {
          Attendance: true,
          Certificate: true,
          Organiser: true,
          Branch: true,
          FeedbackResponse: true,
          UserLink: true,
          ActivityPoint: true,
          Team: {
            include: {
              Event: true,
            },
          },
          QuizResponse: true,
        },
      });
    } catch (e) {
      console.log(e);
      somethingWentWrong(e);
    }
  }),

  isAFLCMember: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
    });

    if (user) {
      return user.role === "MEMBER"
        ? {
            userId: user.id,
            status: true,
          }
        : {
            userId: user.id,
            status: false,
          };
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
