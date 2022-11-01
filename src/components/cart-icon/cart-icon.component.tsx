import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const cartCount = 5;

  const cartToggler = () => {
    console.log("toggles the cart?");
  };

  return (
    <CartIconContainer onClick={cartToggler}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
