import React from "react";
import { useEffect } from "react";
import {
  decrement,
  increment,
  getCollection,
} from "../../store/gallery/gallery.slice";
import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";

import { BtnSlider } from "../button-slider/button-slider.component";

import { Artwork, SliderContainer } from "./gallery-slider.styles";

export const GallerySlider = () => {
  // const [slideIndex, setSlideIndex] = useState<number>(0);

  const dispatch = useAppDispatch();
  const curSlide = useAppSelector((state) => state.gallery.curSlide);
  const curSlideUrl = useAppSelector((state) => state.gallery.curSlideUrl);
  const slides = useAppSelector((state) => state.gallery.slides);

  const nextSlideHandler = () => {
    // should this logic(guard clauses) really live here?
    if (curSlide === slides.length - 1) return;
    dispatch(increment());
  };

  const prevSlideHandler = () => {
    if (curSlide === 0) return;
    dispatch(decrement());
  };

  useEffect(() => {
    dispatch(getCollection());
  }, [curSlide]);

  return (
    <SliderContainer>
      <BtnSlider moveSlide={prevSlideHandler} direction="prev" />
      <Artwork>
        <img src={curSlideUrl} alt="test" />
      </Artwork>
      <BtnSlider moveSlide={nextSlideHandler} direction="next" />
    </SliderContainer>
  );
};
// BtnSlider needs stuff removed - do onClick to trigger the handlers, also move the logic to our slice.
export default GallerySlider;
