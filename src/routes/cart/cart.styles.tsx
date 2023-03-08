import styled from "styled-components";
import { fadeInAnimation, primaryShade } from "../../general.styles";

export const CartContainer = styled.div`
  min-width: 32rem;
  min-height: 90vh;
  max-width: 100rem;
  margin: auto;

  align-self: center;

  display: flex;
  flex-direction: column;
  /* justify-items: center; */
  padding: 5rem 2.5rem;
  animation: ${fadeInAnimation};

  @media (max-width: 50em) {
    padding: 0.5rem 1.5rem;
  }
`;

export const CartHeaders = styled.div`
  width: 100%;
  padding: 1.5rem 0rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  justify-self: center;
  /* gap: 2.4rem; */
  border-bottom: 1px solid ${primaryShade};
  @media (max-width: 50em) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const HeaderBlock = styled.span`
  // TODO different colour
  font-weight: 500;
  @media (max-width: 50em) {
    font-size: 1.8rem;
  }

  @media (max-width: 34em) {
    font-size: 1.6rem;
  }
  @media (max-width: 27em) {
    font-size: 1.6rem;
  }
  @media (max-width: 22.5em) {
    font-size: 1.4rem;
  }
`;

export const Total = styled.h4`
  margin: 3.2rem 0;
  font-weight: 400;
  margin-left: auto;
`;
