import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { createBlogZ, updateBlogZ, toggleBlogStatusZ, deleteBlogZ } from "~/zod/blogZ";

export const blogRouter = createTRPCRouter({

  createBlog: protectedProcedure
    .input(createBlogZ)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.blog.create({
        data: {
          ...input,
          userId: ctx.session.user.id,
        },
      });
    }),

  updateBlog: protectedProcedure
    .input(updateBlogZ)
    .mutation(async ({ ctx, input }) => {
      const { blogId, ...data } = input;
      return await ctx.db.blog.update({
        where: { id: blogId },
        data,
      });
    }),

  deleteBlog: protectedProcedure
    .input(deleteBlogZ)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.blog.delete({
        where: { id: input.blogId },
      });
    }),

  toggleBlogStatus: protectedProcedure
    .input(toggleBlogStatusZ)
    .mutation(async ({ ctx, input }) => {
      const blog = await ctx.db.blog.findUnique({
        where: { id: input.blogId },
      });

      if (!blog) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Blog not found",
        });
      }

      return await ctx.db.blog.update({
        where: { id: input.blogId },
        data: {
          status: blog.status === "DRAFT" ? "PUBLISHED" : "DRAFT",
        },
      });
    }),

  getAllBlogsForUser: protectedProcedure
    .query(async ({ ctx }) => {
      return await ctx.db.blog.findMany({
        where: {
          status: "PUBLISHED"
        },
        orderBy: { createdAt: 'desc' },
      });
    }),

  getAllBlogsForAdmin: protectedProcedure
    .query(async ({ ctx }) => {
      return await ctx.db.blog.findMany({
        where: {
          status: "DRAFT"
        },
        orderBy: { createdAt: 'desc' },
      });
    }),

  getAllBlogsOfUser: protectedProcedure
    .query(async ({ ctx }) => {
      return await ctx.db.blog.findMany({
        where: {
          userId: ctx.session.user.id
        },
        orderBy: { createdAt: 'desc' },
      });
    }),

});
