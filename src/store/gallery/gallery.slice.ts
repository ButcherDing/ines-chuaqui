import { RootState } from "../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import {
  getCollectionAndDocuments,
  getFirebaseStorageUrl,
} from "../../utils/firebase/firebase.utils";

import { updateCurSlideHelper } from "./gallery.reducerHelper";

export interface GalleryState {
  seriesData: Series[];
  storeUrls: string[];
  curSlideIndex: number;
  curSlideUrl: string;
  curSeriesIndex: number;
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
  curSlideIndex: 0,
  curSeriesIndex: 0,
  curSlideUrl: "",
  isLoading: false,
  error: null,
};
///////////// REDUCER HELPER FUNCTIONS

//////////////

export const getSeriesData = createAsyncThunk(
  "gallery/getSeriesData",
  async (_, thunkAPI) => {
    const res = await getCollectionAndDocuments("series");
    const seriesData = [...(res as Series[])];
    const num = seriesData.length;
    console.log(seriesData);
    return seriesData;
  }
);

// a lot of this logic could be moved to firebase utils - this is a very specific type of data manipulation happening in here is the problem. Can we do something more generic like using a method to look for all the addresses in the data we pass to utils?
export const getFirestoreUrls = createAsyncThunk(
  "gallery/getFirestoreUrls",
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
    // TODO: Clean this shit up. Don't need all these reducers, they basically do the same thing, set it to some number. You can just use some helper functions in the component to calc your slide. Could also try a deep clone to streamline things.

    setCurSlideIndex: (state, { payload }) => {
      // NAUGHTY
      const stateCopy = JSON.parse(JSON.stringify(state));
      const updates = updateCurSlideHelper(stateCopy, payload);
      if (updates === undefined) return;
      state.curSlideIndex = updates.newSlideIndex;
      state.curSlideUrl = updates.newSlideUrl;
    },

    setCurSeriesIndex: (state, action: PayloadAction<string>) => {
      const seriesIndex = state.seriesData
        .map((series) => series.title)
        .indexOf(action.payload);
      state.curSeriesIndex = seriesIndex;
      state.curSlideIndex = 0;
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
      state.error = payload as Error;
    });

    builder.addCase(getFirestoreUrls.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getFirestoreUrls.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (!payload) return;
      state.storeUrls = payload;
      state.curSlideUrl = payload[state.curSlideIndex];
    });
    builder.addCase(getFirestoreUrls.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export const { setCurSlideIndex, setCurSeriesIndex } = gallerySlice.actions;
// export const selectCount = (state: RootState) => state.gallery.curSlideIndex

export default gallerySlice.reducer;
