import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../store/cart/cart.slice";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeaders,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import { LeafButton } from "../../components/button/button.styles";
import { Link } from "react-router-dom";

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
      <Link to="payment">
        <LeafButton disabled={cartTotal === 0}>Proceed to Payment</LeafButton>
      </Link>
    </CheckoutContainer>
  );
};

export default Checkout;
