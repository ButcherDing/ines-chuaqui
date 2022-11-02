import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalContent = styled.div`
  width: 50rem;
  background-color: #fff;
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
