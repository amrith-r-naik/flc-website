import { TRPCError } from "@trpc/server";
import { blogImagesZ } from "prisma/schemaZ";
import { z } from "zod";

import {
  adminProcedure,
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import {
  createBlogZ,
  updateBlogZ,
  deleteBlogZ,
  updateBlogStateZ,
  getBlogsById,
} from "~/zod/blogZ";

export const blogRouter = createTRPCRouter({
  // Create
  createBlog: adminProcedure
    .input(createBlogZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.blog.create({
        data: {
          title: input.title,
          discription: input.discription,
          content: input.content,
          readTime: input.readTime,
          words: input.words,
          images: input.images,
          blogState: "DRAFT",
          User: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),

  // Retrieve
  getPublishedBlogs: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.blog.findMany({
      where: {
        blogState: "PUBLISHED",
      },
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

  getAllBlogs: adminProcedure.query(async ({ ctx }) => {
    return await ctx.db.blog.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  getBlogById: protectedProcedure
    .input(getBlogsById)
    .query(async ({ ctx, input }) => {
      const unparsedBlog = await ctx.db.blog.findUniqueOrThrow({
        where: {
          id: input.id,
        },
        include: {
          User: true,
        },
      });

      const images = z.array(blogImagesZ).safeParse(unparsedBlog.images);

      return {
        ...unparsedBlog,
        images: images.success ? images.data : [],
      };
    }),

  // Update
  updateBlog: protectedProcedure
    .input(updateBlogZ)
    .mutation(async ({ ctx, input }) => {
      const blog = await ctx.db.blog.findUniqueOrThrow({
        where: { id: input.blogId },
      });

      if (blog.blogState === "PUBLISHED")
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot update a published blog",
        });

      await ctx.db.blog.update({
        where: { id: input.blogId },
        data: {
          title: input.title,
          discription: input.discription,
          content: input.content,
          images: input.images,
          readTime: input.readTime,
          words: input.words,
        },
      });
    }),

  updateBlogState: adminProcedure
    .input(updateBlogStateZ)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.blog.update({
        where: { id: input.blogId },
        data: {
          blogState: input.blogState,
        },
      });
    }),

  // Delete
  deleteBlog: protectedProcedure
    // FIXME(Omkar): protectedProcedure or adminProcedure
    .input(deleteBlogZ)
    .mutation(async ({ ctx, input }) => {
      const blog = await ctx.db.blog.findUniqueOrThrow({
        where: { id: input.blogId },
      });

      if (blog.blogState === "PUBLISHED")
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot delete a published blog",
        });

      await ctx.db.blog.delete({
        where: { id: input.blogId },
      });
    }),
});
