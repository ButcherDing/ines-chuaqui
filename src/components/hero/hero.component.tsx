import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import {
  ArtistDescriptionGradient,
  EnterButton,
  RightGradientContainer,
  HeaderGradient,
  Spacer,
  Subtitle,
  ArtistDescriptionContainer,
  ArtistDescription,
  NameTitle,
  BlurbHeading,
} from "./hero.styles";

import heroImg from "../../assets/img/hero.jpg";
import heroImgLazy from "../../assets/img/heroLazy.jpg";
import Spinner from "../spinner/spinner.component";

const HeroImage = lazy(() => import("./hero-image"));

// ok, make a prop for hero component

const Hero = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <HeroImage heroImg={heroImg}>
          <RightGradientContainer>
            <HeaderGradient>
              <NameTitle>Ines Chuaqui</NameTitle>
              <Subtitle>Mixed Media / Design</Subtitle>
            </HeaderGradient>
            <ArtistDescriptionGradient>
              <Spacer />
              <ArtistDescriptionContainer>
                <BlurbHeading>About the Artist</BlurbHeading>
                <ArtistDescription>
                  Ines Chuaqui is an artist and designer working out of
                  Vancouver, British Columbia.
                  <br />
                  <br />
                  Working with mixed media and acrylics, her goal is to capture
                  the sensuality and ethereal qualities of nature by gently
                  deconstructing images. She is fascinated by the diversity of
                  textures and elemental moods in the natural environment and
                  strives to express these in her work.
                </ArtistDescription>
                <Link to="/gallery">
                  <EnterButton>Explore Work</EnterButton>
                </Link>
              </ArtistDescriptionContainer>
            </ArtistDescriptionGradient>
          </RightGradientContainer>
        </HeroImage>
      </Suspense>
    </>
  );
};

export default Hero;
