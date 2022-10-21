import React, { Fragment } from "react";
import { useEffect } from "react";
import {
  getSeriesDataAsync,
  getFirestoreUrlsAsync,
  setCurSeriesIndex,
  setCurSlideIndex,
} from "../../store/gallery/gallery.slice";
import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";

import {
  Artwork,
  SliderContainer,
  SeriesTitleContainer,
  SeriesTitle,
  PrevButton,
  NextButton,
} from "./gallery-slider.styles";

export const GallerySlider = () => {
  //// Mount Dispatch
  const dispatch = useAppDispatch();

  //// Selectors

  const curSlideUrl = useAppSelector((state) => state.gallery.curSlideUrl);
  const curSlideIndex = useAppSelector((state) => state.gallery.curSlideIndex);
  const seriesData = useAppSelector((state) => state.gallery.seriesData);

  //// Handlers
  const goPrevSlide = () => {
    dispatch(setCurSlideIndex(curSlideIndex + 1));
  };

  const goNextSlide = () => {
    dispatch(setCurSlideIndex(curSlideIndex - 1));
  };

  const changeSeries = (seriesTitle: string) => {
    dispatch(setCurSeriesIndex(seriesTitle));
  };

  useEffect(() => {
    dispatch(getSeriesDataAsync());
  }, []);

  useEffect(() => {
    dispatch(getFirestoreUrlsAsync());
  }, [seriesData]);

  // console.log(seriesData[curSeriesIndex].pieces[curSlideIndex].fetchPath);

  return (
    <Fragment>
      <SeriesTitleContainer>
        {seriesData.map((series) => (
          <SeriesTitle
            onClick={(event) => changeSeries(series.title)}
            key={series.title}
          >
            {series.title}
          </SeriesTitle>
        ))}
      </SeriesTitleContainer>

      <SliderContainer>
        <PrevButton onClick={goNextSlide} />
        <Artwork>
          <img src={curSlideUrl} alt="test" />
        </Artwork>
        <NextButton onClick={goPrevSlide} />
      </SliderContainer>
    </Fragment>
  );
};
// BtnSlider needs stuff removed - do onClick to trigger the handlers, also move the logic to our slice.
export default GallerySlider;
