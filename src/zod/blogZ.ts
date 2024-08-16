import { BlogState } from "@prisma/client";
import { z } from "zod";

const createBlogZ = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  discription: z.string(),
  content: z.string().min(100, "Content must be at least 100 characters"),
  readTime: z.number(),
  words: z.number(),
  images: z.array(z.string().url()).optional(),
});

const updateBlogZ = z.object({
  blogId: z.string(),
  title: z.string().min(3, "Title must be at least 3 characters").optional(),
  discription: z.string().optional(),
  readTime: z.number().optional(),
  words: z.number().optional(),
  content: z
    .string()
    .min(100, "Content must be at least 100 characters")
    .optional(),
  images: z.array(z.string().url()).optional(),
});

const updateBlogStateZ = z.object({
  blogId: z.string(),
  blogState: z.nativeEnum(BlogState),
});

const deleteBlogZ = z.object({
  blogId: z.string(),
});

const getBlogsById = z.object({
  id: z.string()
})

export { deleteBlogZ, updateBlogStateZ, updateBlogZ, createBlogZ, getBlogsById };
