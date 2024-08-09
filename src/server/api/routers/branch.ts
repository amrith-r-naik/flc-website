import { createBranchZ, deleteBranchZ } from "~/zod/branchZ";

import { adminProcedure, createTRPCRouter, publicProcedure } from "../trpc";

//switch to protectedProcedure after auth is done
export const branchRouter = createTRPCRouter({
  getAllBranch: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.branch.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }),

  createBranch: adminProcedure
    .input(createBranchZ)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.branch.create({
        data: {
          name: input.branchName,
          nickName: input.branchNickName,
        },
      });
    }),

  deleteBranch: adminProcedure
    .input(deleteBranchZ)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.branch.delete({
        where: {
          id: input.branchId,
        },
      });
    }),
});
