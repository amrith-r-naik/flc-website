import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

const paymentRouter = createTRPCRouter({
  // FIXME: this wont work anymore
  checkEventPayment: protectedProcedure
    .input(z.object({ eventName: z.string(), paymentId: z.string() }))
    .query(async ({ ctx, input }) => {
      if (input.paymentId) {
        const paymentCount = await ctx.db.payment.count({
          where: {
            paymentName: input.eventName,
            userId: ctx.session.user.id,
            id: input.paymentId,
          },
        });

        return paymentCount > 0 ? true : false;
      } else {
        const paymentCount = await ctx.db.payment.count({
          where: {
            paymentName: input.eventName,
            userId: ctx.session.user.id,
          },
        });

        return paymentCount > 0 ? true : false;
      }
    }),
});

export default paymentRouter;
