import styled from "styled-components";
import { ReactComponent as ShoppingBag } from "../../assets/logos/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
  top: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 22.813em) {
    left: 1rem;
    position: relative;
  }
`;

export const ShoppingIcon = styled(ShoppingBag)`
  width: 60%;
  margin-bottom: 1rem;
`;
export const ItemCount = styled.span`
  font-size: 1.4rem;
  position: absolute;
  font-weight: bold;
  top: 2.4rem;
  color: #8b2e24;
`;
