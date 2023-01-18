import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripeFormsContainer } from "./stripe-forms.styles";
import { useAppSelector } from "../../store/hooks/hooks";
import { selectCartTotal } from "../../store/cart/cart.slice";
import AddressForm from "../address-form/address-form.component";
import { LeafButton } from "../button/button.styles";
import OrderSummary from "../order-summary/order-summary.component";
import { FC, FormEvent, useState } from "react";

// const ifValidPaymentElement = (
//   card: StripeCardElement | null
// ): card is StripeCardElement => card !== null;

// const ifValidAddressElement = (
//   address: StripeAddressElement | null
// ): address is StripeAddressElement => address !== null;

export type StripeFormsProps = {
  clientSecret: string;
};

const StripeForms: FC<StripeFormsProps> = () => {
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
    // const shippingDetails = elements.getElement(AddressElement);
    // if (!ifValidAddressElement(shippingDetails)) return;

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "localhost:8888/checkout/success",
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      console.log(error);
      alert(JSON.stringify(error));
    } else {
      alert("payment complete");
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }

    setIsProcessingPayment(false);
  };

  // TODO: get stripe shipping info into firebase
  // TODO: fix error flow

  // TODO: Style checkout form
  // TODO: Style checkout form

  return (
    <>
      <OrderSummary />
      <StripeFormsContainer onSubmit={handleSubmit}>
        <AddressForm />
        <h4>Payment Details</h4>
        <PaymentElement />
        <LeafButton disabled={cartTotal === 0}>Pay now</LeafButton>
      </StripeFormsContainer>
    </>
  );
};

// caution - any button inside FormContainer will be a submission button!

export default StripeForms;
