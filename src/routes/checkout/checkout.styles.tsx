import styled from "styled-components";
import { primaryShade } from "../../general.styles";

export const CheckoutContainer = styled.div`
  width: 80%;
  min-width: 30rem;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;
`;

export const CheckoutHeaders = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  border-bottom: 1px solid ${primaryShade};
`;

export const HeaderBlock = styled.span``;

export const Total = styled.h2`
  margin-top: 3.2rem;
  font-weight: 400;
  margin-left: auto;
  /* font-size: 36px; */
`;
