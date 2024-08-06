import { z } from "zod";

const createTeamZ = z.object({
  eventId: z.number(),
  teamName: z.string(),
});

const joinTeamZ = z.object({
  eventId: z.number(),
  teamId: z.number(),
});

const leaveTeamZ = z.object({
  teamId: z.number(),
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
};
