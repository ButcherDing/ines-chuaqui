import styled from "styled-components";
import { HeroImageProps } from "./hero-image";

// type HeroImageContainerProps = {
//   heroImg: string;
// };

export const HeroImageContainer = styled.div<HeroImageProps>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: relative;
  right: 0.8rem;
  min-height: 100vh;
  background-image: url(${(props) => props.heroImg});

  background-size: cover;
  overflow-x: hidden;
  @media (max-width: 27em) {
    background-image: url(${(props) => props.heroImg});
  }
`;
