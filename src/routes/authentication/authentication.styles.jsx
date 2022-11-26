import styled from "styled-components";
import { primaryTint2, RouteContainer } from "../../general.styles";

export const AuthenticationContainer = styled(RouteContainer)`
  background-color: ${primaryTint2};
  border-radius: 9px;
  padding: 6rem 5rem 4rem;
  margin: 4rem;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
`;

export const OrderHistory = styled.div`
  display: flex;
`;

export const NotSignedIn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  /* align-content: space-between; */
  align-items: center;
`;
