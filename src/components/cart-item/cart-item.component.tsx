import { FC } from "react";
import { CartItem as TCartItem } from "../../store/cart/cart.slice";
import QuantityButton from "../quantity-button/quantity-button.component";
import RemoveButton from "../remove-button/remove-button";
import {
  CartItemContainer,
  CartItemDetail,
  CartItemImageContainer,
  Quantity,
} from "./cart-item.styles";

type CartItemProps = {
  cartItem: TCartItem;
  showImage: boolean;
};

const CartItem: FC<CartItemProps> = ({ cartItem, showImage = false }) => {
  const { smallImageUrl, title, printType } = cartItem;


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

      <RemoveButton cartItem={cartItem}/>
    </CartItemContainer>
  );
};

export default CartItem;
