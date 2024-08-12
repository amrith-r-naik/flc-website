import { z } from "zod";

const getUserLinksZ = z.object({ userId: z.number() });

const createUserLinkZ = z.object({
  url: z.string(),
  linkName: z.string(),
  userId: z.number(),
});
const deleteUserLinkZ = z.object({ id: z.string() });

export { getUserLinksZ, createUserLinkZ, deleteUserLinkZ };
