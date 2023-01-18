import styled from "styled-components";
import Button from "../button/button.component";

export const StripeFormsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  min-width: 30rem;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 3.2rem;
  padding: 2rem;
`;

export const PaymentTitle = styled.h2`
  font-size: 3.6rem;
`;
