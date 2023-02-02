import styled from "styled-components";
import {
  ArtistDescription,
  BlurbHeading,
} from "../../components/hero/hero.styles";
import {
  grey3,
  grey4,
  primaryShade,
  RouteContainer,
} from "../../general.styles";

export const RouteTitle = styled.h1`
  margin-bottom: 3rem;
`;

export const SmallP = styled.p`
  margin-top: 2.4rem;
  font-size: 1.6rem;
  color: ${grey3};
`;

export const GalleryContainer = styled(RouteContainer)``;

export const SeriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 6.4rem;
  flex-basis: auto;
`;

export const SeriesTitle = styled.h3``;

export const SeriesDescription = styled.p`
  padding-right: 3rem;
  /* width: 40%; */
  flex-basis: content-max;
`;
