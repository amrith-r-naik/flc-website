import { z } from "zod";

const getUserZ = z
  .object({
    userId: z.number().or(z.nan().transform(() => undefined)),
  })
  .optional();

const editUserZ = z.object({
  id: z.number(),
  name: z.string().optional(),
  bio: z.string().optional(),
  phone: z.string().optional(),
});

const editUserImageZ = z.object({
  image: z.string(),
});

const addUserLinkZ = z.object({
  linkName: z.string().min(3, "Name must be at least 3 characters"),
  url: z.string().url(),
});

const deleteUserLinkZ = z.object({
  linkId: z.string(),
});

export { editUserZ, addUserLinkZ, editUserImageZ, getUserZ, deleteUserLinkZ };
