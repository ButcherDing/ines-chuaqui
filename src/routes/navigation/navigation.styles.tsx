import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../assets/img/Compressed/suspended-ani-1.jpg";

import {
  globalPadding,
  primaryShade,
  secondaryColor,
  secondaryShade,
} from "../../general.styles";

export const NavigationContainer = styled.div`
  position: sticky;
  top: -10rem;
  display: flex;
  align-content: center;
  flex-direction: column;
  margin: 0 ${-globalPadding}rem;
  /* transform: rotate(90deg); */
  /* justify-content: center; */
  /* background-color: white; */
  background-image: linear-gradient(
      to right,
      #ffffff,
      #ffffffee,
      #ffffffee,
      #ffffff
    ),
    url(${background});
  background-size: 100%;
  /* box-shadow: 0 0 0.5rem 0.5rem white inset; */
  /* height: 12rem; */
  background-size: cover;
  /* padding: 1.5rem; */
  border-bottom: 0.1rem solid #eee;
  z-index: 4;

  @media (max-width: 27.375em) {
    top: -15.28rem;
  }
`;

export const NavTitle = styled.h2`
  text-align: center;
  letter-spacing: 1.2rem;
  font-weight: 200;
  font-size: 5.2rem;
  margin: 2.4rem 0rem 2.4rem 0rem;
  padding: 0rem 2rem;
`;

export const NavBar = styled.div`
  height: 6.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  color: ${primaryShade};
  height: 100%;
  width: 4.8rem;
  margin-left: 2.4rem;

  justify-content: center;

  @media (max-width: 27em) {
    width: 4rem;
    margin-left: 1.2rem;
  }
  @media (max-width: 23em) {
    margin-left: 0.8rem;
    width: 3rem;
  }
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.2rem;
  min-width: 36rem;

  @media (max-width: 34em) {
    min-width: 24rem;
  }

  @media (max-width: 27em) {
    min-width: 10rem;
  }
  @media (max-width: 23em) {
    gap: 0.8rem;
  }
`;

export const NavLink = styled(Link)`
  /* font-size: 2rem; */
  text-decoration: none;
  color: ${primaryShade};
  cursor: pointer;
  overflow: hidden;
  opacity: 1;
  transform: translate3d(0, 0, 0);
  padding: 0.6rem;
  white-space: nowrap;
  min-width: max-content;

  @media (max-width: 50em) {
    font-size: 1.8rem;
  }

  @media (max-width: 34em) {
    font-size: 1.6rem;
  }
  @media (max-width: 27em) {
    font-size: 1.6rem;
  }
  /* @media (max-width: 20em) {
    font-size: 1.2rem;
  } */

  /* Slide in */

  &::after {
    overflow: hidden;
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: ${primaryShade};
    /* opacity: 0; */
    transition: opacity 300ms, transform 300ms;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0%, 0, 0);
  }
`;

export const Line = styled.div`
  width: 15%;
  /* display: flex; */
  /* border-top: 0.2rem solid ${secondaryShade}; */
  /* border-top: 0.2rem solid "#2a97a2"; */
  border-top: 0.2rem solid ${primaryShade}22;
`;
// export const BannerLine = styled(Line)`
//   align-self: center;
//   margin-top: 2rem;
//   border-top: 0.1rem solid ${primaryShade}33;
//   width: 15%;
// `;
