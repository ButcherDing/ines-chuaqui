import styled from "styled-components";
import { primaryShade } from "../../general.styles";

export const CartItemContainer = styled.div`
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

export const CartItemImageContainer = styled.div`
  display: flex;
  height: 12rem;
  justify-content: center;
  /* padding-right: 15px; */

  img {
    max-width: 90%;
    height: 100%;
  }
`;

export const CartItemDetail = styled.span`
  margin: 1rem;

  @media (max-width: 50em) {
    font-size: 2rem;
  }

  @media (max-width: 34em) {
    font-size: 1.8rem;
  }
  @media (max-width: 27em) {
    font-size: 1.6rem;
  }
  @media (max-width: 25em) {
    font-size: 1.4rem;
  }
`;

export const Quantity = styled.div``;

export const RemoveButton = styled.span`
  /* padding-left: 5rem; */
  cursor: pointer;
`;
