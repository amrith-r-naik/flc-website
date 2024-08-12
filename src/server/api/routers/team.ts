import { TRPCError } from "@trpc/server";

import {
  confirmTeamZ,
  createTeamZ,
  deleteTeamZ,
  getTeamByIdZ,
  joinTeamZ,
  leaveTeamZ,
} from "~/zod/teamZ";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const teamRouter = createTRPCRouter({
  createTeam: protectedProcedure
    .input(createTeamZ)
    .mutation(async ({ ctx, input }) => {
      const inTeam = await ctx.db.team.findFirst({
        where: {
          AND: [
            {
              eventId: input.eventId,
            },
            {
              Members: {
                some: {
                  id: ctx.session.user.id,
                },
              },
            },
          ],
        },
        select: {},
      });

      if (inTeam)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Already in a team for this event",
        });

      await ctx.db.team.create({
        data: {
          name: input.teamName,
          Event: {
            connect: {
              id: input.eventId,
            },
          },
          Members: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),

  jointeam: protectedProcedure
    .input(joinTeamZ)
    .mutation(async ({ ctx, input }) => {
      const inTeam = await ctx.db.team.findFirst({
        where: {
          AND: [
            {
              eventId: input.eventId,
            },
            {
              Members: {
                some: {
                  id: ctx.session.user.id,
                },
              },
            },
          ],
        },
        select: {},
      });

      if (inTeam)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Already in the team",
        });

      const team = await ctx.db.team.findUnique({
        where: {
          id: input.teamId,
        },
        select: {
          _count: {
            select: {
              Members: true,
            },
          },
          Event: true,
        },
      });

      if (!team)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Team not found",
        });

      if (team._count.Members >= team.Event.maxTeamSize)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Team is full",
        });

      await ctx.db.team.update({
        where: {
          id: input.teamId,
        },
        data: {
          Members: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),

  leaveTeam: protectedProcedure
    .input(leaveTeamZ)
    .mutation(async ({ ctx, input }) => {
      const team = await ctx.db.team.findUnique({
        where: {
          id: input.teamId,
        },
        select: {
          isConfirmed: true,
          Event: {
            select: {
              id: true,
              isLegacy: true,
            },
          },
        },
      });

      if (!team)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Team not found",
        });

      if (team.isConfirmed || team.Event.isLegacy)
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You cannot leave this team anymore!",
        });

      await ctx.db.team.update({
        where: {
          id: input.teamId,
        },
        data: {
          Members: {
            disconnect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),

  deleteTeam: protectedProcedure
    .input(deleteTeamZ)
    .mutation(async ({ ctx, input }) => {
      const team = await ctx.db.team.findUnique({
        where: {
          id: input.teamId,
        },
        select: {
          isConfirmed: true,
          Event: {
            select: {
              id: true,
              isLegacy: true,
            },
          },
        },
      });

      if (!team)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Team not found",
        });

      if (team.isConfirmed || team.Event.isLegacy)
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You cannot leave this team anymore!",
        });

      await ctx.db.team.delete({
        where: {
          id: input.teamId,
        },
      });
    }),

  confirmTeam: protectedProcedure
    .input(confirmTeamZ)
    .mutation(async ({ ctx, input }) => {
      const team = await ctx.db.team.findUnique({
        where: {
          id: input.teamId,
        },
        include: {
          _count: {
            select: {
              Members: true,
            },
          },
          Event: {
            select: {
              minTeamSize: true,
            },
          },
        },
      });

      if (!team)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Team not found",
        });

      if (team._count.Members < team.Event.minTeamSize)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Minimum team size is ${team.Event.minTeamSize}`,
        });

      await ctx.db.team.update({
        where: {
          id: input.teamId,
        },
        data: {
          isConfirmed: true,
        },
      });
    }),

  // Retrieve
  getTeamById: protectedProcedure
    .input(getTeamByIdZ)
    .query(async ({ ctx, input }) => {
      return await ctx.db.team.findUniqueOrThrow({
        where: {
          id: input.teamId,
        },
        include: {
          Members: true,
        },
      });
    }),
});
