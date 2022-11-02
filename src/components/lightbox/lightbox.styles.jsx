import styled from "styled-components";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

export const CustomLightBox = styled(SlideshowLightbox)`
  display: grid;
  max-width: 70%;
  max-height: 80%;
  /* background-color: black; */
`;
// display: grid;
// grid-template-columns: repeat(4, 40rem);
// grid-template-rows: repeat(4, 40rem);

export const CustomImage = styled.img`
  width: 30rem;
  max-height: 80%;
`;
