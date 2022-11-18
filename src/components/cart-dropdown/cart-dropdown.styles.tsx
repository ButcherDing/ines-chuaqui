import styled from "styled-components";
import {
  BaseButton,
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
  border: 1px solid #aaaaaa;
  background-color: white;
  top: 140px;
  right: 35px;
  z-index: 5;

  /* Nesting Example */
  /* ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    color: orangered;
  } */
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: 15px;
`;
