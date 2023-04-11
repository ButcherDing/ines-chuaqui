import { FC } from "react";
import { CartItem, removeCartItem } from "../../store/cart/cart.slice";
import { useAppDispatch } from "../../store/hooks/hooks";
import { LeafButton } from "../button/button.styles";
import { RmButton } from "./remove-button.styles";

type RemoveButtonProps = {
  cartItem: CartItem;
};

const RemoveButton: FC<RemoveButtonProps> = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  const removeItemHandler = () => {
    dispatch(removeCartItem(cartItem));
  };

  return <button onClick={removeItemHandler}>&#10005;</button>;
};

export default RemoveButton;
