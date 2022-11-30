import styled from "styled-components";
import {
  ArtistDescription,
  ArtistDescriptionContainer,
  BlurbHeading,
} from "../../components/hero/hero.styles";
import { primaryShade, RouteContainer } from "../../general.styles";

export const RouteTitle = styled.h1`
  margin-bottom: 3rem;
`;
export const GalleryContainer = styled(RouteContainer)``;

export const SeriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;
  align-items: center;
`;

export const Line = styled.div`
  width: 85%;
  border-top: 0.2rem solid ${primaryShade}22;
`;

export const SeriesDescription = styled.p`
  width: 45%;
`;

export const SeriesDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15rem;
`;

export const SeriesBlurbHeading = styled(BlurbHeading)`
  font-weight: 300;
`;

export const SeriesBlurb = styled(ArtistDescription)``;

export const LilCaption = styled.span`
  padding-left: 30rem;
`;
