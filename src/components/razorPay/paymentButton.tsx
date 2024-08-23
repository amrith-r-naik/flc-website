import { type inferProcedureOutput } from "@trpc/server";
import { useState } from "react";

import { type AppRouter } from "~/server/api/root";

import { type RazorpayOrderResponse } from "~/pages/api/payment/create";

import { api } from "~/utils/api";
import { checkoutOptions } from "~/utils/razorPay";

type PropType = {
  amount: number;
  userId: number;
  name: string;
  onPaymentSuccess?: (
    response: inferProcedureOutput<AppRouter["payment"]["createPayment"]>,
  ) => void;
};

function loadScript(src: string) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function Payment({
  amount,
  userId,
  name,
  onPaymentSuccess,
}: PropType) {
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);
  const savePayment = api.payment.createPayment.useMutation({
    onSuccess: (data) => {
      console.log("Payment saved successfully", data);
      if (onPaymentSuccess) {
        onPaymentSuccess(data); // Execute the passed callback function
      }
    },
    onError: (error) => {
      console.error("Error saving payment", error);
    },
  });

  async function displayRazorpay() {
    if (!isRazorpayLoaded) {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js",
      );
      if (!res) {
        alert("Razorpay failed to load!!");
        return;
      }
      setIsRazorpayLoaded(true);
    }

    // creating order in server
    const response = await fetch("/api/payment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }), // Convert the amount to paise
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const paymentOrderData = (await response.json()) as RazorpayOrderResponse;
    const { order } = paymentOrderData;

    // creating checkout Option
    const paymentObject = new window.Razorpay(
      checkoutOptions(order, savePayment, name, userId),
    );
    paymentObject.open();
  }

  return (
    <div className="App ">
      <header className="App-header">
        <button
          onClick={displayRazorpay}
          className="card-button rounded-md bg-white p-2 text-black"
        >
          Pay now
        </button>
      </header>
    </div>
  );
}
