import { useEffect } from "react";

import "lightbox.js-react/dist/index.css";
import "./lightbox.styles.jsx";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import { CustomLightBox, CustomImage } from "./lightbox.styles.jsx";

export const Lightbox = () => {
  // useEffect(() => {
  //   initLightboxJS("AEBD-F4A5-C371-3200", "Individual");
  // });

  return (
    <CustomLightBox className="container grid grid-cols-3 gap-2 mx-auto">
      <CustomImage
        className="w-full rounded"
        src="https://i.ibb.co/CKmZh2Z/skull-1.jpg"
        alt="skull painting with flowers"
      />
      <CustomImage
        className="w-full rounded"
        src="https://i.ibb.co/pJ435cL/skull-2.jpg"
        alt="skull painting with flowers"
      />
      <CustomImage
        className="w-full rounded"
        src="https://i.ibb.co/XbFsSHY/skull-3.jpg"
        alt="skull painting with flowers"
      />
    </CustomLightBox>
  );
};
