import { FC } from "react";
import { useSelector } from "react-redux";
import {
  addCartItem,
  CartItem,
  minusCartItem,
  selectCartItem,
} from "../../store/cart/cart.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

// import { setCartItems } from "../../store/cart/cart.slice";
import { QuantityContainer, Arrow, ItemCount } from "./quantity-button.styles";

type QuantityButtonProps = {
  cartItem: CartItem;
};

export const QuantityButton: FC<QuantityButtonProps> = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  // const cartItem = useAppSelector(selectCartItem)

  const decrementHandler = () => {
    dispatch(minusCartItem(cartItem));
  };
  const incrementHandler = () => {
    dispatch(addCartItem(cartItem));
  };

  return (
    <QuantityContainer>
      <>
        <Arrow onClick={decrementHandler}>&#10094;</Arrow>
        <ItemCount>{cartItem.quantity > -1 ? cartItem.quantity : 0}</ItemCount>
        <Arrow onClick={incrementHandler}>&#10095;</Arrow>
      </>
    </QuantityContainer>
  );
};

export default QuantityButton;
