import styled from "styled-components";
import background from "../../assets/img/magical-journeys-1.jpg";
import {
  primaryShade,
  primaryColor,
  secondaryShade,
  secondaryColor,
  secondaryTint,
} from "../../general.styles";
import { NavLinkButton } from "../button/button.styles";

// export const HeroContainer = styled.div`
//   width: 105%;
// `;

export const HeroImage = styled.div`
  width: 102vw;
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

  /* box-shadow: 0 0 0.2rem 0.2rem white inset; */
  background-size: cover;
  /* overflow: hidden; */
  padding: 1rem 2rem 4rem 2rem;
`;

export const NameTitle = styled.h1`
  text-align: center;
  letter-spacing: 2.2rem;
  line-height: 1.5;
  font-weight: 200;
  /* padding: 1rem 6rem; */
`;

export const ArtistDescriptionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  /* margin-top: 2rem; */

  @media (max-width: 50em) {
    width: 80%;
    align-items: center;
    /* gap: 1rem */
    margin-left: 2rem;
  }

  @media (max-width: 27em) {
    margin-left: 1rem;
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
  margin-bottom: 3rem;
`;
