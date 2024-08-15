import { z } from "zod";

const createBlogZ = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().optional(),
  images: z.array(z.string().url()).optional(),
  status: z.enum(["DRAFT", "PUBLISHED"]).default("DRAFT"),
});

const updateBlogZ = z.object({
  blogId: z.string().cuid(),
  title: z.string().optional(),
  content: z.string().optional(),
  images: z.array(z.string().url()).optional(),
  status: z.enum(["DRAFT", "PUBLISHED"]).optional(),
});

const toggleBlogStatusZ = z.object({
  blogId: z.string().cuid(),
});

const deleteBlogZ = z.object({
  blogId: z.string().cuid(),
});

export { deleteBlogZ, toggleBlogStatusZ, updateBlogZ, createBlogZ };
