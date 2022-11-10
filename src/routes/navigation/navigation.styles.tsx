import styled from "styled-components";
import { Link } from "react-router-dom";

import { primaryShade } from "../../general.styles";

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

export const NameBox = styled.span`
  text-align: center;
  letter-spacing: 1.2rem;
  font-weight: 200;

  font-size: 2.4rem;
`;

export const NavBar = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  font-size: 1.4rem;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  color: ${primaryShade};
  height: 100%;
  width: 4rem;
  margin-bottom: 1rem;
  justify-content: center;
`;

export const NavLinksContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${primaryShade};
  padding: 1rem 3rem;
  cursor: pointer;
`;
