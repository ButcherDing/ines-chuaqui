import { FC } from "react";

import {
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "./modal.styles";
import Button from "../button/button.component";
import { useAppDispatch } from "../../store/hooks/hooks";

export type ModalProps = {
  showModalHandler: () => void;
};

export const Modal: FC<ModalProps> = ({ showModalHandler }) => {
  const handleKeyPress = (e: Event) => {};

  return (
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
  );
};

export default Modal;
