import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

const paymentRouter = createTRPCRouter({
  // FIXME: this wont work anymore
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

export default paymentRouter;
