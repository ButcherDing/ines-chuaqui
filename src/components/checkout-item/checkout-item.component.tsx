import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
// import QuantityButton from "../quantity-button/quantity-button.component";

import {
  addCartItem,
  minusCartItem,
  removeCartItem,
} from "../../store/cart/cart.slice";
// import { removeItemFromCart } from "../../store/cart/cart.action";
import { CartItem } from "../../store/cart/cart.slice";
import QuantityButton from "../quantity-button/quantity-button.component";
import {
  CheckoutItemContainer,
  CheckoutItemDetail,
  CheckoutImageContainer,
  Quantity,
  RemoveButton,
} from "./checkout-item.styles";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const { smallImageUrl, title, printType } = cartItem;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeCartItem(cartItem));
  };

  const addItemHandler = () => {
    dispatch(addCartItem(cartItem));
  };
  const minusItemHandler = () => {
    dispatch(minusCartItem(cartItem));
  };

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={smallImageUrl} alt={title}></img>
      </CheckoutImageContainer>

      <CheckoutItemDetail>{title}</CheckoutItemDetail>
      <CheckoutItemDetail>{printType.size}</CheckoutItemDetail>
      <Quantity>
        <QuantityButton cartItem={cartItem} />
      </Quantity>
      <CheckoutItemDetail>{printType.price}</CheckoutItemDetail>

      <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
