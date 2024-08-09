import { z } from "zod";

const addOrganiserZ = z.object({
  userId: z.number(),
  eventId: z.number(),
});

const removeOrganiserZ = z.object({
  organiserId: z.string(),
});

export { addOrganiserZ, removeOrganiserZ };
