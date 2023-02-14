import { FC } from "react";

import styled, { css } from "styled-components";
import { primaryShade } from "../../general.styles";

const subColor = "grey";
const mainColor = primaryShade;

const shrinkLabelStyles = css`
  top: -1.8rem;
  font-size: 1.2rem;
  color: ${mainColor};
`;

interface FormInputLabelProps {
  shrink: number | null;
}

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: 1.6rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: 1.8rem;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: inherit;
  color: ${mainColor};
  font-size: 1.8rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 0.1rem solid ${subColor};
  margin: 0 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 2.4rem 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
