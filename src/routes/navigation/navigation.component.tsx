import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import { ReactComponent as Logo } from "../../assets/logos/skull-outline.svg";

import {
  NavigationContainer,
  NavBar,
  NavLinksContainer,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const currentUser = null;
const signOutHandler = () => {
  console.log("clicked");
};

export const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <NavBar>
          <LogoContainer to="/">
            <Logo className="logo">Logo</Logo>
          </LogoContainer>
          <NavLinksContainer>
            <NavLink to="/gallery">Gallery</NavLink>
            {currentUser ? (
              <NavLink as="span" onClick={signOutHandler}>
                Sign Out
              </NavLink>
            ) : (
              <NavLink to="/auth">Sign In</NavLink>
            )}
          </NavLinksContainer>
          <CartIcon />
        </NavBar>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
