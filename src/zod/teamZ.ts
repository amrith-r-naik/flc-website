import { z } from "zod";

const createTeamZ = z.object({
  eventId: z.number().int(),
  teamName: z.string(),
});

const joinTeamZ = z.object({
  eventId: z.number().int(),
  teamId: z.number().int(),
});

const leaveTeamZ = z.object({
  teamId: z.number(),
});

const RemoveFromTeamZ = z.object({
  teamId: z.number(),
  userId: z.number(),
});

const deleteTeamZ = z.object({
  teamId: z.number(),
});

const confirmTeamZ = z.object({
  teamId: z.number(),
});

const getTeamByIdZ = z.object({
  teamId: z.number(),
});

export {
  createTeamZ,
  joinTeamZ,
  leaveTeamZ,
  deleteTeamZ,
  confirmTeamZ,
  getTeamByIdZ,
  RemoveFromTeamZ,
};
