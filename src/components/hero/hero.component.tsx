import { Link } from "react-router-dom";
import {
  ArtistDescriptionGradient,
  GradientWrapper,
  Spacer,
  Subtitle,
} from "./hero.styles";
import {
  ArtistDescriptionContainer,
  ArtistDescription,
  // HeroImg,
  HeroImage,
  NameTitle,
  BlurbHeading,
} from "./hero.styles";
import { LeafButton } from "../button/button.styles";

const Hero = () => {
  return (
    <>
      <HeroImage>
        <GradientWrapper>
          <NameTitle>Ines Chuaqui</NameTitle>
          <Subtitle>Mixed Media / Design</Subtitle>
        </GradientWrapper>
        <ArtistDescriptionGradient>
          <Spacer />
          <ArtistDescriptionContainer>
            <BlurbHeading>About the Artist</BlurbHeading>
            <ArtistDescription>
              Ines Chuaqui is an artist working out of Vancouver, British
              Columbia. She was born in Chile, moving to Canada in her early
              teens. Her love and passion for nature are fuelled by her intimate
              experiences of various habitats on the Pacific Coast of Chile and
              British Columbia, as well as James Bay in Northern Quebec.
              <br />
              <br />
              Working with mixed media and acrylics, her goal is to capture the
              sensuality and ethereal qualities of nature by gently
              deconstructing the images. She is fascinated by the diversity of
              textures and elemental moods in the natural environment and
              strives to express these in her work.
            </ArtistDescription>
            <Link to="/gallery">
              <LeafButton>Explore Work</LeafButton>
            </Link>
          </ArtistDescriptionContainer>
        </ArtistDescriptionGradient>
      </HeroImage>
    </>
  );
};

export default Hero;
