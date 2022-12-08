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
import { NavLink } from "react-router-dom";

export const BaseButton = styled.button`
  /* min-width: 2.5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${primaryShade};
  background-color: #eeeeee;
  min-width: 1.5rem;
  max-width: 20rem;
  line-height: 1.4;
  letter-spacing: 0.05rem;
  padding: 1.6rem 2.4rem;
  margin: 0.5rem 0rem;
  font-size: 1.8rem;
  font-weight: 400;
  border: none;
  border-radius: 0.3rem 1.2rem;
  outline: 1px solid ${primaryTint};
  /* outline: ${primaryShade} solid 0.15rem; */
  /* text-transform: uppercase; */
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: ${secondaryTint};
    color: ${primaryShade};
    /* outline: ${primaryShade} solid 0.15rem; */
  }
`;

export const SmallTagButton = styled(BaseButton)`
  padding: 0.4rem 1.6rem;
  /* max-height: 4rem; */
  /* min-width: auto; */
  border-radius: 0.3rem;
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #2a96a286;
  color: ${primaryShade};
  transition: all 0.3s;

  &:hover {
    background-color: #2a96a27e;
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
  width: 2.3rem;
  height: 2.3rem;
  transition: all 0.3s;
`;

export const NavLinkButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${primaryShade}ee;
  background-color: ${secondaryTint}99;
  min-width: 9rem;
  height: 4rem;
  letter-spacing: 0.05rem;
  padding: 2.5rem 2.5rem;
  margin-bottom: 2.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  /* border: solid 1rem ${primaryColor}; */
  border-radius: 0.3rem 1.2rem;
  text-decoration-line: none;
  cursor: pointer;
  transition: all 0.4s;
  /* text-transform: uppercase; */

  &:hover {
    background-color: ${secondaryTint};
    color: ${primaryShade};
  }
`;

// note to self - text-decoration:underline often looks terrible
export const LeafButton = styled.button`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 500;
  padding: 2rem 4rem;
  border-radius: 0.3rem 2rem;

  /* Only necessary for .btn */
  border: none;
  cursor: pointer;
  font-family: inherit;

  /* Put transition on original "state" */
  /* transition: background-color 0.3s; */

  background-color: ${primaryShade};
  color: #fdf2e9;
  /* align-self: start; */
  padding: 1.2rem;
  border: 1px solid ${primaryShade};

  transition: all 0.3s;

  :link,
  :visited {
    display: inline-block;
  }

  :hover,
  :active {
    background-color: #fff;
    color: ${primaryShade};
    border: 1px solid ${primaryShade};
  }

  /* border: 3px solid #fff; */

  box-shadow: inset 0 0 0 3px #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  /* Trick to add border inside */
  .btn--outline:link,
  .btn--outline:visited {
    background-color: #fff;
    color: #555;
  }
  .btn--outline:hover,
  .btn--outline:active {
    background-color: #fdf2e9;
  }

  @media (max-width: 50em) {
    font-size: 1.8rem;
  }

  @media (max-width: 27em) {
    font-size: 1.6rem;
  }
`;

export const GoogleLeafButton = styled(LeafButton)`
  background-color: #2a96a2;
  border: 1px solid #2a96a2;

  :hover,
  :active {
    background-color: #fff;
    color: #2a96a2;
    border: 1px solid #2a96a2;
  }
`;

export const InvertedLeafButton = styled(LeafButton)`
  background-color: white;
  color: ${primaryShade};
  padding: 1rem;

  :hover,
  :active {
    background-color: ${primaryShade};
    color: white;
  }
`;
export const SmallInvertedLeafButton = styled(InvertedLeafButton)`
  font-size: 1.6rem;
`;

export const BlackLeafButton = styled(LeafButton)`
  background-color: black;
  border: 1px solid black;
  padding: 1.2rem 3rem;
  margin: 0rem 1.6rem;
  /* width: 50%; */
  /* align-self: center; */
  :hover,
  :active {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
