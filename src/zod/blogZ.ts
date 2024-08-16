import { BlogState } from "@prisma/client";
import { blogImagesZ } from "prisma/schemaZ";
import { z } from "zod";

const createBlogZ = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  discription: z.string().min(3, "Discription must be at least 3 characters"),
  content: z.string().min(100, "Content must be at least 100 characters"),
  readTime: z.number().positive(),
  words: z.number().positive(),
  images: z.array(blogImagesZ),
});

const updateBlogZ = z.object({
  blogId: z.string(),
  title: z.string().min(3, "Title must be at least 3 characters"),
  discription: z.string().min(3, "Discription must be at least 3 characters"),
  content: z.string().min(100, "Content must be at least 100 characters"),
  readTime: z.number().positive(),
  words: z.number().positive(),
  images: z.array(blogImagesZ),
});

const updateBlogStateZ = z.object({
  blogId: z.string(),
  blogState: z.nativeEnum(BlogState),
});

const deleteBlogZ = z.object({
  blogId: z.string(),
});

const getBlogsById = z.object({
  id: z.string(),
});

export {
  deleteBlogZ,
  updateBlogStateZ,
  updateBlogZ,
  createBlogZ,
  getBlogsById,
};
