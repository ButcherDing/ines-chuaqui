import { useEffect } from "react";

import { selectCartItems, selectCartTotal } from "../../store/cart/cart.slice";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeaders,
  HeaderBlock,
  Total,
} from "./cart.styles";
import { LeafButton } from "../../components/button/button.styles";
import { Link, Route, Routes } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import Payment from "../payment/payment.component";

const Cart = () => {
  const cartItems = useAppSelector(selectCartItems);

  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <>
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
        <Link to="../payment/stripe">
          <LeafButton disabled={cartTotal === 0}>Proceed to Payment</LeafButton>
        </Link>
      </CheckoutContainer>
    </>
  );
};

export default Cart;
