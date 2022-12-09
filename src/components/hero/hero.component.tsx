import { Link, NavLink } from "react-router-dom";
import { BlurbHeading } from "./hero.styles";
import {
  ArtistDescriptionContainer,
  ArtistDescription,
  // HeroImg,
  HeroImage,
  NameTitle,
} from "./hero.styles";
import "./hero.styles";
import { LeafButton } from "../button/button.styles";

const Hero = () => {
  return (
    <>
      <HeroImage>
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
      </HeroImage>
    </>
  );
};

export default Hero;
