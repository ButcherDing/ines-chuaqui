import styled from "styled-components";
import { primaryShade } from "../../general.styles";

export const CheckoutContainer = styled.div`
  /* width: 90%; */
  min-width: 32rem;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  /* justify-items: center; */
  margin: 5rem 0 0;
`;

export const CheckoutHeaders = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  justify-self: center;
  border-bottom: 1px solid ${primaryShade};
`;

export const HeaderBlock = styled.span`
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
  margin-top: 3.2rem;
  font-weight: 400;
  margin-left: auto;
`;
