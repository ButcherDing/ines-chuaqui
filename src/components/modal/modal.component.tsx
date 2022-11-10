import { ChangeEvent, FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import { Piece, setShowModal } from "../../store/gallery/gallery.slice";

import { useKeyPress } from "../../store/hooks/useKeyPress.hook";

import {
  ModalBody,
  ModalContainer,
  ModalButtonContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "./modal.styles";
import Button from "../button/button.component";

import { CartItem, setCartItems } from "../../store/cart/cart.slice";

import { Print } from "../../store/cart/cart.slice";

export type ModalProps = {
  piece: Piece;
};
// not ideal having all this below - the actual modal should be factored out? or at least styles built on a single modal component type.
export const Modal: FC<ModalProps> = ({ piece }) => {
  const { title, description, printPrices } = piece;
  const [printType, setPrintType] = useState(piece.printPrices[0]);

  const dispatch = useAppDispatch();
  const showModal = useAppSelector((state) => state.gallery.showModal);

  const handleKeyPress = (e: Event) => {};

  const showModalHandler = () => {
    dispatch(setShowModal(showModal ? false : true));
  };
  const addItemHandler = (cartItemToAdd: Piece) => {
    if (printType === null) return;
    const newCartItem = { ...cartItemToAdd, buyType: printType, quantity: 1 };

    console.log("newCartItem" + newCartItem);
    dispatch(setCartItems(newCartItem));
    showModalHandler();
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
      <Button onClick={showModalHandler}>Details</Button>
      {showModal && (
        <ModalContainer
          onClick={showModalHandler}
          // onKeyDown={(e) => handleKeyPress(e)}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h3>{title}</h3>
            </ModalHeader>
            <ModalBody>
              <p>{description}</p>
            </ModalBody>
            <ModalFooter>
              <p>Select Print Size</p>
              <form>
                <select
                  defaultValue={"0"}
                  onChange={handleChange}
                  name="dropdown"
                >
                  {/* TODO insert dynamic print sizes */}
                  <option disabled value={"default"}>
                    Select a print size:
                  </option>
                  {printPrices.map((print, index: number) => (
                    <option
                      key={piece.id + print.price + print.size}
                      value={index}
                    >
                      {print.size} --- ${print.price}
                    </option>
                  ))}
                </select>
              </form>
              <ModalButtonContainer>
                <Button onClick={() => addItemHandler(piece)}>
                  Add Print to Cart
                </Button>
                <Button onClick={showModalHandler}>Close</Button>
              </ModalButtonContainer>
            </ModalFooter>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
