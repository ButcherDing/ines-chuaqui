import styled from "styled-components";
import { primaryShade } from "../../general.styles";

export const RouteTitle = styled.h1`
  margin-bottom: 3rem;
`;
export const GalleryContainer = styled.div``;

export const SeriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;
  align-items: center;
`;

export const SeriesTitle = styled.h2`
  text-align: center;
  font-weight: 500;
  text-decoration: underline;
  /* display: inline; */
  margin-bottom: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Line = styled.div`
  width: 85%;
  border-top: 0.2rem solid ${primaryShade}22;
`;
