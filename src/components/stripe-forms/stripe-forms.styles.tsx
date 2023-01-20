import styled from "styled-components";
import Button from "../button/button.component";

export const StripeFormsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin: 2rem 0rem 4rem;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 3.2rem;
  padding: 2rem;
`;

export const PaymentTitle = styled.h2`
  font-size: 3.6rem;
`;
export const Forms = styled.div`
  display: flex;
  gap: 3.2rem;

  @media (max-width: 34em) {
    flex-direction: column;
  }
`;
export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
