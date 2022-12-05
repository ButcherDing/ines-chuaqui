import styled from "styled-components";
import { primaryShade } from "../../general.styles";

export const ModalFormContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  legend,
  fieldset,
  select,
  textarea,
  input,
  button,
  option {
    color: ${primaryShade};
    background-color: white;
    height: 3rem;
    font-size: 1.4rem;
    border: 1px solid #aaaaaa;
    &:hover,
    :focus,
    :active,
    :checked {
      background-color: white;
    }
  }
`;

export const Spacer = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  /* margin: 1rem 1rem 0rem 3rem; */
`;
