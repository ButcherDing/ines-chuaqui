import { FC, useState } from "react";
import { useAppDispatch } from "../../store/hooks/hooks";

import { Piece } from "../../store/gallery/gallery.slice";

import { useKeyPress } from "../../store/hooks/event-listeners.hooks";

import { initialState, chooseItem } from "../../store/cart/cart.slice";
import { SmallInvertedLeafButton } from "../button/button.styles";

import Modal from "../modal/modal.component";

export type ModalProps = {
  piece: Piece;
};
export const ModalButton: FC<ModalProps> = ({ piece }) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(showModal ? false : true);
  };

  const closeModalHandler = () => {
    showModalHandler();
    dispatch(chooseItem(initialState.currentItem));
  };

  if (useKeyPress("Escape") && showModal) closeModalHandler();

  return (
    <>
      <SmallInvertedLeafButton onClick={showModalHandler}>
        {piece.title}
      </SmallInvertedLeafButton>
      {showModal ? (
        <Modal closeModalHandler={closeModalHandler} piece={piece} />
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalButton;
