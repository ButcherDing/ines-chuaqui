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
          <div key={`gallery` + series.title}>
            <SeriesTitle>{series.title}</SeriesTitle>
            <SeriesContainer>
              <SeriesDescription>
                {series.blurb}
                <br />
                <br />
                <SmallSpan>(click an image to expand)</SmallSpan>
              </SeriesDescription>
              <Lightbox series={series} />
            </SeriesContainer>
          </div>
        ))}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
