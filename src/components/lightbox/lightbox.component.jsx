import { useEffect } from "react";

import "../../index.css";
import "./lightbox.styles.scss";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

// where should we use our selectors? best practices

export const Lightbox = ({ series }) => {
  const numStyleCols = series.pieces.length;

  //// INITIALIZER (spams console warnings)
  // useEffect(() => {
  //   initLightboxJS("AEBD-F4A5-C371-3200", "Individual");
  // }, []);

  return (
    <SlideshowLightbox
      data-series={series.pieces.length}
      imgAnimation="fade"
      imgfullScreen={true}
      className={`lightbox grid`}
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
