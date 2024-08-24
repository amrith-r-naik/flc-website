import crypto from "crypto";
import { type NextApiRequest, type NextApiResponse } from "next";

import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

import { env } from "~/env";
import { savePaymentInputZ, savePaymentOutputZ } from "~/zod/paymentZ";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerAuthSession({ req, res });
  if (!session) return res.status(401);

  const { success, data: body } = savePaymentInputZ.safeParse(req.body);
  if (!success) return res.status(400);

  const generatedSignature = crypto
    .createHmac("sha256", env.RAZORPAY_API_KEY_ID)
    .update(body.razorpayOrderId + "|" + body.razorpayPaymentId)
    .digest("hex");

  const paymentRes = await db.payment.create({
    data: {
      paymentType: body.paymentType,
      paymentName: body.paymentName,
      razorpayOrderId: body.razorpayOrderId,
      razorpayPaymentId: body.razorpayPaymentId,
      razorpaySignature: body.razorpaySignature,
      verified: generatedSignature === body.razorpaySignature,
      User: {
        connect: {
          id: session.user.id,
        },
      },
    },
  });

  const { success: paymentSuccess, data: payment } =
    savePaymentOutputZ.safeParse({
      paymentVerified: paymentRes.verified,
      paymentDbId: paymentRes.id,
      paymentRazopayId: paymentRes.razorpayPaymentId,
    });
  if (!paymentSuccess) return res.status(500);

  return res.status(200).json(payment);
}
