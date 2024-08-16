import { sendCertificate } from "~/utils/certificationEmail/email";
import {
  getAllCertificationsByUserIdZ,
  getCertificationDetailsByIdZ,
  issueCertificateByEventIdZ,
} from "~/zod/certificate";

import { createTRPCRouter, organiserProcedure, publicProcedure } from "../trpc";

export const certificateRouter = createTRPCRouter({
  issueCertificatesForWinnersAndParticipants: organiserProcedure
    .input(issueCertificateByEventIdZ)
    .mutation(async ({ input, ctx }) => {
      const event = await ctx.db.event.findUniqueOrThrow({
        where: { id: input.eventId },
        include: { Winner: true },
      });

      const winners = await ctx.db.winner.findMany({
        where: {
          Event: {
            id: input.eventId,
          },
        },
        include: {
          Team: {
            include: {
              Members: { select: { id: true, name: true, email: true } },
            },
          },
        },
      });
      await Promise.all(
        winners.map(async (winner) => {
          const certificates = await ctx.db.certificate.createMany({
            data: winner.Team.Members.map((member) => ({
              issuedOn: new Date(),
              certificateType: winner.winnerType,
              userId: member.id,
              eventId: event.id,
            })),
          });
          await Promise.all(
            winner.Team.Members.map((member) =>
              sendCertificate(
                member.name,
                event.name,
                member.email,
                "Topperformer",
                winner.winnerType,
              ),
            ),
          );

          return certificates;
        }),
      );

      const teams = await ctx.db.team.findMany({
        where: {
          Event: { id: input.eventId },
          isConfirmed: true,
          hasAttended: true,
        },

        include: { Members: true },
      });

      const existingCertificates = await ctx.db.certificate.findMany({
        where: {
          Event: {
            id: input.eventId,
          },
        },
      });

      const existingUserEventIds = existingCertificates.map(
        (cert) => cert.userId,
      );

      const certificates = [];

      for (const team of teams) {
        for (const member of team.Members) {
          if (!existingUserEventIds.includes(member.id)) {
            const certificate = await ctx.db.certificate.create({
              data: {
                issuedOn: new Date(),
                certificateType: "PARTICIPATION",
                userId: member.id,
                eventId: event.id,
              },
            });
            certificates.push(certificate);
            await sendCertificate(
              member.name,
              event.name,
              member.email,
              "Participation",
            );
          }
        }
      }

      return { success: true };
    }),

  getCertificationDetailsById: publicProcedure
    .input(getCertificationDetailsByIdZ)
    .query(async ({ input, ctx }) => {
      const { certificateId } = input;
      const certificate = await ctx.db.certificate.findUnique({
        where: { id: certificateId },
        include: { Event: true, User: true },
      });
      return certificate;
    }),

  getAllCertificationsByUserId: publicProcedure
    .input(getAllCertificationsByUserIdZ)
    .query(async ({ input, ctx }) => {
      const { userId } = input;
      const certificates = await ctx.db.certificate.findMany({
        where: { userId },
        include: { Event: true },
      });
      return certificates;
    }),
});
