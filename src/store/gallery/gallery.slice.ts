import { RootState } from "../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import {
  getCollectionAndDocuments,
  getFirebaseStorageUrl,
} from "../../utils/firebase/firebase.utils";

// import { updateSliderHelper } from "./gallery.reducerHelper";

export interface GalleryState {
  seriesData: Series[];
  curSeriesIndex: number;
  showModal: boolean;
  isLoading: boolean;
  error?: null | Error;
  // storeUrls: string[];
  // preloadedImgs: any;
  // curSlideIndex: number;
  // curSlideUrl: string;
}

export type Series = {
  title: string;
  pieces: Piece[];
};

export type Piece = {
  description: string;
  largeImageUrl: string;
  smallImageUrl: string;
  id: number;
  title: string;
  printPrice?: number;
};

const initialState: GalleryState = {
  seriesData: [],
  curSeriesIndex: 0,
  showModal: false,
  isLoading: false,
  error: null,
  // storeUrls: [],
  // preloadedImgs: [],
  // curSlideIndex: 0,
  // curSlideUrl: "",
};

////////// THUNKS

export const getSeriesDataAsync = createAsyncThunk(
  "gallery/getSeriesDataAsync",
  async (_, thunkAPI) => {
    const res = await getCollectionAndDocuments("series");
    const seriesData = [...(res as Series[])];
    return seriesData;
  }
);

// export const getImagesAsync = createAsyncThunk(
//   "gallery/getImagesAsync",
//   async (urls: string[], thunkAPI) => {
//     const preloadedImgs = await loadImages(urls);
//     console.log(preloadedImgs);
//     if (!preloadedImgs) return;
//     return preloadedImgs;
//   }
// );
// a lot of this logic could be moved to firebase utils - this is a very specific type of data manipulation happening in here is the problem. Can we do something more generic like using a method to look for all the addresses in the data we pass to utils?
// export const getFirestoreUrlsAsync = createAsyncThunk(
//   "gallery/getFirestoreUrlsAsync",
//   async (_, thunkAPI) => {
//     const urlFetcher = async () => {
//       const state = thunkAPI.getState() as RootState;
//       // const copyArr = [...state.gallery.seriesData];
//       const pathArr = state.gallery.seriesData.flatMap((series) =>
//         series.pieces.map((piece) => piece.fetchPath)
//       );

//       const urlPromiseArr = pathArr.map((path) => {
//         return getFirebaseStorageUrl(path);
//       });

//       return Promise.all(urlPromiseArr);
//     };
//     const urlArr = await urlFetcher();
//     return urlArr as string[];
//   }
// );

/////////////// SLICE

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    // setCurSlideIndex: (state, { payload }) => {
    //   const updates = updateSliderHelper(state, payload, state.curSeriesIndex);
    //   if (updates === undefined) return;

    //   state.curSlideIndex = updates.newSlideIndex;
    //   state.curSlideUrl = updates.newSlideUrl;
    // },

    setCurSeriesIndex: (state, action: PayloadAction<string>) => {
      const newSeriesIndex = state.seriesData
        .map((series) => series.title)
        .indexOf(action.payload);

      // const updates = updateSliderHelper(state, 0, newSeriesIndex);
      // if (updates === undefined) return;

      state.curSeriesIndex = newSeriesIndex;
      // state.curSlideIndex = 0;
      // state.curSlideUrl = updates.newSlideUrl;
    },

    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
  },
  // TODO - can we not collapse all these into a single "loading" thunk or the like?
  extraReducers: (builder) => {
    //////////// get series array - only supposed to be on initial render
    builder.addCase(getSeriesDataAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSeriesDataAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.seriesData = payload;
    });
    builder.addCase(getSeriesDataAsync.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload as Error;
    });
    //////////// Get URLs for pieces
    // builder.addCase(getFirestoreUrlsAsync.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getFirestoreUrlsAsync.fulfilled, (state, { payload }) => {
    //   // if (!payload) return;
    //   state.storeUrls = payload;
    //   state.curSlideUrl = payload[state.curSlideIndex];
    //   state.isLoading = false;
    // });
    // builder.addCase(getFirestoreUrlsAsync.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    // });
    //////////// Preload Piece images
    // builder.addCase(getImagesAsync.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getImagesAsync.fulfilled, (state, { payload }) => {
    //   if (!payload) return;
    //   state.preloadedImgs = payload;
    //   state.isLoading = false;
    // });
    // builder.addCase(getImagesAsync.rejected, (state) => {
    //   state.isLoading = false;
    // });
  },
});

export const { /*setCurSlideIndex,*/ setCurSeriesIndex, setShowModal } =
  gallerySlice.actions;
// export const selectCount = (state: RootState) => state.gallery.curSlideIndex

export default gallerySlice.reducer;
