import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import { ReactComponent as Logo } from "../../assets/logos/crow-solid.svg";

import {
  NavigationContainer,
  NameBox,
  NavBar,
  NavLinksContainer,
  NavLink,
  LogoContainer,
} from "./navigation.styles";
import { useAppSelector } from "../../store/hooks/hooks";

export const Navigation = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);

  return (
    <Fragment>
      <NavigationContainer>
        <NameBox>Ines Chuaqui</NameBox>
        {/* <BannerLine /> */}
        <NavBar>
          <LogoContainer to="/">
            <Logo className="logo">Logo</Logo>
          </LogoContainer>
          <NavLinksContainer>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {currentUser ? (
              <NavLink to="/auth">Account</NavLink>
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
