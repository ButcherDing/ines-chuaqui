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
  height: 12rem;
  background-size: cover;
  padding: 1.5rem;
  border-bottom: 0.1rem solid #eee;
`;

export const NameBox = styled.span`
  text-align: center;
  letter-spacing: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
  font-size: 2.4rem;
`;

export const NavBar = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  color: ${primaryShade};
  height: 100%;
  width: 4rem;
  margin-bottom: 5rem;
  justify-content: center;
`;

export const NavLinksContainer = styled.div`
  font-size: 1.6rem;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${primaryShade};
  padding: 1rem 3rem;
  cursor: pointer;
  transform: all, 0.4s;

  &:hover {
    text-decoration: underline;
  }
`;

export const Line = styled.div`
  width: 15%;
  /* display: flex; */
  /* border-top: 0.2rem solid ${secondaryShade}; */
  /* border-top: 0.2rem solid "#2a97a2"; */
  border-top: 0.2rem solid ${primaryShade}22;
`;
export const BannerLine = styled(Line)`
  align-self: center;
  margin-top: 2rem;
  border-top: 0.1rem solid ${primaryShade}33;
  width: 15%;
`;
