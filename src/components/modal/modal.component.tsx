import { FC } from "react";
import { addCartItem, initialState } from "../../store/cart/cart.slice";
import { Piece } from "../../store/gallery/gallery.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import {
  ModalContainer,
  ModalButtons,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ProductThumbnail,
  ModalTitle,
} from "./modal.styles";

import { InvertedLeafButton } from "../button/button.styles";
import ModalForm from "../modal-form/modal-form.component";
import Fader from "../fader/fader.component";

type ModalProps = {
  closeModalHandler: () => void;
  piece: Piece;
};

const Modal: FC<ModalProps> = ({ closeModalHandler, piece }) => {
  const dispatch = useAppDispatch();
  const addItemHandler = () => {
    dispatch(addCartItem(currentItem));
  };
  const currentItem = useAppSelector((state) => state.cart.currentItem);

  return (
    <ModalContainer onClick={closeModalHandler}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{piece.title}</ModalTitle>
          <ProductThumbnail src={piece.smallImageUrl} />
        </ModalHeader>
        {/* <ModalBody>
          <p>{piece.description}</p>
        </ModalBody> */}
        <ModalFooter>
          <ModalForm piece={piece} />

          <Fader
            faderMessage={
              currentItem.pieceId === initialState.currentItem.pieceId
                ? "choose a size"
                : "updated cart"
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
  );
};

export default Modal;
