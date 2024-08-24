import { type NextApiRequest, type NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

import { razorPay } from "~/server/razorpay";

import { createOrderInputZ, createOrderOutputZ } from "~/zod/paymentZ";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { success: bodySuccess, data: bodyData } = createOrderInputZ.safeParse(
    req.body,
  );
  if (!bodySuccess) return res.status(400);

  const AMOUNT_IN_INR =
    bodyData.paymentType === "EVENT" ? bodyData.amountInINR : 400;
  const CURRENCY = "INR";
  const RECEIPT = bodyData.paymentType + uuidv4();
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
  if (!orderSuccess) return res.status(500);

  return res.status(200).json(orderData);
}
