import { TRPCError } from "@trpc/server";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { razorPay } from "~/server/razorpay";

import { env } from "~/env";
import { createOrderZ, verifyAndSavePaymentZ } from "~/zod/paymentZ";

const paymentRouter = createTRPCRouter({
  createOrder: protectedProcedure
    .input(createOrderZ)
    .mutation(async ({ ctx, input }) => {
      if (input.paymentType === "MEMBERSHIP") {
        const user = await ctx.db.user.findUnique({
          where: {
            id: ctx.session.user.id,
          },
        });

        if (!user)
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });

        if (user.paymentId)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Already paid for membership",
          });
      } else {
        const team = await ctx.db.team.findUnique({
          where: {
            id: input.teamId,
          },
        });

        if (!team)
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Team not found",
          });

        if (team.paymentId)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Team has already paid for event",
          });
      }

      const AMOUNT_IN_INR =
        input.paymentType === "EVENT" ? input.amountInINR : 400;
      const CURRENCY = "INR";
      const RECEIPT = input.paymentType.charAt(0) + "_" + uuidv4();
      const PAYMENT_CAPTURE = true;

      try {
        const orderRes = await razorPay.orders.create({
          amount: AMOUNT_IN_INR * 100,
          currency: CURRENCY,
          receipt: RECEIPT,
          payment_capture: PAYMENT_CAPTURE,
        });

        return {
          orderId: orderRes.id,
          orderAmount: AMOUNT_IN_INR,
          orderCurrency: orderRes.currency,
        };
      } catch {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create order",
        });
      }
    }),

  verifyAndSavePayment: protectedProcedure
    .input(verifyAndSavePaymentZ)
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
          User: {
            connect: {
              id: ctx.session.user.id,
            },
          },
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
    .input(z.object({ eventName: z.string(), paymentId: z.string() }))
    .query(async ({ ctx, input }) => {
      if (input.paymentId) {
        const paymentCount = await ctx.db.team.count({
          where: {
            paymentId: input.paymentId,
            leaderId: ctx.session.user.id,
          },
        });
        return paymentCount > 0 ? true : false;
      }

      return true;
    }),

  getAllPayments: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.payment.findMany({
      where: {
        verified: true,
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        User: true, 
      },
    })
  })


});

export default paymentRouter;
