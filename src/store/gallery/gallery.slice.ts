import { RootState, GetState, store } from "../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getFirebaseStorageUrl } from "../../utils/firebase/firebase.utils";

// import type { RootState } from "../store"

// const slides: Slide[] = [
//   { path: "/img-copy/skull-1.jpg", title: "Skull1" },
//   { path: "/img-copy/skull-2.jpg", title: "Skull2" },
//   { path: "/img-copy/skull-3.jpg", title: "Skull3" },
//   { path: "/img-copy/skull-4.jpg", title: "Skull4" },
//   { path: "/img-copy/skull-5.jpg", title: "Skull5" },
// ];

const slides: Slide[] = [
  { path: "/pieces/skull-1.jpg", title: "Skull1" },
  { path: "/pieces/skull-2.jpg", title: "Skull2" },
  { path: "/pieces/skull-3.jpg", title: "Skull3" },
  { path: "/pieces/skull-4.jpg", title: "Skull4" },
  { path: "/pieces/skull-5.jpg", title: "Skull5" },
];

export type Slide = {
  path: string;
  title: string;
};

export interface GalleryState {
  // TODO any
  collection: any;
  slides: Slide[];
  curSlide: number;
  curSlideUrl: string;
  isLoading: boolean;
  error?: null | Error;
}

const initialState: GalleryState = {
  collection: {},
  slides: slides,
  curSlide: 0,
  curSlideUrl: "",
  isLoading: false,
  error: null,
};

// these are 'automagically' turned into non-mutating reducers, abstracted away from us. This is not actually how redux works - remember the whole point of reducers is not to mutate our original state! Immutability please!

// placeholder only: TODO: get images onto firebase and fetch dynamically
// export const getCollection = createAsyncThunk(
//   'collection/getCollection',
//   async (thunkAPI) => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
//       (data) => data.json()
//     )
//     return res
//   })
export const getCollection = createAsyncThunk(
  "collection/getCollection",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const curSlide = state.gallery.curSlide;
    console.log(curSlide);
    return await getFirebaseStorageUrl(slides[curSlide].path);

    // dispatch to new action setting the path, action (below) sets the state, job done (except we need a useEffect to fire when we boot up the app to initialize our curSlideUrl)
  }
);

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    increment: (state) => {
      state.curSlide += 1;
    },
    decrement: (state) => {
      state.curSlide -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.curSlide += action.payload;
    },
    // set url to payload
  },
  extraReducers: (builder) => {
    builder.addCase(getCollection.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCollection.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload) state.curSlideUrl = payload;
    });
    builder.addCase(getCollection.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export const { increment, decrement, incrementByAmount } = gallerySlice.actions;
// export const selectCount = (state: RootState) => state.gallery.curSlide

export default gallerySlice.reducer;
