import { type NextApiRequest, type NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";
import { razorPay } from "~/server/razorpay";

import { createOrderInputZ, createOrderOutputZ } from "~/zod/paymentZ";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerAuthSession({ req, res });
  if (!session) {
    res.status(401).send("Unauthorized");
    return;
  }

  const { success: bodySuccess, data: bodyData } = createOrderInputZ.safeParse(
    req.body,
  );
  if (!bodySuccess) {
    res.status(400).send("Invalid input");
    return;
  }

  if (bodyData.paymentType === "MEMBERSHIP") {
    const membershipPayment = await db.payment.findFirst({
      where: {
        AND: [
          {
            userId: session.user.id,
          },
          {
            paymentType: "MEMBERSHIP",
          },
        ],
      },
    });
    if (membershipPayment) {
      res.status(400).send("Already paid for membership");
      return;
    }
  }

  const AMOUNT_IN_INR =
    bodyData.paymentType === "EVENT" ? bodyData.amountInINR : 400;
  const CURRENCY = "INR";
  const RECEIPT = bodyData.paymentType.charAt(0) + "_" + uuidv4();
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
  if (!orderSuccess) {
    res.status(500).send("Something went wrong");
    return;
  }

  res.status(200).json(orderData);
}
