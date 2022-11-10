import { FC } from "react";
// not a great solution: TCartItem
import { CartItem as TCartItem } from "../../store/cart/cart.slice";
import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
} from "./cart-item.styles";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { title, smallImageUrl, quantity, buyType } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImage src={smallImageUrl} alt={title}></CartItemImage>
      <ItemDetails>
        <span>{title}</span>
        <span>
          {quantity} x ${buyType.price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
