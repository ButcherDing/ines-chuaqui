import { useState } from "react";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { selectCartCount } from "../../store/cart/cart.slice";
import { useAppSelector } from "../../store/hooks/hooks";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useOutsideClick } from "../../store/hooks/event-listeners";

const CartIcon = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = useAppSelector(selectCartCount);

  const handleClickOutside = () => {
    setIsCartOpen(false);
  };
  const ref = useOutsideClick(handleClickOutside);

  const handleContainerClick = (event: React.MouseEvent<HTMLElement>) => {
    // cartToggler();
    event.stopPropagation();
  };
  const iconClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const cartToggler = () => {
      setIsCartOpen(!isCartOpen);
    };
    cartToggler();
    handleContainerClick(event);
  };

  const enterKeyHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") setIsCartOpen(!isCartOpen);
    console.log("enter pressed");
  };

  return (
    <CartIconContainer
      role={"button"}
      tabIndex={0}
      onClick={iconClickHandler}
      onKeyDown={enterKeyHandler}
      ref={ref}
    >
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
      <div onClick={handleContainerClick} onKeyDown={enterKeyHandler}>
        {isCartOpen && <CartDropdown closeClickHandler={handleClickOutside} />}
      </div>
    </CartIconContainer>
  );
};

export default CartIcon;

// onclick from
