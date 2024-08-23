import { z } from "zod";

import { createPaymentZ } from "~/zod/paymentZ";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const payment = createTRPCRouter({
  createPayment: protectedProcedure
    .input(createPaymentZ)
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.payment.create({
        data: {
          userId: ctx.session.user.id,
          paymentName: input.payment_name,
          razorpayPaymentId: input.razorpay_payment_id,
          razorpayOrderId: input.razorpay_order_id,
          razorpaySignature: input.razorpay_signature,
        },
      });
    }),

  checkEventPayment: protectedProcedure
    .input(z.object({ eventName: z.string() }))
    .query(async ({ ctx, input }) => {
      const paymentStatus = await ctx.db.payment.findFirst({
        where: {
          paymentName: input.eventName,
          userId: ctx.session.user.id,
        },
      });

      return paymentStatus ? true : false;
    }),
});
