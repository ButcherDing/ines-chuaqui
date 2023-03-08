import { FC } from "react";
import { useDispatch } from "react-redux";

import { removeCartItem } from "../../store/cart/cart.slice";
import { CartItem as TCartItem } from "../../store/cart/cart.slice";
import QuantityButton from "../quantity-button/quantity-button.component";
import {
  CartItemContainer,
  CartItemDetail,
  CartItemImageContainer,
  Quantity,
  RemoveButton,
} from "./cart-item.styles";

type CartItemProps = {
  cartItem: TCartItem;
  showImage: boolean;
};

const CartItem: FC<CartItemProps> = ({ cartItem, showImage = false }) => {
  const { smallImageUrl, title, printType } = cartItem;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeCartItem(cartItem));
  };

  return (
    <CartItemContainer>
      {showImage && (
        <CartItemImageContainer>
          <img src={smallImageUrl} alt={title}></img>
        </CartItemImageContainer>
      )}

      <CartItemDetail>{title}</CartItemDetail>
      <CartItemDetail>{printType.size}</CartItemDetail>
      <Quantity>
        <QuantityButton cartItem={cartItem} />
      </Quantity>
      <CartItemDetail>{printType.price}</CartItemDetail>

      <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
