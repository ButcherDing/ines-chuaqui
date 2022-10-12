import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
// import type { RootState } from "../store"

const slides: Slide[] = [
  { path: "/img-copy/skull-1.jpg", title: "Skull1" },
  { path: "/img-copy/skull-2.jpg", title: "Skull2" },
  { path: "/img-copy/skull-3.jpg", title: "Skull3" },
  { path: "/img-copy/skull-4.jpg", title: "Skull4" },
  { path: "/img-copy/skull-5.jpg", title: "Skull5" },
];

export type Slide = {
  path: string;
  title: string;
};

interface GalleryState {
  slides: Slide[];
  curSlide: number;
}

const initialState: GalleryState = {
  slides: slides,
  curSlide: 0
}

// these are 'automagically' turned into non-mutating reducers, abstracted away from us. This is not actually how redux works - remember the whole point of reducers is not to mutate our original state! Immutability please!

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    increment: (state) => {
      state.curSlide += 1
    },
    decrement: (state) => {
      state.curSlide -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.curSlide += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = gallerySlice.actions
// export const selectCount = (state: RootState) => state.gallery.curSlide

export default gallerySlice.reducer