import { FC, useState } from "react";
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
  ProductThumbnail,
} from "./modal-button.styles";

import {
  addCartItem,
  initialState,
  chooseItem,
} from "../../store/cart/cart.slice";
import {
  InvertedLeafButton,
  SmallInvertedLeafButton,
} from "../button/button.styles";
import { Fader } from "../fader/fader.component";

import ModalForm from "../modal-form/modal-form.component";

export type ModalProps = {
  piece: Piece;
};
export const ModalButton: FC<ModalProps> = ({ piece }) => {
  const dispatch = useAppDispatch();
  const currentItem = useAppSelector((state) => state.cart.currentItem);
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(showModal ? false : true);
  };

  const addItemHandler = () => {
    dispatch(addCartItem(currentItem));
  };

  const closeModalHandler = () => {
    showModalHandler();
    // set current item back to default when we close the modal
    dispatch(chooseItem(initialState.currentItem));
  };

  if (useKeyPress("Escape")) closeModalHandler();

  return (
    <>
      <SmallInvertedLeafButton onClick={showModalHandler}>
        {piece.title}
      </SmallInvertedLeafButton>
      {showModal ? (
        <ModalContainer onClick={showModalHandler}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h2>{piece.title}</h2>
              <ProductThumbnail src={piece.smallImageUrl} />
            </ModalHeader>
            <ModalBody>
              <p>{piece.description}</p>
            </ModalBody>
            <ModalFooter>
              <ModalForm piece={piece} />

              <Fader
                faderMessage={
                  currentItem.pieceId === -1 ? "choose a size" : "updated cart"
                }
              />
              <ModalButtons>
                <InvertedLeafButton onClick={() => addItemHandler()}>
                  Add to cart
                </InvertedLeafButton>

                <InvertedLeafButton onClick={() => closeModalHandler()}>
                  Close
                </InvertedLeafButton>
              </ModalButtons>
            </ModalFooter>
          </ModalContent>
        </ModalContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalButton;
