import styled from "styled-components";
import { fadeInFromTop } from "../../general.styles";
import Button from "../button/button.component";
import { BlackLeafButton } from "../button/button.styles";
import FormInput from "../form-input/form-input.component";

export const UserSettingsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 50em) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardFormInput = styled(FormInput)`
  margin: 0rem 0rem;
  /* width: 40rem; */
`;

export const UserSettingsButton = styled(Button)`
  margin: 0rem 0rem 4rem;
  width: 75%;
  justify-self: end;
  @media (max-width: 50em) {
    justify-self: center;
  }
`;

export const DeleteButton = styled(BlackLeafButton)`
  margin: 2rem 0rem 4rem;
  justify-self: start;
  width: 75%;
  @media (max-width: 50em) {
    justify-self: center;
  }
`;
