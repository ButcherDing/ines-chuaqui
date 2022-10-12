import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import galleryReducer from "./gallery/gallery-slice";

export const store = configureStore({
  reducer: {
    gallery: galleryReducer
    // cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

