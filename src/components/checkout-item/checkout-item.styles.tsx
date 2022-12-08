import styled from "styled-components";
import { primaryShade } from "../../general.styles";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  min-height: 100px;
  border-bottom: 1px solid ${primaryShade};
  padding: 1.5rem 0rem;
  font-size: 1.8rem;
  align-items: center;
  justify-items: center;
  /* gap: 1.5rem; */
`;

export const CheckoutImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  /* padding-right: 15px; */

  img {
    min-width: 50%;
    width: 90%;
    height: 100%;
  }
`;

export const CheckoutItemDetail = styled.span`
  margin: 1rem;

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

export const Quantity = styled.div``;

export const RemoveButton = styled.span`
  /* padding-left: 5rem; */
  cursor: pointer;
`;
