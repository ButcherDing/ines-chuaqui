import { useAppSelector } from "../../store/hooks/hooks";

import { Lightbox } from "../../components/lightbox/lightbox.component";

import {
  SeriesContainer,
  GalleryContainer,
  RouteTitle,
  SeriesDescription,
  SeriesTitle,
  SmallSpan,
} from "../../routes/gallery/gallery.styles";

export const Gallery = () => {
  const seriesData = useAppSelector((state) => state.gallery.seriesData);

  return (
    <>
      <GalleryContainer>
        <RouteTitle>Gallery</RouteTitle>
        {seriesData.map((series) => (
          <>
            <SeriesTitle>{series.title}</SeriesTitle>
            <SeriesContainer key={`gallery` + series.title}>
              <SeriesDescription>
                {series.blurb}
                <br />
                <br />
                <SmallSpan>(click an image to expand)</SmallSpan>
              </SeriesDescription>
              <Lightbox series={series} />
            </SeriesContainer>
          </>
        ))}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
