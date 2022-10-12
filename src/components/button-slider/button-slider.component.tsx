import { FC } from "react";

import { ReactComponent as NextArrow } from "../../assets/logos/chevron-forward-outline.svg";
import { ReactComponent as PrevArrow } from "../../assets/logos/chevron-back-outline.svg";

export type BtnSliderProps = {
  moveSlide: () => void;
  direction: string;
};

export const BtnSlider: FC<BtnSliderProps> = ({ moveSlide, direction }) => {
  return (
    <>
      {direction === "next" ? (
        <NextArrow onClick={moveSlide} />
      ) : (
        <PrevArrow onClick={moveSlide} />
      )}
    </>
  );
};
