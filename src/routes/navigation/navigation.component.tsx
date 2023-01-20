import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import { ReactComponent as Logo } from "../../assets/logos/crow-solid.svg";

import {
  NavigationContainer,
  NavTitle,
  NavBar,
  NavLinksContainer,
  NavLink,
  LogoContainer,
} from "./navigation.styles";
import { useAppSelector } from "../../store/hooks/hooks";
import { Suspense } from "react";
import Spinner from "../../components/spinner/spinner.component";

export const Navigation = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);

  return (
    <>
      <NavigationContainer>
        <NavTitle>Ines Chuaqui</NavTitle>
        {/* <BannerLine /> */}
        <NavBar>
          <LogoContainer to="/">
            <Logo className="logo">
              <span>Logo</span>
            </Logo>
          </LogoContainer>
          <NavLinksContainer>
            <NavLink to="/gallery">
              <span>Gallery</span>
            </NavLink>
            <NavLink to="/shop">
              <span>Shop</span>
            </NavLink>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
            {currentUser ? (
              <NavLink to="/auth">
                <span>Account</span>
              </NavLink>
            ) : (
              <NavLink to="/auth">
                <span>Sign In</span>
              </NavLink>
            )}
          </NavLinksContainer>
          <CartIcon />
        </NavBar>
      </NavigationContainer>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;
