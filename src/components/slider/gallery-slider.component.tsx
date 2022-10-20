import React, { Fragment } from "react";
import { useEffect } from "react";
import {
  decrement,
  increment,
  getSeriesData,
  getPieceUrls,
  setCurSeries,
} from "../../store/gallery/gallery.slice";
import { useAppSelector, useAppDispatch } from "../../store/hooks/hooks";

import {
  Artwork,
  SliderContainer,
  SeriesTitleContainer,
  SeriesTitle,
  Button,
} from "./gallery-slider.styles";

export const GallerySlider = () => {
  //// Mount Dispatch
  const dispatch = useAppDispatch();

  //// Selectors

  const curSlideUrl = useAppSelector((state) => state.gallery.curSlideUrl);
  const seriesData = useAppSelector((state) => state.gallery.seriesData);

  //// Handlers
  const nextSlideHandler = () => {
    dispatch(increment());
  };

  const prevSlideHandler = () => {
    dispatch(decrement());
  };

  const changeSeriesHandler = (seriesTitle: string) => {
    dispatch(setCurSeries(seriesTitle));
  };

  useEffect(() => {
    dispatch(getSeriesData());
  }, []);

  useEffect(() => {
    dispatch(getPieceUrls());
  }, [seriesData]);

  // console.log(seriesData[curSeries].pieces[curSlide].fetchPath);

  return (
    <Fragment>
      <SeriesTitleContainer>
        {seriesData.map((series) => (
          <SeriesTitle
            onClick={(event) => changeSeriesHandler(series.title)}
            key={series.title}
          >
            {series.title}
          </SeriesTitle>
        ))}
      </SeriesTitleContainer>

      <SliderContainer>
        <Button onClick={prevSlideHandler} />
        <Artwork>
          <img src={curSlideUrl} alt="test" />
        </Artwork>
        <Button onClick={nextSlideHandler} />
      </SliderContainer>
    </Fragment>
  );
};
// BtnSlider needs stuff removed - do onClick to trigger the handlers, also move the logic to our slice.
export default GallerySlider;
