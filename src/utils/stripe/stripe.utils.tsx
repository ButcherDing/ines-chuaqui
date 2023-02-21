import { loadStripe, PaymentIntentConfirmParams } from "@stripe/stripe-js";
import { CartItem } from "../../store/cart/cart.slice";

export const stripePromise =
  typeof process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY === "string"
    ? loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
    : null;

export const fetchPaymentIntent = async (cartItems: CartItem[]) => {
  const response = await fetch("/.netlify/functions/create-payment-intent", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cartItems }),
  }).then((res) => res.json());

  if (response.statusCode === 400) throw new Error(response);

  const {
    paymentIntent: { client_secret },
  } = response;
  return client_secret;
};

export const fetchTotal = async (cartItems: CartItem[]) => {
  const response = await fetch("/.netlify/functions/fetch-total", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cartItems }),
  }).then((res) => res.json());

  if (response.statusCode === 400) throw new Error(response);

  const { total } = response;

  return total;
};

// in options receipt_email
export const updatePaymentIntent = async (
  paymentIntentId: string,
  options: PaymentIntentConfirmParams
) => {
  const response = await fetch("/.netlify/functions/fetch-total", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ paymentIntentId, options }),
  }).then((res) => res.json());

  if (response.statusCode === 400) throw new Error(response);

  const { paymentIntent } = response;

  return paymentIntent;
};
