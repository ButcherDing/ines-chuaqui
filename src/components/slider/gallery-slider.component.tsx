import React from "react";

import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";
import { decrement, increment } from "../../store/gallery/gallery-slice";

import { BtnSlider } from "../button-slider/button-slider.component";

import { Artwork, SliderContainer } from "./gallery-slider.styles";


export const GallerySlider = () => {
  // const [slideIndex, setSlideIndex] = useState<number>(0);

  const curSlide = useAppSelector(state => state.gallery.curSlide);
  console.log(curSlide)
  const slides = useAppSelector(state => state.gallery.slides);
  const dispatch = useAppDispatch();

  const nextSlideHandler = () => {
    // should this logic(guard clauses) really live here?
    if (curSlide === slides.length - 1) return;
    dispatch(increment());
  };

  const prevSlideHandler = () => {
    if (curSlide === 0) return;
    dispatch(decrement());
  };

  return (
    <SliderContainer>
      <BtnSlider moveSlide={prevSlideHandler} direction="prev" />
      <Artwork>
        <img src={process.env.PUBLIC_URL + slides[curSlide].path} alt="test" />
      </Artwork>

      <BtnSlider moveSlide={nextSlideHandler} direction="next" />
    </SliderContainer>
  );
};
// BtnSlider needs stuff removed - do onClick to trigger the handlers, also move the logic to our slice.
export default GallerySlider;
