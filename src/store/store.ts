import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";

import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
// REDUCER SLICES
import galleryReducer from "./gallery/gallery.slice";
import userReducer from "./user/user-slice";
import cartReducer from "./cart/cart.slice";
//
// NOTE: Type doesn't get passed properly if we merge everything into one state as commented out below - probably an automation problem with configurestore.
// const reducers = combineReducers({
//   cartReducer,
//   userReducer,
//   galleryReducer,
// });
const persistStandardConfig = {
  key: "root",
  storage,
};

const persistUserConfig = {
  key: "user",
  storageSession,
};

export const persistedCartReducer = persistReducer(persistStandardConfig, cartReducer);
export const persistedGalleryReducer = persistReducer(
  persistStandardConfig,
  galleryReducer
);
// const persistedUserReducer = persistReducer(persistStandardConfig, userReducer);

export const setupStore = () => configureStore({
  reducer: {
    gallery: persistedGalleryReducer,
    cart: persistedCartReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }) /*.concat(logger),*/,
});


export const store = setupStore()

export const persistor = persistStore(store);

export type GetState = typeof store.getState;

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// EMERGENCY PURGE (FOR DEV)
// const toPurge: any = persistor.purge();
// console.log("purged:", toPurge);
