import styled from "styled-components";
import { CheckoutHeaders } from "../../routes/checkout/checkout.styles";
import {
  primaryShade,
  primaryTint2,
  secondaryTint2,
} from "../../general.styles";
import FormInput from "../form-input/form-input.component";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;

export const ButtonCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 2rem;
  margin-top: 3rem;
`;

export const HeaderContainer = styled.div``;

export const Underlined = styled.span`
  text-decoration: underline;
  font-size: 3rem;
`;
