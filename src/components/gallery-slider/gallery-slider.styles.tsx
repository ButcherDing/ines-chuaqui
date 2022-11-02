import { ReactComponent as NextArrow } from "../../assets/logos/chevron-forward-outline.svg";
import { ReactComponent as PrevArrow } from "../../assets/logos/chevron-back-outline.svg";
import styled from "styled-components";

export const SeriesTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SeriesTitle = styled.div`
  padding: 2rem;
`;

export const SliderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 100%;
  svg {
    height: 3rem;
    align-self: center;
    cursor: pointer;
  }
`;

export const Artwork = styled.div`
  img {
    max-height: 95vh;
  }
`;

export const NextButton = styled(NextArrow)``;
export const PrevButton = styled(PrevArrow)``;
