import { z } from "zod";

const EditProfileZ = z.object({
  id: z.string(),
  name: z.string().optional(),
  bio: z.string().optional(),
  phone: z.string().optional(),
  year: z.string().optional(),
  position: z.string().optional(),
  image: z.string().optional(),
});

export { EditProfileZ };
