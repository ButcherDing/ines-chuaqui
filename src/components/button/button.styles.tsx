import styled from "styled-components";
import {
  primaryColor,
  primaryShade,
  primaryTint,
  secondaryTint,
  secondaryColor,
  secondaryShade,
} from "../../general.styles";
import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseButton = styled.button`
  /* min-width: 2.5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${primaryShade};
  background-color: white;
  min-width: 2.5rem;
  height: 4rem;
  line-height: 1.4;
  letter-spacing: 0.05rem;
  padding: 0 3.5rem 0 3.5rem;
  margin-bottom: 2.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  border: none;
  border-radius: 0.3rem 1.2rem;
  outline: ${primaryShade} solid 0.15rem;
  /* text-transform: uppercase; */
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: ${secondaryTint};
    color: ${primaryShade};
    outline: ${primaryShade} solid 0.15rem;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #3cd7e7;
  color: ${primaryShade};
  transition: all 0.3s;

  &:hover {
    background-color: #2a97a2;
    color: white;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: all 0.4s;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
