import { PaymentType } from "@prisma/client";
import { z } from "zod";

const createOrderInputZ = z.discriminatedUnion("paymentType", [
  z.object({
    paymentType: z.literal(PaymentType.EVENT),
    amountInINR: z.number(),
  }),
  z.object({
    paymentType: z.literal(PaymentType.MEMBERSHIP),
  }),
]);

const createOrderOutputZ = z.object({
  orderId: z.string(),
  orderAmount: z.number(),
  orderCurrency: z.string(),
});

const __baseSavePaymentInputZ = z.object({
  paymentName: z.string(),
  razorpayOrderId: z.string(),
  razorpayPaymentId: z.string(),
  razorpaySignature: z.string(),
});

const savePaymentInputZ = z.discriminatedUnion("paymentType", [
  __baseSavePaymentInputZ.extend({
    paymentType: z.literal(PaymentType.EVENT),
    amount: z.number(),
  }),
  __baseSavePaymentInputZ.extend({
    paymentType: z.literal(PaymentType.MEMBERSHIP),
  }),
]);

const savePaymentOutputZ = z.object({
  paymentVerified: z.boolean(),
  paymentDbId: z.string(),
  paymentRazopayId: z.string(),
});

export {
  createOrderInputZ,
  createOrderOutputZ,
  savePaymentInputZ,
  savePaymentOutputZ,
};
