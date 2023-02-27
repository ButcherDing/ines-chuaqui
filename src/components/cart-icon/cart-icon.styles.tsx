import styled from "styled-components";
import { ReactComponent as ShoppingBag } from "../../assets/logos/shopping-bag.svg";
import { primaryShade } from "../../general.styles";

export const CartIconContainer = styled.div`
  width: 6rem;
  height: 6rem;
  /* margin-right: 1.5rem; */
  margin-bottom: 1rem;

  top: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 1rem;
  cursor: pointer;

  @media (max-width: 27em) {
    right: -1.2rem;
  }

  /* @media (max-width: 23em) {
    margin-right: 0rem;
  } */
`;

export const ShoppingIcon = styled(ShoppingBag)`
  width: 60%;
`;
export const ItemCount = styled.span`
  position: absolute;
  top: 2.8rem;
  /* right: 3.8rem; */

  font-weight: bold;
  font-size: 1.4rem;
  color: ${primaryShade};
`;
