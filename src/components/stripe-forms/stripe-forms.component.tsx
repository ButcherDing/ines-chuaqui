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
import FormInput from "../form-input/form-input.component";
import { ChangeEvent } from "react";
import { ContactForm } from "../../routes/contact/contact.styles";
import { getCurrentUser } from "../../utils/firebase/firebase.utils";

export type StripeFormsProps = {
  clientSecret: string;
};

const defaultFormFields = {
  email: "",
};

const StripeForms: FC<StripeFormsProps> = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.currentUser);
  const cartTotal = useAppSelector(selectCartTotal);
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

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
        return_url: "http://localhost:8888/payment/success/",
      },
      receipt_email: email,
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
      // potentially do a thing
    }
  };
  // TODO - do a thing when the event completes?
  // TODO: get stripe shipping info into firebase

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
            {!user && (
              <ContactForm onSubmit={handleSubmit}>
                <FormInput
                  label="Email"
                  type="email"
                  required
                  onChange={handleChange}
                  name="email"
                  value={email}
                />
              </ContactForm>
            )}
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
