import { type inferProcedureOutput } from "@trpc/server";
import { useSession } from "next-auth/react";
import { useState } from "react";

import { type AppRouter } from "~/server/api/root";

import { type RazorpayOrderResponse } from "~/pages/api/payment/create";

import { api } from "~/utils/api";
import { checkoutOptions } from "~/utils/razorPay";

export default function Payment({
  amount,
  name,
  onPaymentSuccess,
}: {
  amount: number;
  name: string;
  onPaymentSuccess?: (
    response: inferProcedureOutput<AppRouter["payment"]["createPayment"]>,
  ) => void;
}) {
  const { data: session } = useSession();

  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  const createPayment = api.payment.createPayment.useMutation({
    onSuccess: (data) => {
      console.log("Payment saved successfully", data);
      if (onPaymentSuccess) onPaymentSuccess(data);
    },
    onError: (error) => {
      console.error("Error saving payment", error);
    },
  });

  return (
    <div>
      <header>
        <button
          onClick={async () => {
            if (!isRazorpayLoaded) {
              const script = document.createElement("script");
              script.src = "https://checkout.razorpay.com/v1/checkout.js";
              script.onload = () => {
                setIsRazorpayLoaded(true);
              };
              script.onerror = () => {
                alert("Razorpay failed to load!!");
              };
              document.body.appendChild(script);
            }

            // creating order in server
            const response = await fetch("/api/payment/create", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ amount: amount * 100 }), // Convert the amount to paise
            });

            if (!response.ok)
              throw new Error(`HTTP error! status: ${response.status}`);

            const paymentOrderData =
              (await response.json()) as RazorpayOrderResponse;
            const { order } = paymentOrderData;

            // creating checkout Option
            const paymentObject = new window.Razorpay(
              checkoutOptions(order, createPayment, name, session!.user.id),
            );
            paymentObject.open();
          }}
          className="card-button rounded-md bg-white p-2 text-black"
        >
          Pay now
        </button>
      </header>
    </div>
  );
}
