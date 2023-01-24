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
<<<<<<< HEAD
      <HeroImage>
        <GradientWrapper>
          <NameTitle>Ines Chuaqui</NameTitle>
          <Subtitle>Mixed Media / Design</Subtitle>
        </GradientWrapper>
        <ArtistDescriptionGradient>
          <Spacer />
          <ArtistDescriptionContainer>
            <BlurbHeading>About the artist</BlurbHeading>
            <ArtistDescription>
              Ines Chuaqui is an artist working out of Vancouver, British
              Columbia. She was born in Chile, moving to Canada in her early
              teens. Her love and passion for nature are fuelled by her intimate
              experiences of various habitats on the Pacific Coast of Chile and
              BC, as well as James Bay in Northern Quebec.
              <br />
              <br /> Working with mixed media and acrylics, her goal is to
              capture the sensuality and ethereal qualities of nature by gently
              deconstructing the images. She is fascinated by the diversity of
              textures and elemental moods in the natural environment and
              strives to express these in her work. In "The Frost" series, she
              reveals the otherworldly places where life is suspended and frozen
              in time between two seasons, Fall and Winter, Winter and Spring.
            </ArtistDescription>
            <Link to="/gallery">
              <LeafButton>Explore Work</LeafButton>
            </Link>
          </ArtistDescriptionContainer>
        </ArtistDescriptionGradient>
=======
      <HeroImage data-testid="hero-image-div">
        <NameTitle>Ines Chuaqui</NameTitle>
        <ArtistDescriptionContainer>
          <BlurbHeading>About the artist</BlurbHeading>
          <ArtistDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            sint. Reprehenderit sunt mollitia consectetur dicta dignissimos?
            Dolore facere exercitationem, inventore temporibus, obcaecati est
            necessitatibus laudantium, provident unde ab quae facilis. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptate labore necessitatibus obcaecati eos fuga doloribus minima
            aliquid doloremque. Sed, eum quisquam quas accusamus libero iste
            molestiae quibusdam voluptas odio?
          </ArtistDescription>
          <Link to="/gallery">
            <LeafButton>Explore Work</LeafButton>
          </Link>
        </ArtistDescriptionContainer>
>>>>>>> 3bf0681 (solving router testing)
      </HeroImage>
    </>
  );
};

export default Hero;
