import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import {
  AddressFormContainer,
  Forms,
  PaymentFormContainer,
  StripeFormsContainer,
} from "./stripe-forms.styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { selectCartTotal } from "../../store/cart/cart.slice";
import { LeafButton } from "../button/button.styles";
import OrderSummary from "../order-summary/order-summary.component";
import { FC, FormEvent, useState } from "react";
import { StripeAddressElementChangeEvent } from "@stripe/stripe-js";

export type StripeFormsProps = {
  clientSecret: string;
};

const StripeForms: FC<StripeFormsProps> = () => {
  const dispatch = useAppDispatch();
  const cartTotal = useAppSelector(selectCartTotal);
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessingPayment(true);
    // elements.getElement(CardElement) could return null value, but this is not assignable to the card element, so we have to do this check.
    if (!elements || !stripe) return;

    const cardDetails = elements.getElement(PaymentElement);
    console.log(cardDetails);
    const shippingDetails = elements.getElement(AddressElement);
    console.log(shippingDetails);

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url:
          "https://ines-chuaqui-preview.netlify.app/checkout/success/",
      },
    });

    if (error) {
      console.log(error);
      alert(error.message);
    } else {
      alert("payment complete");
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }

    setIsProcessingPayment(false);
  };

  const addressChangeHandler = (event: StripeAddressElementChangeEvent) => {
    if (event.complete) {
      // do a thing
    }
  };
  // TODO - do a thing when the event completes?
  // TODO: get stripe shipping info into firebase
  // TODO: fix error flow

  return (
    <>
      <StripeFormsContainer onSubmit={handleSubmit}>
        <OrderSummary />
        <Forms>
          <AddressFormContainer>
            <h4>Shipping Address</h4>
            <AddressElement
              options={{
                mode: "shipping",
                allowedCountries: ["US", "CA"],
              }}
              onChange={addressChangeHandler}
            />
          </AddressFormContainer>

          <PaymentFormContainer>
            <h4>Payment Details</h4>
            <PaymentElement />
          </PaymentFormContainer>
          <LeafButton disabled={cartTotal === 0 || isProcessingPayment}>
            Pay now
          </LeafButton>
        </Forms>
      </StripeFormsContainer>
    </>
  );
};

// caution - any button inside FormContainer will be a submission button!

export default StripeForms;
