import styled from "styled-components";
import { fadeInAnimation, primaryShade } from "../../general.styles";

export const CheckoutContainer = styled.div`
  min-width: 32rem;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  /* justify-items: center; */
  margin: 5rem 2.5rem;
  animation: ${fadeInAnimation};

<<<<<<< Updated upstream:src/routes/checkout/checkout.styles.tsx
  @media (max-width: 75em) {
    margin: 5rem 0rem;
=======
  @media (max-width: 50em) {
    padding: 1.5rem 0.4rem;
>>>>>>> Stashed changes:src/routes/cart/cart.styles.tsx
  }
`;

export const CheckoutHeaders = styled.div`
  width: 100%;
  padding: 1.5rem 0rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  justify-self: center;
  /* gap: 2.4rem; */
  border-bottom: 1px solid ${primaryShade};
<<<<<<< Updated upstream:src/routes/checkout/checkout.styles.tsx
=======

  @media (max-width: 40em) {
    grid-template-columns: repeat(5, 1fr);
  }
>>>>>>> Stashed changes:src/routes/cart/cart.styles.tsx
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
