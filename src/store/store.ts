import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import galleryReducer from "./gallery/gallery.slice";

import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    // cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type GetState = typeof store.getState;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
