import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  minusCartItem,
  plusCartItem,
  selectCartItems,
} from "../../store/cart/cart.slice";
import { CartItem } from "../../store/cart/cart.slice";
import { setCartItems } from "../../store/cart/cart.slice";
import { QuantityContainer, Arrow, Value } from "./quantity-button.styles";

type QuantityButtonProps = {
  cartItem: CartItem;
};

export const QuantityButton: FC<QuantityButtonProps> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const plusHandler = () => {
    dispatch(plusCartItem(cartItem));
  };
  const minusHandler = () => {
    dispatch(minusCartItem(cartItem));
  };

  return (
    <QuantityContainer>
      <Arrow onClick={minusHandler}>&#10094;</Arrow>
      <Value>{cartItem.quantity}</Value>
      <Arrow onClick={plusHandler}>&#10095;</Arrow>
    </QuantityContainer>
  );
};

export default QuantityButton;
