import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 10rem;
  min-width: 30rem;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 3.2rem;
`;

export const PaymentTitle = styled.h2`
  font-size: 3.6rem;
`;
