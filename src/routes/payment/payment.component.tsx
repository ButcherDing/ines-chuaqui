import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";

import {
  fetchPaymentIntent,
  stripePromise,
} from "../../utils/stripe/stripe.utils";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { CartItem } from "../../store/cart/cart.slice";

import StripeForms from "../../components/stripe-forms/stripe-forms.component";
import { PaymentContainer } from "./payment.styles";

export const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const options = { clientSecret: clientSecret };

  useEffect(() => {
    const paymentIntentHandler = async (cartItems: CartItem[]) => {
      const client_secret = await fetchPaymentIntent(cartItems);
      console.log("client secret in useEffect:", client_secret);
      if (!client_secret) return console.error("error fetching from stripe");
      setClientSecret(client_secret);
    };
    paymentIntentHandler(cartItems);
  }, []);

  console.log(clientSecret);

  return (
    <PaymentContainer>
      {clientSecret !== "" && (
        <Elements stripe={stripePromise} options={options}>
          <StripeForms clientSecret={clientSecret} />
        </Elements>
      )}
    </PaymentContainer>
  );
};

export default Payment;
