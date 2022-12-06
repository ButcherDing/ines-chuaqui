import { ChangeEvent, FC } from "react";
import {
  chooseItem,
  selectCartItem,
  makeDraftCartItem,
  selectCurrentItem,
} from "../../store/cart/cart.slice";
import { Piece } from "../../store/gallery/gallery.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import QuantityButton from "../quantity-button/quantity-button.component";
import { ModalFormContainer, Spacer } from "./modal-form.styles";

type ModalFormProps = {
  piece: Piece;
};

export const ModalForm: FC<ModalFormProps> = ({ piece }) => {
  const dispatch = useAppDispatch();
  const currentItem = useAppSelector(selectCurrentItem);
  console.log(currentItem);
  const cartItem = useAppSelector(selectCartItem);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const printType = piece.prints[+event.target.value];
    console.log(printType);

    const draftCartItem = makeDraftCartItem(piece, printType);
    console.log(draftCartItem);
    dispatch(chooseItem(draftCartItem));
  };

  return (
    <ModalFormContainer>
      <select defaultValue={"default"} onChange={handleChange} name="slct">
        <option disabled value={"default"}>
          Select print size:
        </option>
        {piece.prints.map((print, index: number) => (
          <option key={`${piece.pieceId + print.size}`} value={index}>
            {print.size} --- ${print.price}
          </option>
        ))}
      </select>
      {cartItem ? <QuantityButton cartItem={cartItem} /> : <></>}
    </ModalFormContainer>
  );
};

export default ModalForm;