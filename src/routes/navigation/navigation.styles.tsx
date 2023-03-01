import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../assets/img/hero.jpg";

import { primaryShade } from "../../general.styles";

export const NavigationContainer = styled.div`
  position: sticky;
  /* width: 100vw; */
  top: -10.9rem;
  display: flex;
  align-content: center;
  flex-direction: column;
  margin: 0;
  background-image: linear-gradient(
      to right,
      #ffffff,
      #ffffffee,
      #ffffffee,
      #ffffff
    ),
    url(${background});
  background-size: 100%;
  background-size: cover;
  border-bottom: 0.1rem solid #eee;
  z-index: 4;

  @media (max-width: 27.375em) {
    top: -17rem;
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
  @media (max-width: 25em) {
    margin-left: 0.8rem;
    width: 3rem;
    position: relative;
    top: -18rem;
  }
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* gap: 1.2rem; */
  min-width: 36rem;

  @media (max-width: 31.25em) {
    min-width: 30rem;
  }

  @media (max-width: 27em) {
    min-width: 10rem;
  }
  @media (max-width: 23em) {
    font-size: 1.8rem;
    min-width: 8rem;
    /* gap: 0.8rem; */
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

  span {
    /* @media (max-width: 50em) {
      font-size: 1.8rem;
    } */

    /* @media (max-width: 34em) {
      font-size: 1.8rem;
    } */
    @media (max-width: 27em) {
      font-size: 1.8rem;
    }
    @media (max-width: 20em) {
      font-size: 1.6rem;
    }
  }

  /* Slide in */

  &::after {
    overflow: hidden;
    transform: translate3d(-100%, 0, 0);
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: ${primaryShade};
    transition: opacity 300ms, transform 300ms;
  }

  &:hover::after {
    transform: translate3d(0%, 0, 0);
  }
`;
