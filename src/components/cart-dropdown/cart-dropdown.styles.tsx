import styled from "styled-components";
import {
  LeafButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #d1d1d1;
  border-radius: 0.3rem 2rem;
  background-color: white;
  top: 55px;
  right: 15px;
  z-index: 5;

  /* Nesting Example */
  /* ${LeafButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    color: orangered;
  } */
`;

export const EmptyMessage = styled.span`
  font-size: 1.8rem;
  margin: 50px auto;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: 15px;
  font-size: 1.6rem;
`;
