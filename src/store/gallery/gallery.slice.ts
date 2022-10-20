import { RootState } from "../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import {
  getCollectionAndDocuments,
  getFirebaseStorageUrl,
} from "../../utils/firebase/firebase.utils";
import { DocumentData } from "firebase/firestore";

export interface GalleryState {
  // can we not be more specific about type here, overload seriesData?
  seriesData: Series[];
  storeUrls: (string | void)[];
  curSlide: number;
  curSlideUrl: string;
  curSeries: number;
  isLoading: boolean;
  error?: null | Error;
}
export type Series = {
  title: string;
  pieces: Piece[];
};

export type Piece = {
  description: string;
  fetchPath: string;
  id: number;
  title: string;
};

const initialState: GalleryState = {
  seriesData: [],
  storeUrls: [],
  curSlide: 0,
  curSeries: 0,
  curSlideUrl: "",
  isLoading: false,
  error: null,
};

export const getSeriesData = createAsyncThunk(
  "gallery/getSeriesData",
  async (_, thunkAPI) => {
    const res = await getCollectionAndDocuments("series");
    const seriesData = [...(res as Series[])];
    console.log(seriesData);
    return seriesData;
  }
);

export const getPieceUrls = createAsyncThunk(
  "gallery/getPieceUrls",
  async (_, thunkAPI) => {
    const urlFetcher = async () => {
      const state = thunkAPI.getState() as RootState;
      const copyArr = [...state.gallery.seriesData];
      console.log(copyArr);

      const pathArr = state.gallery.seriesData.flatMap((series) =>
        series.pieces.map((piece) => piece.fetchPath)
      );
      const urlPromiseArr = pathArr.map((path) => {
        return getFirebaseStorageUrl(path);
      });

      return Promise.all(urlPromiseArr);
    };
    const urlArr = await urlFetcher();
    return urlArr as string[];
  }
);

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    increment: (state) => {
      state.curSlide += 1;
      // state.curSlideUrl = ???;
    },
    decrement: (state) => {
      state.curSlide -= 1;
    },
    setCurSeries: (state, action: PayloadAction<string>) => {
      const seriesIndex = state.seriesData
        .map((series) => series.title)
        .indexOf(action.payload);
      state.curSeries = seriesIndex;
    },
  },
  // TODO factor out addcase into actions
  extraReducers: (builder) => {
    // get series array - only supposed to be on initial render
    builder.addCase(getSeriesData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSeriesData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.seriesData = payload;
    });
    builder.addCase(getSeriesData.rejected, (state, { payload }) => {
      state.isLoading = false;
    });

    builder.addCase(getPieceUrls.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getPieceUrls.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (!payload) return;
      state.storeUrls = payload;
      state.curSlideUrl = payload[state.curSlide];
    });
    builder.addCase(getPieceUrls.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export const { increment, decrement, setCurSeries } = gallerySlice.actions;
// export const selectCount = (state: RootState) => state.gallery.curSlide

export default gallerySlice.reducer;
