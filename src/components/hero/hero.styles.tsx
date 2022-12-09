import styled from "styled-components";
import background from "../../assets/img/magical-journeys-1.jpg";
import {
  primaryShade,
  primaryColor,
  secondaryShade,
  secondaryColor,
  secondaryTint,
  globalPadding,
} from "../../general.styles";
import { NavLinkButton } from "../button/button.styles";

// export const HeroContainer = styled.div`
//   width: 105%;
// `;

export const HeroImage = styled.div`
  width: 100vw;
  position: relative;
  right: ${globalPadding}rem;
  min-height: 100vh;
  background-image: linear-gradient(
      to right,
      rgb(255, 255, 255),
      #ffffff,
      #ffffffd7,
      #ffffffb9,
      #ffffff65,
      rgba(255, 255, 255, 0)
    ),
    url(${background});

  background-size: cover;
  overflow: hidden;
`;

export const NameTitle = styled.h1`
  text-align: center;
  letter-spacing: 2.2rem;
  line-height: 1.5;
  font-weight: 200;
  /* margin: 0.8rem; */
`;

export const ArtistDescriptionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-bottom: 3.2rem;
  align-items: center;
  /* margin-top: 2rem; */
  margin-left: 3.2rem;

  @media (max-width: 50em) {
    width: 80%;
    margin-left: 2.4rem;
  }

  @media (max-width: 27em) {
    margin-left: 1.2rem;
  }
`;
export const BlurbHeading = styled.h3`
  padding-bottom: 0.2rem;
  /* text-decoration: underline; */
  border-bottom: 0.2rem solid ${primaryShade}22;
  width: 95%;
  align-self: start;
`;
export const ArtistDescription = styled.p`
  width: 100%;

  line-height: 2;
  margin-bottom: 3.2rem;
`;
