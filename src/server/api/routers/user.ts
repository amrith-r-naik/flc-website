import { TRPCError } from "@trpc/server";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

import { somethingWentWrong } from "~/utils/error";
import {
  editUserZ,
  editUserImageZ,
  getUserZ,
  addUserLinkZ,
  deleteUserLinkZ,
} from "~/zod/userZ";

const userRouter = createTRPCRouter({
  editUser: protectedProcedure
    .input(editUserZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: {
          name: input.name,
          email: input.email,
          bio: input.bio,
          phone: input.phone,
        },
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

  addUserLink: protectedProcedure
    .input(addUserLinkZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.userLink.create({
        data: {
          linkName: input.linkName,
          url: input.url,
          User: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),

  removeUserLink: protectedProcedure
    .input(deleteUserLinkZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.userLink.delete({
        where: { id: input.linkId },
      });
    }),

  getLeaderboard: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.user.findMany({
      select: {
        name: true,
        email: true,
        image: true,
        totalActivityPoints: true,
        _count: {
          select: {
            Team: {
              where: {
                hasAttended: true,
              },
            },
          },
        },
      },
      orderBy: {
        totalActivityPoints: "desc",
      },
    });
  }),

  getUser: protectedProcedure.input(getUserZ).query(async ({ ctx, input }) => {
    try {
      return await ctx.db.user.findUniqueOrThrow({
        where: {
          id: input?.userId ?? ctx.session.user.id,
        },
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
          Payment: true,
        },
      });
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

export default userRouter;
