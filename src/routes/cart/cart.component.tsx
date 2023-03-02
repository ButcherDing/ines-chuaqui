import { selectCartItems, selectCartTotal } from "../../store/cart/cart.slice";

import { CartContainer, CartHeaders, HeaderBlock, Total } from "./cart.styles";
import { LeafButton } from "../../components/button/button.styles";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../store/hooks/hooks";
import CartItem from "../../components/cart-item/cart-item.component";

const Cart = () => {
  const cartItems = useAppSelector(selectCartItems);

  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <>
      <CartContainer>
        <CartHeaders>
          <HeaderBlock>Piece</HeaderBlock>
          <HeaderBlock>Title</HeaderBlock>
          <HeaderBlock>Size</HeaderBlock>
          <HeaderBlock>Quantity</HeaderBlock>
          <HeaderBlock>Price</HeaderBlock>
          <HeaderBlock>Remove</HeaderBlock>
        </CartHeaders>
        {cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.cartId} />
        ))}
        <Total>Total: $ {cartTotal}</Total>
        <Link to="../payment/stripe">
          <LeafButton disabled={cartTotal === 0}>Proceed to Payment</LeafButton>
        </Link>
      </CartContainer>
    </>
  );
};

export default Cart;
