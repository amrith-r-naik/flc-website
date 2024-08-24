import { WinnerType } from "@prisma/client";
import { z } from "zod";

const makeTeamWinnerZ = z.object({
  eventId: z.number(),
  teamId: z.string(),
  winnerType: z.nativeEnum(WinnerType),
});

const removeWinnerZ = z.object({
  eventId: z.number(),
  winnerId: z.string(),
});

const getWinnersByEventIdZ = z.object({
  eventId: z.number(),
});
export { makeTeamWinnerZ, removeWinnerZ, getWinnersByEventIdZ };
