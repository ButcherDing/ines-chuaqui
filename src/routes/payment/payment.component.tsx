import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";

import { stripePromise } from "../../utils/stripe/stripe.utils";

import { useAppSelector } from "../../store/hooks/hooks";
import { selectCartTotal } from "../../store/cart/cart.slice";

import StripeForms from "../../components/stripe-forms/stripe-forms.component";

export const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const cartTotal = useAppSelector(selectCartTotal);

  const options = { clientSecret: clientSecret };

  const paymentIntentHandler = async (cartTotal: number) => {
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json());

    if (response.statusCode === 400) throw new Error(response);

    const {
      paymentIntent: { client_secret },
    } = response;

    setClientSecret(client_secret);
  };

  useEffect(() => {
    paymentIntentHandler(cartTotal);
  }, [cartTotal]);

  console.log(clientSecret);

  return (
    <>
      {clientSecret !== "" && (
        <Elements stripe={stripePromise} options={options}>
          <StripeForms clientSecret={clientSecret} />
        </Elements>
      )}
    </>
  );
};

export default Payment;
