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
  margin-bottom: 6.4rem;
  align-items: center;
`;

export const SeriesTitle = styled.h3``;

export const Line = styled.div`
  width: 85%;
  border-top: 0.2rem solid ${primaryShade}22;
`;

export const SeriesDescription = styled.p`
  width: 100%;
  padding-right: 3rem;
  /* max-width: 42rem; */
`;

export const SeriesDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7%;

  @media (max-width: 50em) {
    flex-direction: column;
    /* align-items: center; */
  }
`;

export const SeriesBlurbHeading = styled(BlurbHeading)`
  font-weight: 300;
`;

export const SeriesBlurb = styled(ArtistDescription)``;

export const FlexColumn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
  flex-direction: column;
  text-align: center;
`;
