import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import type { Stripe } from "@stripe/stripe-js";

import {
  fetchPaymentIntent,
  stripePromise as utilStripePromise
} from "../../utils/stripe/stripe.utils";

import { useAppSelector } from "../../store/hooks/hooks";
import { CartItem } from "../../store/cart/cart.slice";

import Checkout from "../../components/checkout/checkout.component";
import { PaymentContainer } from "./payment.styles";

export const Payment = () => {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState("");
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const options = { clientSecret: clientSecret };

  useEffect(() => {
    setStripePromise(utilStripePromise)
  }, [])

  useEffect(() => {
    const paymentIntentHandler = async (cartItems: CartItem[]) => {
      const client_secret = await fetchPaymentIntent(cartItems);
      setClientSecret(client_secret);
    };
    paymentIntentHandler(cartItems);
  }, [cartItems]);

  return (
    <>
      <PaymentContainer>
        {stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={options} key={clientSecret}>
              <Checkout clientSecret={clientSecret} />
          </Elements>
        )}
      </PaymentContainer>
    </>
  );
};

export default Payment;
