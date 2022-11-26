import { ChangeEvent, FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import { Piece } from "../../store/gallery/gallery.slice";

import { useKeyPress } from "../../store/hooks/useKeyPress.hook";

import {
  ModalBody,
  ModalContainer,
  ModalButtonContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalForm,
} from "./modal.styles";
import Button from "../button/button.component";

import { setCartItems } from "../../store/cart/cart.slice";
import {
  SmallInvertedLeafButton,
  LeafButton,
  SmallTagButton,
  InvertedLeafButton,
} from "../button/button.styles";

export type ModalProps = {
  piece: Piece;
};
// Problems -
export const Modal: FC<ModalProps> = ({ piece }) => {
  // const handleKeyPress = (e: Event) => {};
  const [printType, setPrintType] = useState({ size: "", price: -1 });
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();

  const showModalHandler = () => {
    setShowModal(showModal ? false : true);
  };
  const addItemHandler = (cartItemToAdd: Piece) => {
    if (printType.size === "" || printType.price === -1) return;
    const newCartItem = {
      ...cartItemToAdd,
      buyType: printType,
      quantity: 1,
      cartId: `${cartItemToAdd.id + printType.size}`,
    };

    dispatch(setCartItems(newCartItem));
    // showModalHandler();
  };
  // TODO solve no objects as values problem
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!event.target.value) return;
    const selectedPrintType = piece.printPrices[+event.target.value];
    setPrintType(selectedPrintType);
  };

  // escape key from modal listener
  if (useKeyPress("Escape") && showModal) showModalHandler();
  return (
    <>
      <SmallInvertedLeafButton onClick={showModalHandler}>
        {piece.title}
      </SmallInvertedLeafButton>
      {showModal && (
        <ModalContainer
          onClick={showModalHandler}
          // onKeyDown={(e) => handleKeyPress(e)}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h2>{piece.title}</h2>
            </ModalHeader>
            <ModalBody>
              <p>{piece.description}</p>
            </ModalBody>
            <ModalFooter>
              <ModalForm>
                <select
                  defaultValue={"default"}
                  onChange={handleChange}
                  name="slct"
                >
                  <option disabled value={"default"}>
                    Select print size:
                  </option>
                  {piece.printPrices.map((printType, index: number) => (
                    <option key={piece.id + printType.size} value={index}>
                      {printType.size} --- ${printType.price}
                    </option>
                  ))}
                </select>
              </ModalForm>

              <ModalButtonContainer>
                <InvertedLeafButton onClick={() => addItemHandler(piece)}>
                  Add Print to Cart
                </InvertedLeafButton>
                <InvertedLeafButton onClick={showModalHandler}>
                  Close
                </InvertedLeafButton>
              </ModalButtonContainer>
            </ModalFooter>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
