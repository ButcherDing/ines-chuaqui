import { RootState } from "../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";

import {
  getCollectionAndDocuments,
  getFirebaseStorageUrl,
} from "../../utils/firebase/firebase.utils";

export interface GalleryState {
  // can we not be more specific about type here, overload seriesData?
  seriesData: DocumentData[] | [];
  curSlide: number;
  curSlidePath: string;
  curSlideUrl: string;
  curSeries: number;
  isLoading: boolean;
  error?: null | Error;
}
export type Series = {
  title: string;
  pieces: Piece[];
};

export type Slide = {
  description: string;
  id: number;
  fetchPath: string;
  title: string;
};

export type Piece = {
  description: string;
  fetchPath: string;
  id: number;
  title: string;
};

const initialState: GalleryState = {
  seriesData: [],
  curSlide: 0,
  curSlidePath: "",
  curSeries: 0,
  curSlideUrl: "",
  isLoading: false,
  error: null,
};

export const getImage = createAsyncThunk(
  "gallery/getImage",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const pathForFirestore =
      state.gallery.seriesData[state.gallery.curSeries].pieces[
        state.gallery.curSlide
      ].fetchPath;
    return await getFirebaseStorageUrl(pathForFirestore);
  }
);

export const getSeriesData = createAsyncThunk(
  "gallery/getSeriesData",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const seriesData = await getCollectionAndDocuments("series");
    const res = await getFirebaseStorageUrl(
      seriesData[state.gallery.curSeries].pieces[state.gallery.curSlide]
        .fetchPath
    );
    if (res) {
      const curSlideUrl = res;
      return { seriesData, curSlideUrl };
    }
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
    setCurSeries: (state, action: PayloadAction<string>) => {
      const seriesIndex = state.seriesData
        .map((series) => series.title)
        .indexOf(action.payload);
      state.curSeries = seriesIndex;
    },
    // set url to payload
  },
  // TODO factor out addcase into actions
  extraReducers: (builder) => {
    // get image
    builder.addCase(getImage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getImage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload) state.curSlideUrl = payload;
    });
    builder.addCase(getImage.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    // get series array - only supposed to be on initial render
    builder.addCase(getSeriesData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSeriesData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload === undefined) return;
      state.seriesData = payload.seriesData;
      state.curSlideUrl = payload.curSlideUrl;
      // state.curSeries = 0;
    });
    builder.addCase(getSeriesData.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export const { increment, decrement, incrementByAmount, setCurSeries } =
  gallerySlice.actions;
// export const selectCount = (state: RootState) => state.gallery.curSlide

export default gallerySlice.reducer;
