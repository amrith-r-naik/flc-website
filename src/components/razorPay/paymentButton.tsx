import { type PaymentType } from "@prisma/client";
import { useSession } from "next-auth/react";
import Script from "next/script";
import React, { forwardRef } from "react";
import { toast } from "sonner";

import { Button, type ButtonProps } from "~/components/ui/button";

import { env } from "~/env";
import { api } from "~/utils/api";

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
          teamId: string;
        }
      | {
          paymentType: typeof PaymentType.MEMBERSHIP;
          amountInINR?: never;
          teamId?: never;
        }
    )
>(
  (
    {
      description,
      paymentType,
      amountInINR,
      teamId,
      onFailure,
      onSuccess,
      ...props
    },
    ref,
  ) => {
    const { data: session } = useSession();
    const createOrder = api.payment.createOrder.useMutation();
    const savePayment = api.payment.savePayment.useMutation();

    if (!session) return null;

    return (
      <>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <Button
          className="z-20"
          ref={ref}
          onClick={async () => {
            toast.loading("Creating payment order...");
            const paymentOrder = await createOrder.mutateAsync(
              paymentType === "MEMBERSHIP"
                ? {
                    paymentType: paymentType,
                  }
                : {
                    paymentType: paymentType,
                    amountInINR: amountInINR,
                  },
            );
            toast.dismiss();
            toast.success("Payment order created successfully");

            const paymentObject = new window.Razorpay({
              key: env.NEXT_PUBLIC_RAZORPAY_API_KEY_ID,
              order_id: paymentOrder.orderId,
              amount: paymentOrder.orderAmount,
              currency: paymentOrder.orderCurrency,
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
                toast.loading("Saving payment details...");
                const payment = await savePayment.mutateAsync(
                  paymentType === "MEMBERSHIP"
                    ? {
                        paymentType: paymentType,
                        paymentName: description,
                        razorpayOrderId: paymentOrder.orderId,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpaySignature: response.razorpay_signature,
                      }
                    : {
                        paymentType: paymentType,
                        amount: amountInINR,
                        teamId: teamId,
                        paymentName: description,
                        razorpayOrderId: paymentOrder.orderId,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpaySignature: response.razorpay_signature,
                      },
                );
                toast.dismiss();
                toast.success("Payment saved successfully");
                onSuccess(payment.paymentDbId);
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
