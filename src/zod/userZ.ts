import { z } from "zod";

const editProfileZ = z.object({
  id: z.number(),
  name: z.string().optional(),
  bio: z.string().optional(),
  phone: z.string().optional(),
  year: z.string().optional(),
  position: z.string().optional(),
  image: z.string().optional(),
});

export { editProfileZ };
