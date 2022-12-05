import { useEffect, useRef, FC } from "react";

import "./cart-dropdown.styles";
import Button from "../button/button.component";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { CartItem, selectCartItems } from "../../store/cart/cart.slice";
import CartItemCard from "../cart-item/cart-item-card.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { LeafButton } from "../button/button.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate("/checkout");

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem: CartItem) => (
            <CartItemCard
              cartItem={cartItem}
              key={cartItem.title + " cart " + cartItem.printType.size}
            ></CartItemCard>
          ))
        ) : (
          <EmptyMessage>No items in cart</EmptyMessage>
        )}
      </CartItems>

      <LeafButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</LeafButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
