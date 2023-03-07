import { PropsWithChildren } from "react";
import { HeroImageContainer } from "./hero-image.styles";

export type HeroImageProps = {
  heroImg: string;
};

export const HeroImage = (props: PropsWithChildren<HeroImageProps>) => {
  return (
    <HeroImageContainer heroImg={props.heroImg}>
      {props.children}
    </HeroImageContainer>
  );
};

export default HeroImage;
