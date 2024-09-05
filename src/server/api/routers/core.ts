import { z } from "zod";

import {
  adminProcedure,
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

import { addCoreZ, updateCoreZ } from "~/zod/core";

const coreRouter = createTRPCRouter({
  addCore: adminProcedure.input(addCoreZ).mutation(async ({ ctx, input }) => {
    await ctx.db.core.create({
      data: {
        position: input.position,
        priority: parseInt(input.priority),
        year: input.year,
        User: {
          connect: {
            id: parseInt(input.userId),
          },
        },
        type: input.type,
      },
    });
  }),

  deleteCore: adminProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      await ctx.db.core.delete({
        where: { id: input },
      });
    }),

  updateCore: adminProcedure
    .input(updateCoreZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.core.update({
        where: { id: input.id },
        data: {
          position: input.position,
          priority: input.priority,
          year: input.year,
          type: input.type,
        },
      });
    }),

  getCoreByYear: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return await ctx.db.core.findMany({
        where: { year: input, type: "OFFICE_BEARER" },
        include: {
          User: {
            include: {
              UserLink: true,
            },
          },
        },
        orderBy: {
          priority: "asc",
        },
      });
    }),

  getFacultyCoords: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.core.findMany({
      where: {
        type: "FACULTY_COORDINATOR",
      },
      include: {
        User: true,
      },
    });
  }),
});
export default coreRouter;
