import { NavLink } from "react-router-dom";
import { BlurbHeading, HeroNavLinkButton } from "./hero.styles";
import {
  HeroContainer,
  ArtistDescriptionContainer,
  ArtistDescription,
  // HeroImg,
  HeroImage,
} from "./hero.styles";
import "./hero.styles";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage>
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
          <HeroNavLinkButton to="/gallery">Explore Work</HeroNavLinkButton>
        </ArtistDescriptionContainer>
      </HeroImage>
      {/* <HeroImg src={heroImage} alt="ethereal painting of a gazebo" /> */}
    </HeroContainer>
  );
};

export default Hero;
