import { useEffect } from "react";

import {
  getCartTotal,
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.slice";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeaders,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import { LeafButton } from "../../components/button/button.styles";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

const Checkout = () => {
  const cartItems = useAppSelector(selectCartItems);

  const cartTotal = useAppSelector(selectCartTotal);
  const serverCartTotal = useAppSelector((state) => state.cart.serverCartTotal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
    console.log("useEffect fired");
  }, [cartItems]);

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
      <Total>Total: $ {serverCartTotal}</Total>
      <Link to="payment">
        <LeafButton disabled={cartTotal === 0}>Proceed to Payment</LeafButton>
      </Link>
    </CheckoutContainer>
  );
};

export default Checkout;
