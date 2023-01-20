import styled from "styled-components";
import Button from "../button/button.component";

export const StripeFormsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin: 2rem 0rem 4rem;
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
  width: 100%;
  max-width: 60rem;
  gap: 2.4rem;

  @media (max-width: 34em) {
    flex-direction: column;
  }
`;
export const AddressFormContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
`;
export const PaymentFormContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin-bottom: 2.4rem;
`;
