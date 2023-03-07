import styled from "styled-components";
import { primaryShade } from "../../general.styles";
import { LeafButton } from "../button/button.styles";

export const HeroContainer = styled.div``;

export const RightGradientContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.821),
    rgba(255, 255, 255, 0.821),
    rgba(255, 255, 255, 0.821),
    #ffffff14,
    rgba(255, 255, 255, 0)
  );
  @media (max-width: 50em) {
    background: none;
  }
`;

export const HeaderGradient = styled.div`
  @media (max-width: 50em) {
    padding-bottom: 12rem;
    background: linear-gradient(
      to bottom,
      rgb(255, 255, 255),
      rgba(255, 255, 255, 0.781),
      rgba(255, 255, 255, 0.781),
      rgba(255, 255, 255, 0.781),
      rgba(255, 255, 255, 0.39),
      rgba(255, 255, 255, 0)
    );
  }
`;

export const NameTitle = styled.h1`
  text-align: center;
  letter-spacing: 2.2rem;
  line-height: 1.5;
  font-weight: 200;
  padding: 2rem 2rem 0rem;
  margin: 0;
`;
export const Subtitle = styled.p`
  margin-top: 0;
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  line-height: 1.5;
  font-weight: 300;
`;

export const Spacer = styled.div`
  @media (max-width: 50em) {
    height: 8rem;
  }
`;
export const ArtistDescriptionGradient = styled(HeaderGradient)`
  @media (max-width: 50em) {
    padding-bottom: 0.4rem;
    background: linear-gradient(
      to bottom,

      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.39),
      rgba(255, 255, 255, 0.821),
      rgba(255, 255, 255, 0.821),
      rgba(255, 255, 255, 0.821),
      rgba(255, 255, 255, 0.821),
      rgba(255, 255, 255, 0.821),
      rgba(255, 255, 255, 0.821),
      rgba(255, 255, 255, 0.821),
      rgba(255, 255, 255, 0.821),
      rgba(255, 255, 255, 0.821),
      rgba(255, 255, 255, 0.821),
      rgba(255, 255, 255, 0.39),
      rgba(255, 255, 255, 0)
    );
  }
`;

export const ArtistDescriptionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0 6.4rem;
  align-items: center;
  margin-left: 3.6rem;

  @media (max-width: 50em) {
    width: 80%;
    margin-left: 2.4rem;
  }

  @media (max-width: 27em) {
    width: 92%;
    margin-left: 1.2rem;
  }
`;
export const BlurbHeading = styled.h2`
  color: ${primaryShade};
  letter-spacing: 0.8rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 300;
  padding-bottom: 0.1rem;
  margin-bottom: 2rem;
  width: 100%;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    height: 1px;
    border-radius: 2rem;
    background: linear-gradient(90deg, ${primaryShade}, transparent 80%);
  }
`;
export const ArtistDescription = styled.p`
  width: 100%;
  line-height: 2;
`;

export const EnterButton = styled(LeafButton)`
  /* align-self: center; */
  /* position: relative; */
  margin: 2.4rem auto 3.6rem;
  /* top: -3.6rem; */
`;
