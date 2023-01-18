import { FormEvent, useEffect, useState } from "react";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { stripePromise } from "../../utils/stripe/stripe.utils";

import { StripeFormsContainer } from "./payment.styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.slice";

import StripeForms from "../../components/payment-form/stripe-forms.component";

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

  // TODO - button not working to submit, try putting it inside payment component? Is it because it's not in a separate component from elements, or because of the button, or because it's not in the right order?
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
