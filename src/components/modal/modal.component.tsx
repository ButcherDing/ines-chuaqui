import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import { Piece } from "../../store/gallery/gallery.slice";

import { useKeyPress } from "../../store/hooks/event-listeners";

import {
  ModalBody,
  ModalContainer,
  ModalButtons,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalMessage,
} from "./modal.styles";
import Button from "../button/button.component";

import {
  CartItem,
  addCartItem,
  initialState,
  chooseItem,
} from "../../store/cart/cart.slice";
import {
  SmallInvertedLeafButton,
  LeafButton,
  SmallTagButton,
  InvertedLeafButton,
} from "../button/button.styles";
import { Fader } from "../fader/fader.component";
import QuantityButton from "../quantity-button/quantity-button.component";

import ModalForm from "../modal-form/modal-form.component";

export type ModalProps = {
  piece: Piece;
};
// Problems -
export const Modal: FC<ModalProps> = ({ piece }) => {
  // const handleKeyPress = (e: Event) => {};
  const dispatch = useAppDispatch();
  const currentItem: CartItem = useAppSelector(
    (state) => state.cart.currentItem
  );
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const showModalHandler = () => {
    dispatch(chooseItem(initialState.currentItem));
    setShowModal(showModal ? false : true);
  };
  // console.log(currentItem);
  const addItemHandler = () => {
    dispatch(addCartItem(currentItem));
    setShowMessage(true);
  };

  // escape key from modal listener
  if (useKeyPress("Escape") && showModal) showModalHandler();
  return (
    <>
      <SmallInvertedLeafButton onClick={showModalHandler}>
        {piece.title}
      </SmallInvertedLeafButton>
      {showModal && (
        <ModalContainer onClick={showModalHandler}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h2>{piece.title}</h2>
            </ModalHeader>
            <ModalBody>
              <p>{piece.description}</p>
            </ModalBody>
            <ModalFooter>
              <ModalForm piece={piece} />

              <Fader text={showMessage ? "updated cart" : "choose a size"} />
              <ModalButtons>
                <InvertedLeafButton onClick={() => addItemHandler()}>
                  Add to cart
                </InvertedLeafButton>

                <InvertedLeafButton onClick={showModalHandler}>
                  Close
                </InvertedLeafButton>
              </ModalButtons>
            </ModalFooter>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
