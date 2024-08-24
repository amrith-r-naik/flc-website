import { z } from "zod";

const toggleAttendanceZ = z.object({
  eventId: z.number(),
  userId: z.number(),
});

const toggleTeamAttendanceZ = z.object({
  teamId: z.string(),
  eventId: z.number(),
});

export { toggleTeamAttendanceZ, toggleAttendanceZ };
