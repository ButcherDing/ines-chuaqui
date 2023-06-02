import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import {
  AddressFormContainer,
  CheckoutContainer,
  Forms,
  PaymentButton,
  PaymentFormContainer,
} from "./checkout.styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { selectCartTotal } from "../../store/cart/cart.slice";
import OrderSummary from "../order-summary/order-summary.component";
import { FC, FormEvent, useState } from "react";
import { StripeAddressElementChangeEvent } from "@stripe/stripe-js";
import FormInput from "../form-input/form-input.component";
import { ChangeEvent } from "react";
import { ContactForm } from "../../routes/contact/contact.styles";

export type CheckoutProps = {
  clientSecret: string;
};

const defaultFormFields = {
  email: "",
};

const Checkout: FC<CheckoutProps> = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cartTotal = useAppSelector(selectCartTotal);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  // const { email } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!elements || !stripe) return;
    setIsProcessingPayment(true);
    
    // const cardDetails = elements.getElement(PaymentElement);
    // const shippingDetails = elements.getElement(AddressElement);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url:
          process.env.NODE_ENV === "production"
            ? "https://ines-chuaqui-preview.netlify.app/payment/success"
            : "http://localhost:8888/payment/success/",
      },
      // receipt_email: email,
    });

    if (error) {
      console.error(error);
      alert(error.message);
    } else {
      alert("payment complete");
      // customer will be redirected to your `return_url`. For some payment
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

  return (
    <>
      <CheckoutContainer onSubmit={handleSubmit}>
        <p style={{ width: "75%" }}>
          <em>
            *** preview - for demonstration and testing only - please contact
            the artist to order prints or originals ***
          </em>
        </p>
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
            {/* 
            FOR COLLECTING EMAIL IF NECCESSARY
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
            )} */}
          </AddressFormContainer>

          <PaymentFormContainer>
            <h4>Payment Details</h4>
            <PaymentElement />
          </PaymentFormContainer>
          <PaymentButton disabled={cartTotal === 0 || isProcessingPayment}>
            submit payment
          </PaymentButton>
        </Forms>
      </CheckoutContainer>
    </>
  );
};

// caution - any button inside FormContainer will be a submission button!

export default Checkout;
