import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { EditProfileZ, GetProfileIdZ } from "~/zod/userZ";

export const userRouter = createTRPCRouter({
  editUser: protectedProcedure
    .input(EditProfileZ)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.update({
        where: { id: input.id },
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

  getUser: publicProcedure
    .input(GetProfileIdZ)
    .query(async ({ ctx, input }) => {
      const userProfile = await ctx.db.user.findUnique({
        where: { id: input.id },
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

      if (!userProfile) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      return { status: "success", userProfile };
    }),
});
