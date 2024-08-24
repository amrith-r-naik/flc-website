import {
  getWinnersByEventIdZ,
  makeTeamWinnerZ,
  removeWinnerZ,
} from "~/zod/winnerZ";

import { createTRPCRouter, organiserProcedure } from "../trpc";

const winnerRouter = createTRPCRouter({
  //Mutations
  makeTeamWinner: organiserProcedure
    .input(makeTeamWinnerZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.winner.create({
        data: {
          eventId: input.eventId,
          teamId: input.teamId,
          winnerType: input.winnerType,
        },
      });
    }),

  removeWinner: organiserProcedure
    .input(removeWinnerZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.winner.delete({
        where: {
          id: input.winnerId,
        },
      });
    }),

  //Queries
  getWinnersByEventId: organiserProcedure
    .input(getWinnersByEventIdZ)
    .query(async ({ ctx, input }) => {
      const winners = await ctx.db.winner.findMany({
        where: {
          eventId: input.eventId,
        },
        include: {
          Team: true,
        },
      });

      const sortedWinners = winners.sort((a, b) => {
        if (a.winnerType === "WINNER") {
          return -1;
        } else if (b.winnerType === "RUNNER_UP") {
          return 1;
        } else {
          return 0;
        }
      });

      return sortedWinners;
    }),
});

export default winnerRouter;
