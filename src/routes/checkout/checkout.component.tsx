import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";

import { selectCartItems, selectCartTotal } from "../../store/cart/cart.slice";
import PaymentForm from "../../components/payment-form/payment-form.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { stripePromise } from "../../utils/stripe/stripe.utils";

import {
  CheckoutContainer,
  CheckoutHeaders,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeaders>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Title</HeaderBlock>
        <HeaderBlock>Size</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeaders>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.cartId} />
      ))}
      <Total>Total: $ {cartTotal}</Total>

      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </CheckoutContainer>
  );
};

export default Checkout;
