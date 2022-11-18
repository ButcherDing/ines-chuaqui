import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setCurSeriesIndex } from "../../store/gallery/gallery.slice";

import { Lightbox } from "../../components/lightbox/lightbox.component";

import {
  SeriesContainer,
  GalleryContainer,
  RouteTitle,
  SeriesDescription,
  SeriesDescriptionContainer,
  SeriesBlurbHeading,
  SeriesBlurb,
} from "../../routes/gallery/gallery.styles";

export const Gallery = () => {
  const dispatch = useAppDispatch();
  const seriesData = useAppSelector((state) => state.gallery.seriesData);

  // const setCurSeriesHandler = (seriesTitle: string) => {
  //   dispatch(setCurSeriesIndex(seriesTitle));
  // };

  return (
    <>
      <GalleryContainer>
        <RouteTitle>Gallery</RouteTitle>
        {seriesData.map((series) => (
          <SeriesContainer key={`gallery` + series.title}>
            <h3>{series.title}</h3>
            <SeriesDescriptionContainer>
              <SeriesDescription>{series.blurb}</SeriesDescription>
              <Lightbox series={series} />
            </SeriesDescriptionContainer>
          </SeriesContainer>
        ))}

        {/* <GallerySlider /> */}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
