import { TRPCError } from "@trpc/server";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

import {
  createBlogZ,
  updateBlogZ,
  toggleBlogStatusZ,
  deleteBlogZ,
} from "~/zod/blogZ";

export const blogRouter = createTRPCRouter({
  createBlog: protectedProcedure
    .input(createBlogZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.blog.create({
        data: {
          title: input.title,
          content: input.content,
          status: "DRAFT",
          images: input.images,
          User: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),

  updateBlog: protectedProcedure
    .input(updateBlogZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.blog.update({
        where: { id: input.blogId },
        data: {
          title: input.title,
          content: input.content,
          images: input.images,
          status: input.status,
        },
      });
    }),

  deleteBlog: protectedProcedure
    .input(deleteBlogZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.blog.delete({
        where: { id: input.blogId },
      });
    }),

  toggleBlogStatus: protectedProcedure
    .input(toggleBlogStatusZ)
    .mutation(async ({ ctx, input }) => {
      const blog = await ctx.db.blog.findUnique({
        where: { id: input.blogId },
      });

      if (!blog)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Blog not found",
        });

      await ctx.db.blog.update({
        where: { id: input.blogId },
        data: {
          status: blog.status === "DRAFT" ? "PUBLISHED" : "DRAFT",
        },
      });
    }),

  getPublishedBlogs: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.blog.findMany({
      where: {
        status: "PUBLISHED",
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  getAllBlogs: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.blog.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  getMyBlogs: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.blog.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      orderBy: { createdAt: "desc" },
    });
  }),
});
