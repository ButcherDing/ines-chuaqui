import { loadStripe } from "@stripe/stripe-js";
import { CartItem } from "../../store/cart/cart.slice";

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);

export const fetchPaymentIntent = async (cartItems) => {
  const response = await fetch("/.netlify/functions/create-payment-intent", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cartItems }),
  }).then((res) => res.json());
  /// TODO calc total on backend in netlify files.

  if (response.statusCode === 400) throw new Error(response);

  const {
    paymentIntent: { client_secret },
  } = response;
  console.log("client_secret:", client_secret);
  return client_secret;
};

export const fetchTotal = async (cartItems) => {
  console.log(cartItems);
  const response = await fetch("/.netlify/functions/fetch-total", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cartItems }),
  }).then((res) => res.json());

  if (response.statusCode === 400) throw new Error(response);

  const { total } = response;
  console.log("got new total from server:", total);
  console.log(response);

  return total;
};
