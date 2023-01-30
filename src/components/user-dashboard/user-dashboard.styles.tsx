import styled from "styled-components";

import { ReactComponent as CaretSvg } from "../../assets/logos/chevron-forward-outline.svg";
import { LeafButton } from "../button/button.styles";

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

export const SettingsCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 2rem;
  margin-top: 3rem;
`;

export const SettingsDropdownButton = styled(LeafButton)`
  position: relative;
  width: 25rem;
  justify-content: left;
`;

export const HeaderContainer = styled.div``;

export const Underlined = styled.span`
  text-decoration: underline;
  font-size: 3rem;
`;
