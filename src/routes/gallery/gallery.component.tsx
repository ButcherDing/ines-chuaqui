import Button from "../../components/button/button.component";
import Modal from "../../components/modal/modal.component";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  setShowModal,
  setCurSeriesIndex,
} from "../../store/gallery/gallery.slice";

import { Lightbox } from "../../components/lightbox/lightbox.component";

import {
  SeriesTitle,
  SeriesContainer,
  GalleryContainer,
  RouteTitle,
} from "../../routes/gallery/gallery.styles";

export const Gallery = () => {
  const dispatch = useAppDispatch();
  const seriesData = useAppSelector((state) => state.gallery.seriesData);
  const curSeriesIndex = useAppSelector(
    (state) => state.gallery.curSeriesIndex
  );

  const setCurSeriesHandler = (seriesTitle: string) => {
    dispatch(setCurSeriesIndex(seriesTitle));
  };

  return (
    <>
      <GalleryContainer>
        <RouteTitle>Collections</RouteTitle>
        {seriesData.map((series) => (
          <SeriesContainer key={`gallery` + series.title}>
            <SeriesTitle onClick={() => setCurSeriesHandler(series.title)}>
              {series.title}
            </SeriesTitle>
            <Lightbox series={series} />
          </SeriesContainer>
        ))}

        <Modal />
        {/* <GallerySlider /> */}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
