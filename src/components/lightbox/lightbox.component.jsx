import { useEffect, Fragment } from "react";

import "../../index.css";
import "./lightbox.styles.scss";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

import { Series } from "../../store/gallery/gallery.slice";
import { useAppSelector } from "../../store/hooks/hooks";

// where should we use our selectors? best practices

export const Lightbox = ({ series }) => {
  const numStyleCols = series.pieces.length;

  return (
    <SlideshowLightbox
      data-series={series.pieces.length}
      imgAnimation="fade"
      imgfullScreen={true}
      className={`lightbox grid-3-columns`}
    >
      {series.pieces.map((piece) => (
        <img
          className=".lightbox-image"
          src={piece.smallImageUrl}
          key={piece.title}
          alt={`a painting called` + piece.title}
        />
      ))}
    </SlideshowLightbox>
  );
};

///////////////////

// useEffect(() => {
//   initLightboxJS("AEBD-F4A5-C371-3200", "Individual");
// });
