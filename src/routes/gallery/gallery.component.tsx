import { GalleryContainer } from "./gallery.styles";

import Button from "../../components/button/button.component";
import Modal from "../../components/modal/modal.component";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setShowModal } from "../../store/gallery/gallery.slice";

import { Lightbox } from "../../components/lightbox/lightbox.component";
import { useKeyPress } from "../../store/hooks/useKeyPress.hook";

import GallerySlider from "../../components/gallery-slider/gallery-slider.component";

export const Gallery = () => {
  const dispatch = useAppDispatch();
  const showModal = useAppSelector((state) => state.gallery.showModal);

  const showModalHandler = () => {
    dispatch(setShowModal(showModal ? false : true));
  };

  if (useKeyPress("Escape") && showModal) showModalHandler();

  return (
    <>
      <GalleryContainer>
        {/* <Lightbox /> */}
        <h1>Collections</h1>
        <Button onClick={showModalHandler}>Show Modal</Button>
        {showModal === true && <Modal showModalHandler={showModalHandler} />}
        <GallerySlider />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
