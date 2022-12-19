import { useAppSelector } from "../../store/hooks/hooks";

import { Lightbox } from "../../components/lightbox/lightbox.component";

import {
  SeriesContainer,
  GalleryContainer,
  RouteTitle,
  SeriesDescription,
  SeriesDescriptionContainer,
  SeriesTitle,
  LightboxColumn,
} from "../../routes/gallery/gallery.styles";

export const Gallery = () => {
  const seriesData = useAppSelector((state) => state.gallery.seriesData);

  return (
    <>
      <GalleryContainer>
        <RouteTitle>Gallery</RouteTitle>
        {seriesData.map((series, i) => (
          <SeriesContainer key={`gallery` + series.title}>
            <SeriesTitle>{series.title}</SeriesTitle>
            <SeriesDescriptionContainer>
              <SeriesDescription>{series.blurb}</SeriesDescription>
              <LightboxColumn>
                <Lightbox series={series} />
                <span>click image to enlarge</span>
              </LightboxColumn>
            </SeriesDescriptionContainer>
          </SeriesContainer>
        ))}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
