import { FC } from "react";
// not a great solution: TCartItem
import { CartItem as TCartItem } from "../../store/cart/cart.slice";
import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
} from "./cart-item-card.styles";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { title, smallImageUrl, quantity, printType } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImage src={smallImageUrl} alt={title}></CartItemImage>
      <ItemDetails>
        <span>{title}</span>
        <span>
          {quantity} x ${printType.price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
