import { markAttendanceZ } from "~/zod/attendanceZ";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { checkOrganiser } from "~/utils/helper";

export const attendanceRouter = createTRPCRouter({
  toggleAttendance: protectedProcedure
    .input(markAttendanceZ)
    .mutation(async ({ ctx, input }) => {
      await checkOrganiser(
        ctx.session.user.id,
        input.eventId,
        ctx.session.user.role,
      );

      const user = await ctx.db.user.findUnique({
        where: {
          id: input.userId,
        },
        include: {
          Attendance: true,
          Team: {
            include: {
              Members: {
                include: {
                  Attendance: true,
                },
              },
            },
          },
        },
      });

      const team = user?.Team.find((t) => t.eventId === input.eventId);

      const attendance = user?.Attendance.find(
        (a) => a.eventId === input.eventId,
      );

      const updatedAttendance = await ctx.db.attendance.update({
        where: {
          userId_eventId: {
            ...input,
          },
        },
        data: {
          hasAttended: !attendance?.hasAttended,
        },
      });

      let teamAttendance = true;

      team?.Members.forEach((member) => {
        if (
          !member.Attendance.find((a) => a.eventId === input.eventId)
            ?.hasAttended
        ) {
          teamAttendance = false;
        }
      });

      if (teamAttendance) {
        await ctx.db.team.update({
          where: {
            id: team?.id,
          },
          data: {
            hasAttended: true,
          },
        });
      }

      return updatedAttendance;
    }),
});
