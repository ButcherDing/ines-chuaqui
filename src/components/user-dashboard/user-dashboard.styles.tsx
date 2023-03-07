import styled from "styled-components";

import { ReactComponent as CaretSvg } from "../../assets/logos/chevron-forward-outline.svg";
import { LeafButton, SignOutButton } from "../button/button.styles";

export const Caret = styled(CaretSvg)`
  height: 2.4rem;
  margin-left: 1.2rem;
  position: absolute;
  left: 20rem;
  transition: all 0.3s;
  transform: rotate(0deg);

  &.rotate {
    transform: rotate(90deg);
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  margin: none;

  @media (max-width: 34rem) {
    justify-content: center;
  } ;
`;

export const UserHeader = styled.h4`
  margin: 1.2rem 1.2rem 1.6rem;
`;

export const SettingsCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 2rem;
  margin-top: 3rem;
  @media (max-width: 34rem) {
    align-items: center;
  }
`;

export const SettingsDropdownButton = styled(LeafButton)`
  position: relative;
  width: 25rem;
  justify-content: left;
`;
export const DashboardSignOutButton = styled(SignOutButton)`
  width: 25rem;
  justify-self: end;
`;

export const Underlined = styled.span`
  text-decoration: underline;
  font-size: 3rem;
`;
