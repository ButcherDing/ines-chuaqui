import "../../index.css";
import "./lightbox.styles.scss";
import { SlideshowLightbox } from "lightbox.js-react";

export const Lightbox = ({ series }) => {
  return (
    <>
      <SlideshowLightbox
        data-series={series.pieces.length}
        imgAnimation="fade"
        imgfullScreen={true}
        className={`lightbox`}
      >
        {series.pieces.map((piece) => (
          <img
            className="lightbox-image"
            src={piece.largeImageUrl}
            key={piece.title}
            alt={`a painting called` + piece.title}
            caption={`${piece.title}`}
          />
        ))}
      </SlideshowLightbox>
    </>
  );
};

///////////////////
