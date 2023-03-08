import { RootState } from "../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit"

import {
  getCollectionAndDocuments,
  // getFirebaseStorageUrl,
} from "../../utils/firebase/firebase.utils";
import { PrintType } from "../cart/cart.slice";

////////////////
// TODO consider an api slice instead, useQuery etc.

export interface GalleryState {
  seriesData: Series[];
  curSeriesIndex: number;
  showModal: boolean;
  isLoading: boolean;
  error?: null | Error;
}

export type Series = {
  dbDocumentKey: string;
  blurb: string;
  title: string;
  pieces: Piece[];
};

export type Piece = {
  description: string;
  largeImageUrl: string;
  smallImageUrl: string;
  pieceId: string;
  title: string;
  prints: PrintType[];
};

const initialState: GalleryState = {
  seriesData: [],
  curSeriesIndex: 0,
  showModal: false,
  isLoading: false,
  error: null,
};

////////// THUNKS

export const getSeriesDataAsync = createAsyncThunk(
  "gallery/getSeriesDataAsync",
  async (_, thunkAPI) => {
    try {
      const res = await getCollectionAndDocuments("series");
      const seriesData = [...(res as Series[])];
      // TODO validate
      return seriesData;
    } catch (error) {
      console.error("error fetching series data", error);
      throw error;
    }
  }
);

/////////////// SLICE

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSeriesDataAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSeriesDataAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (!payload) return;
      state.seriesData = payload;
    });
    builder.addCase(getSeriesDataAsync.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as Error;
    });
  },
});

// export const { setCurSlideIndex, setCurSeriesIndex } = gallerySlice.actions;
// export const selectCount = (state: RootState) => state.gallery.curSlideIndex

export default gallerySlice.reducer;
