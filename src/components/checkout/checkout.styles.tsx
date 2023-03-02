import styled from "styled-components";
import { LeafButton } from "../button/button.styles";

export const CheckoutContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin: 2rem 0rem 4rem;
`;

export const PaymentButton = styled(LeafButton)`
  padding: 1.6rem;
  font-size: 2rem;
  @media (max-width: 34em) {
    margin: auto;
  }
`;

export const PaymentTitle = styled.h2`
  font-size: 3.6rem;
`;
export const Forms = styled.div`
  width: 100%;
  max-width: 60rem;
  gap: 2.4rem;

  @media (max-width: 34em) {
    flex-direction: column;
  }
`;
export const AddressFormContainer = styled.div``;
export const PaymentFormContainer = styled.div`
  margin-bottom: 2.4rem;
`;
