import { Fragment, useState } from "react";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { selectCartCount } from "../../store/cart/cart.slice";
import { useAppSelector } from "../../store/hooks/hooks";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useOutsideClick } from "../../store/hooks/event-listeners";

const CartIcon = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = useAppSelector(selectCartCount);

  const handleClickOutside = () => {
    console.log("clicked outside container");
    setIsCartOpen(false);
  };
  const ref = useOutsideClick(handleClickOutside);

  const handleContainerClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("I am clicking on the container");
    // cartToggler();
    event.stopPropagation();
  };
  const iconClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const cartToggler = () => {
      console.log("clicked icon", setIsCartOpen);
      setIsCartOpen(!isCartOpen);
    };
    cartToggler();
    handleContainerClick(event);
  };

  return (
    <Fragment>
      <div>
        <CartIconContainer onClick={iconClickHandler} ref={ref}>
          <ShoppingIcon className="shopping-icon" />
          <ItemCount className="item-count">{cartCount}</ItemCount>
          <div onClick={handleContainerClick}>
            {isCartOpen && <CartDropdown />}
          </div>
        </CartIconContainer>
      </div>
    </Fragment>
  );
};

export default CartIcon;

// onclick from
