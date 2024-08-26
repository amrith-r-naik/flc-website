import { TRPCError } from "@trpc/server";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

import { razorPay } from "~/server/razorpay";

import { env } from "~/env";
import { createOrderZ, createOrderOutputZ, savePaymentZ } from "~/zod/paymentZ";

import { createTRPCRouter, protectedProcedure } from "../trpc";

const paymentRouter = createTRPCRouter({
  createOrder: protectedProcedure
    .input(createOrderZ)
    .mutation(async ({ input }) => {
      // if (input.paymentType === "MEMBERSHIP") {
      //   const user = await ctx.db.user.findUnique({
      //     where: {
      //       id: ctx.session.user.id,
      //     },
      //   });

      //   if (!user)
      //     throw new TRPCError({
      //       code: "NOT_FOUND",
      //       message: "User not found",
      //     });

      //   if (user.paymentId)
      //     throw new TRPCError({
      //       code: "BAD_REQUEST",
      //       message: "Already paid for membership",
      //     });
      // } else {
      // }

      const AMOUNT_IN_INR =
        input.paymentType === "EVENT" ? input.amountInINR : 400;
      const CURRENCY = "INR";
      const RECEIPT = input.paymentType.charAt(0) + "_" + uuidv4();
      const PAYMENT_CAPTURE = true;

      const orderRes = await razorPay.orders.create({
        amount: AMOUNT_IN_INR * 100,
        currency: CURRENCY,
        receipt: RECEIPT,
        payment_capture: PAYMENT_CAPTURE,
      });

      const { success: orderSuccess, data: orderData } =
        createOrderOutputZ.safeParse({
          orderId: orderRes.id,
          orderAmount: orderRes.amount,
          orderCurrency: orderRes.currency,
        });
      if (!orderSuccess)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });

      return orderData;
    }),

  savePayment: protectedProcedure
    .input(savePaymentZ)
    .mutation(async ({ ctx, input }) => {
      const generatedSignature = crypto
        .createHmac("sha256", env.RAZORPAY_API_KEY_ID)
        .update(input.razorpayOrderId + "|" + input.razorpayPaymentId)
        .digest("hex");

      const whoPaidWhat =
        input.paymentType === "EVENT"
          ? {
              amount: input.amount,
              Team: {
                connect: {
                  id: input.teamId,
                },
              },
            }
          : {
              amount: 400,
              User: {
                connect: {
                  id: ctx.session.user.id,
                },
              },
            };

      const payment = await ctx.db.payment.create({
        data: {
          paymentType: input.paymentType,
          paymentName: input.paymentName,
          razorpayOrderId: input.razorpayOrderId,
          razorpayPaymentId: input.razorpayPaymentId,
          razorpaySignature: input.razorpaySignature,
          verified: generatedSignature === input.razorpaySignature,
          ...whoPaidWhat,
        },
      });

      return {
        paymentDbId: payment.id,
        paymentRazopayId: payment.razorpayPaymentId,
        paymentVerified: payment.verified,
      };
    }),

  // FIXME: this wont work anymore
  checkEventPayment: protectedProcedure
    .input(z.object({ eventName: z.string() }))
    .query(async ({ ctx, input }) => {
      const paymentStatus = await ctx.db.payment.findFirst({
        where: {
          paymentName: input.eventName,
        },
      });
      return paymentStatus ? true : false;
    }),
});

export default paymentRouter;
