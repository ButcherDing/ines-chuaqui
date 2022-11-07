import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import { setShowModal } from "../../store/gallery/gallery.slice";

import { useKeyPress } from "../../store/hooks/useKeyPress.hook";

import {
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "./modal.styles";
import Button from "../button/button.component";

export const Modal = () => {
  const dispatch = useAppDispatch();
  const showModal = useAppSelector((state) => state.gallery.showModal);

  const handleKeyPress = (e: Event) => {};

  const showModalHandler = () => {
    dispatch(setShowModal(showModal ? false : true));
  };
  // escape key from modal listener
  if (useKeyPress("Escape") && showModal) showModalHandler();
  return (
    <>
      <Button onClick={showModalHandler}>Show Modal</Button>
      {showModal && (
        <ModalContainer
          onClick={showModalHandler}
          // onKeyDown={(e) => handleKeyPress(e)}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h3>I am the modal header</h3>
            </ModalHeader>
            <ModalBody>This is modal content</ModalBody>
            <ModalFooter>
              <p>I am the blurb</p>
              <Button onClick={showModalHandler}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
