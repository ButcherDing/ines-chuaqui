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
  display: flex;
  justify-content: space-around;
  flex-direction: column;
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
  padding: 1rem 2rem 2rem 2rem;
`;

export const NameTitle = styled.p`
  text-align: center;
  letter-spacing: 2.2rem;
  font-size: 7.4rem;
  font-weight: 200;
  margin: 2rem 4rem 0rem 0rem;

  /* text-decoration: underline; */
`;

export const ArtistDescriptionContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  margin-top: 2rem;
`;
export const BlurbHeading = styled.h3`
  padding-bottom: 0.2rem;
  /* text-decoration: underline; */
  border-bottom: 0.2rem solid ${primaryShade}22;
  width: 95%;
`;
export const ArtistDescription = styled.p`
  width: 100%;
  font-size: 2rem;
  line-height: 2;
  margin-bottom: 3rem;
`;

// export const HeroNavLinkButton = styled(NavLinkButton)`
//   align-self: center;
//   line-height: 3rem;
//   width: 45%;
//   max-width: 20rem;
//   margin-top: 4rem;
//   padding: 4rem;
//   font-weight: 300;
//   letter-spacing: 0.6rem;
//   text-align: center;
//   /* text-transform: uppercase; */
// `;
