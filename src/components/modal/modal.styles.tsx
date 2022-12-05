import styled from "styled-components";
import { primaryShade, secondaryTint } from "../../general.styles";

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.122);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;
export const ModalContent = styled.div`
  width: 50rem;
  background-color: #fff;
  padding: 2.5rem;
`;
export const ModalHeader = styled.div`
  padding: 1rem;
`;
export const ModalBody = styled.div`
  padding: 1rem;
  border-top: 0.1rem solid #eee;
  border-bottom: 0.1rem solid #eee;
`;

export const ModalFooter = styled.div`
  padding: 1rem;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
`;

export const ModalMessage = styled.div`
  /* display: none; */
  height: 2rem;
  animation: fadeIn;
  transition: all 2s;
`;
