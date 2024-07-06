import { z } from "zod";

// const markTeamAttendanceSchema = z.object({
//     teamId: z.string(),
//     eventId: z.string(),
// })

const markAttendanceZ = z.object({
  eventId: z.string(),
  userId: z.string(),
});

export { markAttendanceZ };
