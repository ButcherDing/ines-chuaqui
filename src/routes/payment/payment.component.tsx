import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";

import {
  fetchPaymentIntent,
  stripePromise,
} from "../../utils/stripe/stripe.utils";

import { useAppSelector } from "../../store/hooks/hooks";
import { CartItem } from "../../store/cart/cart.slice";

import StripeForms from "../../components/checkout/checkout.component";
import { PaymentContainer } from "./payment.styles";
import { Route, Routes } from "react-router-dom";
import CheckoutSuccess from "../checkout-success/checkout-success.component";

export const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const options = { clientSecret: clientSecret };

  useEffect(() => {
    const paymentIntentHandler = async (cartItems: CartItem[]) => {
      const client_secret = await fetchPaymentIntent(cartItems);
      if (!client_secret) return console.error("error fetching from stripe");
      setClientSecret(client_secret);
    };
    paymentIntentHandler(cartItems);
  }, [cartItems]);

  return (
    <>
      <PaymentContainer>
        {clientSecret !== "" && (
          <Elements stripe={stripePromise} options={options} key={clientSecret}>
            <Routes>
              <Route
                path="/stripe"
                element={<StripeForms clientSecret={clientSecret} />}
              />
              <Route path="/success/*" element={<CheckoutSuccess />} />
            </Routes>
          </Elements>
        )}
      </PaymentContainer>
    </>
  );
};

export default Payment;
