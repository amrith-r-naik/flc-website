import { type PaymentType } from "@prisma/client";
import { useSession } from "next-auth/react";
import Script from "next/script";
import React, { forwardRef } from "react";
import { toast } from "sonner";

import { Button, type ButtonProps } from "~/components/ui/button";

import { env } from "~/env";
import {
  createOrderInputZ,
  createOrderOutputZ,
  savePaymentInputZ,
  savePaymentOutputZ,
} from "~/zod/paymentZ";

const PaymentButton = forwardRef<
  HTMLButtonElement,
  ButtonProps & {
    description: string;
    onSuccess: (paymentId: string) => void;
    onFailure: () => void;
  } & (
      | {
          paymentType: typeof PaymentType.EVENT;
          amountInINR: number;
        }
      | {
          paymentType: typeof PaymentType.MEMBERSHIP;
          amountInINR?: never;
        }
    )
>(
  (
    { description, paymentType, amountInINR, onFailure, onSuccess, ...props },
    ref,
  ) => {
    const { data: session } = useSession();
    if (!session) return null;

    return (
      <>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <Button
          ref={ref}
          onClick={async () => {
            const { success: createSuccess, data: inputData } =
              createOrderInputZ.safeParse({
                paymentType: paymentType,
                amountInINR: amountInINR,
              });
            if (!createSuccess)
              return toast.error("Failed to parse payment order input");

            toast.loading("Creating payment order...");
            const createRes = await fetch("/api/payment/create", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(inputData),
            });
            toast.dismiss();

            if (!createRes.ok) {
              toast.error(await createRes.text());
              return;
            }

            const { success: outputSuccess, data: paymentOrderData } =
              createOrderOutputZ.safeParse(await createRes.json());
            if (!outputSuccess)
              return toast.error("Failed to parse payment order data");

            const paymentObject = new window.Razorpay({
              key: env.NEXT_PUBLIC_RAZORPAY_API_KEY_ID,
              order_id: paymentOrderData.orderId,
              amount: paymentOrderData.orderAmount,
              currency: paymentOrderData.orderCurrency,
              name: "FiniteLoop Club",
              description: description,
              image: `${env.NEXT_PUBLIC_CANONICAL_URL}assets/images/flc_logo_crop.png`,
              notes: {
                address: "NMAM Institute of Technology, Nitte, Karkala",
              },
              theme: {
                color: "#3399cc",
              },
              prefill: {
                name: session.user.name,
                email: session.user.email,
                contact: session.user.phone,
              },
              handler: async (response) => {
                const { success: inputSuccess, data: inputData } =
                  savePaymentInputZ.safeParse({
                    paymentType: paymentType,
                    amountInINR: amountInINR,
                    paymentName: description,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpaySignature: response.razorpay_signature,
                  });
                if (!inputSuccess) {
                  onFailure();
                  toast.error("Failed to parse payment input");
                  return;
                }

                toast.loading("Saving payment details...");
                const verifyRes = await fetch("/api/payment/save", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(inputData),
                });
                toast.dismiss();

                if (!verifyRes.ok) {
                  onFailure();
                  toast.error(await verifyRes.text());
                  return;
                }

                const { success: outputSuccess, data: outputData } =
                  savePaymentOutputZ.safeParse(await verifyRes.json());
                if (!outputSuccess) {
                  onFailure();
                  toast.error("Failed to parse payment output");
                  return;
                }

                toast.success("Payment saved successfully");
                onSuccess(outputData.paymentDbId);
              },
            });
            paymentObject.open();
          }}
          {...props}
        >
          Pay now
        </Button>
      </>
    );
  },
);
PaymentButton.displayName = "PaymentButton";

export default PaymentButton;
