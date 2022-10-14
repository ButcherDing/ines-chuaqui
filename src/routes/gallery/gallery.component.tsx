import GallerySlider from "../../components/slider/gallery-slider.component";
import { GalleryContainer } from "./gallery.styles";

export const Gallery = () => {
  return (
    <>
      <GalleryContainer>
        <h1>Collection</h1>
        <GallerySlider />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
