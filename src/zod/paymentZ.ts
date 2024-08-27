import { PaymentType } from "@prisma/client";
import { z } from "zod";

const createOrderZ = z.discriminatedUnion("paymentType", [
  z.object({
    paymentType: z.literal(PaymentType.EVENT),
    amountInINR: z.number(),
    teamId: z.string(),
  }),
  z.object({
    paymentType: z.literal(PaymentType.MEMBERSHIP),
  }),
]);

const __baseVerifyAndSavePaymentZ = z.object({
  paymentName: z.string(),
  razorpayOrderId: z.string(),
  razorpayPaymentId: z.string(),
  razorpaySignature: z.string(),
});

const verifyAndSavePaymentZ = z.discriminatedUnion("paymentType", [
  __baseVerifyAndSavePaymentZ.extend({
    paymentType: z.literal(PaymentType.EVENT),
    amount: z.number(),
    teamId: z.string(),
  }),
  __baseVerifyAndSavePaymentZ.extend({
    paymentType: z.literal(PaymentType.MEMBERSHIP),
  }),
]);

export { createOrderZ, verifyAndSavePaymentZ };
