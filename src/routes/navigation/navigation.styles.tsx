import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../assets/img/Compressed/suspended-ani-1.jpg";

import {
  primaryShade,
  secondaryColor,
  secondaryShade,
} from "../../general.styles";

export const NavigationContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  /* transform: rotate(90deg); */
  /* justify-content: center; */
  background-image: linear-gradient(
      to right,
      #ffffff,
      #ffffffee,
      #ffffffee,
      #fffffff0
    ),
    url(${background});
  background-size: 100%;
  /* box-shadow: 0 0 0.5rem 0.5rem white inset; */
  /* height: 12rem; */
  background-size: cover;
  /* padding: 1.5rem; */
  border-bottom: 0.1rem solid #eee;
`;

export const NameBox = styled.span`
  text-align: center;
  letter-spacing: 1.2rem;
  font-weight: 200;
  font-size: 5rem;
  margin: 3rem 5rem 1rem 0rem;
`;

export const NavBar = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  color: ${primaryShade};
  height: 100%;
  width: 4rem;
  justify-content: center;
`;

export const NavLinksContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* gap: rem; */
`;

export const NavLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: ${primaryShade};
  cursor: pointer;
  overflow: hidden;
  opacity: 1;
  transform: translate3d(0, 0, 0);

  padding: 0.2em;

  /* Slide in */
  & {
  }

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
