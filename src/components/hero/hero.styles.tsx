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

export const HeroContainer = styled.div`
  display: flex;
  width: 110%;
`;

export const ArtistDescriptionContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  margin-top: 2rem;
`;
export const BlurbHeading = styled.h3`
  color: ${primaryShade};
  letter-spacing: 0.8rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  padding-bottom: 0.2rem;
  /* text-decoration: underline; */
  border-bottom: 0.2rem solid ${primaryShade}22;
  width: 95%;
`;
export const ArtistDescription = styled.p`
  width: 100%;
  font-size: 2rem;
  line-height: 2;
`;

export const HeroImage = styled.div`
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
  box-shadow: 0 0 0.2rem 0.2rem white inset;
  height: 65rem;
  background-size: cover;
  padding: 2rem;
`;

export const HeroNavLinkButton = styled(NavLinkButton)`
  align-self: center;
  width: 45%;
  margin-top: 4rem;
`;
