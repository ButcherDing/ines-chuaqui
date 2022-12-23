import styled from "styled-components";
import { primaryTint2 } from "../../general.styles";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${primaryTint2};
  border-radius: 9px;
  padding: 3% 8%;
  margin: 7% 4%;
  /* box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15); */
  overflow: hidden;

  @media (max-width: 50em) {
    flex-direction: column;
  }
`;

export const NotSignedIn = styled.div`
  display: flex;
  gap: 4rem;
  width: 100%;

  @media (max-width: 50em) {
    flex-direction: column;
  }
  justify-content: space-around;
  align-items: space-between;
`;
