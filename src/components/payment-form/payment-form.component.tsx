import { FormEvent, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import { useSelector } from "react-redux";

import {
  selectCartTotal,
  logTransactionToFirebase,
} from "../../store/cart/cart.slice";
import { selectCurrentUser } from "../../store/user/user-slice";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  PaymentTitle,
} from "./payment-form.styles";
import { useAppDispatch } from "../../store/hooks/hooks";

// remember this pattern for type guarding.
const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const PaymentForm = () => {
  const dispatch = useAppDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Netlify serverless function
  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    // elements.getElement(CardElement) could return null value, but this is not assignable to the card element
    const cardDetails = elements.getElement(CardElement);
    if (!ifValidCardElement(cardDetails)) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
      // needs to be logged as well, as an error
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
        // dispatch an action which tracks what was sold,
        console.log(paymentResult);
        dispatch(logTransactionToFirebase(paymentResult));
        // TODO reset cart to initial state
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <PaymentTitle>Credit Card Payment: </PaymentTitle>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

// caution - any button inside FormContainer will be a submission button!

export default PaymentForm;
