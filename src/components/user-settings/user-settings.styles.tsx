import styled from "styled-components";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

export const UserSettingsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 1fr;
  /* justify-content: space-between; */
  align-items: center;
  /* gap: 1rem 8rem; */
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
  margin: 0rem 2rem 4rem;
  /* max-width: max-content; */
`;
