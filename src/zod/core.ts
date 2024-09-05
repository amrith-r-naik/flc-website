import { CoreType } from "@prisma/client";
import { z } from "zod";

const addCoreZ = z.object({
  userId: z.string(),
  position: z.string(),
  year: z.string(),
  priority: z.string(),
  type: z.nativeEnum(CoreType),
});

const updateCoreZ = z.object({
  id: z.string(),
  position: z.string(),
  year: z.string(),
  priority: z.number(),
  type: z.nativeEnum(CoreType),
});

export { addCoreZ, updateCoreZ };
