import styled from "styled-components";

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
  background-color: #fff;
  padding: 2.4rem;
  margin: 2.4rem;
`;
export const ModalHeader = styled.div`
  /* max-height: 100%;
  max-width: 100%; */
  display: flex;
  gap: 3.6rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.1rem solid #eee;

  @media (max-width: 34em) {
    flex-direction: column-reverse;
  }
`;

export const ModalTitle = styled.h2`
  @media (max-width: 34em) {
    font-size: 2.8rem;
  }
`;

export const ProductThumbnail = styled.img`
  height: 30rem;
  width: auto;
  /* max-height: 30%;
  max-width: auto; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 34em) {
    width: 10rem;
    height: auto;
  }
`;
export const ModalBody = styled.div`
  padding: 1rem;
  border-top: 0.1rem solid #eee;
`;

export const ModalFooter = styled.div`
  padding: 1rem;
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 2.4rem;
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
