import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import { ReactComponent as Logo } from "../../assets/logos/skull-outline.svg";

import {
  NavigationContainer,
  NameBox,
  NavBar,
  NavLinksContainer,
  NavLink,
  LogoContainer,
} from "./navigation.styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { signOut } from "../../store/user/user-slice";

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);

  const signOutHandler = () => {
    dispatch(signOut());
  };

  return (
    <Fragment>
      <NavigationContainer>
        <NameBox>Ines Chuaqui</NameBox>
        <NavBar>
          <LogoContainer to="/">
            <Logo className="logo">Logo</Logo>
          </LogoContainer>
          <NavLinksContainer>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
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
