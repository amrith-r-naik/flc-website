import { z } from "zod";

const issueCertificateByEventIdZ = z.object({
  eventId: z.number(),
});
const getCertificationDetailsByIdZ = z.object({
  certificateId: z.string(),
});

const getAllCertificationsByUserIdZ = z.object({
  userId: z.number(),
});

export {
  issueCertificateByEventIdZ,
  getCertificationDetailsByIdZ,
  getAllCertificationsByUserIdZ,
};
