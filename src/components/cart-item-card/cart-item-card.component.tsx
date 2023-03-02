import { FC } from "react";
// not a great solution: TCartItem
import { CartItem as TCartItem } from "../../store/cart/cart.slice";
import {
  CartItemCardContainer,
  CartItemCardImage,
  ItemDetails,
} from "./cart-item-card.styles";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItemCard: FC<CartItemProps> = ({ cartItem }) => {
  const { title, smallImageUrl, quantity, printType } = cartItem;

  return (
    <CartItemCardContainer>
      <CartItemCardImage src={smallImageUrl} alt={title}></CartItemCardImage>
      <ItemDetails>
        <span>{title}</span>
        <span>
          {quantity} ● {printType.size}
        </span>
      </ItemDetails>
    </CartItemCardContainer>
  );
};

export default CartItemCard;
