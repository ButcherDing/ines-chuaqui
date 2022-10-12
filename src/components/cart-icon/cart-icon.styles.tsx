import styled from "styled-components";
import { ReactComponent as ShoppingBag } from "../../assets/logos/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingBag)`
  width: 60%;
  margin-bottom: 1rem;
  color
`;
export const ItemCount = styled.span`
  font-size: 1.4rem;
  position: absolute;
  font-weight: bold;
  top: 2.5rem;
  color: #8b2e24;
`;
