import { z } from "zod";

const toggleAttendanceZ = z.object({
  eventId: z.number(),
  userId: z.number(),
});

const toggleTeamAttendanceZ = z.object({
  teamId: z.number(),
  eventId: z.number(),
});

export { toggleTeamAttendanceZ, toggleAttendanceZ };
