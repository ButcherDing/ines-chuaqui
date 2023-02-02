import styled from "styled-components";
import background from "../../assets/img/compressed-lg/hero.jpg";
import { primaryShade, globalPadding } from "../../general.styles";

// export const HeroContainer = styled.div`
//   width: 105%;
// `;

export const HeroImage = styled.div`
  width: 100vw;
  position: relative;
  right: ${globalPadding}rem;
  min-height: 100vh;
  background-image: linear-gradient(
      to right,
      rgb(255, 255, 255),
      #fffffff5,
      #ffffffd7,
      #ffffffb9,
      #ffffff65,
      rgba(255, 255, 255, 0)
    ),
    url(${background});

  background-size: cover;
  overflow: hidden;
  @media (max-width: 27em) {
    background-image: linear-gradient(
        to bottom,
        rgb(255, 255, 255),
        rgba(255, 255, 255, 0.679),
        #ffffff05,
        #ffffffec,
        #ffffffec,
        #ffffffe5,
        #ffffffd5,
        #ffffffc5,
        #ffffffb5
      ),
      url(${background});
  }
  @media (max-width: 50em) {
    background-image: url(${background});
  }
`;

export const GradientWrapper = styled.div`
  @media (max-width: 50em) {
    padding-bottom: 9.6rem;
    background: linear-gradient(
      to bottom,
      rgb(255, 255, 255),
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
    height: 10rem;
  }
`;
export const ArtistDescriptionGradient = styled(GradientWrapper)`
  @media (max-width: 50em) {
    padding-bottom: 2.4rem;
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
  padding-bottom: 3.2rem;
  align-items: center;
  /* margin-top: 2rem; */
  margin: 3rem 0 0 3.2rem;

  @media (max-width: 50em) {
    width: 80%;
    margin-left: 2.4rem;
  }

  @media (max-width: 27em) {
    width: 92%;
    margin-left: 1.2rem;
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
  margin-bottom: 3.2rem;
`;
