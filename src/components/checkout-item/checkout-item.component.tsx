import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
// import QuantityButton from "../quantity-button/quantity-button.component";

import { removeCartItem } from "../../store/cart/cart.slice";
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
  const { smallImageUrl, title, printPrices } = cartItem;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeCartItem(cartItem));
  };

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={smallImageUrl} alt={title}></img>
      </CheckoutImageContainer>

      <CheckoutItemDetail>{title}</CheckoutItemDetail>
      {/* // I want to style this directly instead of having to stick it in a div like a divhead. */}
      <Quantity>
        <QuantityButton cartItem={cartItem} />
      </Quantity>

      <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
