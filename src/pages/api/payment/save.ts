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
  if (!session) {
    res.status(401).send("Unauthorized");
    return;
  }

  const { success: bodySuccess, data: bodyData } = savePaymentInputZ.safeParse(
    req.body,
  );
  if (!bodySuccess) {
    res.status(400).send("Invalid input");
    return;
  }

  const generatedSignature = crypto
    .createHmac("sha256", env.RAZORPAY_API_KEY_ID)
    .update(bodyData.razorpayOrderId + "|" + bodyData.razorpayPaymentId)
    .digest("hex");

  console.log("generatedSignature", generatedSignature);
  console.log("razorpaySignature", bodyData.razorpaySignature);

  const paymentRes = await db.payment.create({
    data: {
      paymentType: bodyData.paymentType,
      paymentName: bodyData.paymentName,
      razorpayOrderId: bodyData.razorpayOrderId,
      razorpayPaymentId: bodyData.razorpayPaymentId,
      razorpaySignature: bodyData.razorpaySignature,
      verified: generatedSignature === bodyData.razorpaySignature,
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
  if (!paymentSuccess) {
    res.status(500).send("Something went wrong");
    return;
  }

  res.status(200).json(payment);
}
