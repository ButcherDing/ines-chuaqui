import styled from "styled-components";

import { grey3, RouteContainer } from "../../general.styles";

export const RouteTitle = styled.h1`
  margin-bottom: 3rem;
`;

export const SmallSpan = styled.span`
  margin-top: 2.4rem;
  font-size: 1.6rem;
  color: ${grey3};
`;

export const GalleryContainer = styled(RouteContainer)``;

export const SeriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 6.4rem;

  @media (max-width: 70rem) {
    flex-direction: column;
  }
`;

export const SeriesTitle = styled.h3``;

export const SeriesDescription = styled.p`
  padding-right: 3rem;
  width: 100%;
  max-width: 70rem;
`;
