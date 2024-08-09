import { z } from "zod";

const createActivityForEventZ = z.object({
  eventId: z.number(),
  name: z.string(),
  point: z.number(),
});

const deleteActivityZ = z.object({
  activityId: z.string(),
});

const addActivityPointsZ = z.object({
  activityId: z.string(),
  users: z.array(z.number()), //UserId Array
});

const removeActivityPointsZ = z.object({
  activityId: z.string(),
  users: z.array(z.number()), //UserId Array
});

export {
  createActivityForEventZ,
  deleteActivityZ,
  addActivityPointsZ,
  removeActivityPointsZ,
};
