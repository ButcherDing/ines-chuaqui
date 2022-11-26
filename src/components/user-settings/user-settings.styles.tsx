import styled from "styled-components";
import FormInput from "../form-input/form-input.component";

export const UserSettingsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* justify-content: space-between; */
  align-items: center;
  gap: 1rem 8rem;
  margin-bottom: 4rem;
`;

export const DashboardFormInput = styled(FormInput)`
  margin: 0rem 0rem;
  /* width: 40rem; */
`;
