import styled from "styled-components";

export const FaderContainer = styled.span`
  margin-top: 1rem;
  opacity: 0;
  font-size: 1.4rem;

  &.fade-in {
    opacity: 1;
    transition: opacity 0.2s ease;
  }

  &.fade-out {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;
