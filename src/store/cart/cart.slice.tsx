import { RootState } from "../store";
import {
  createAsyncThunk,
  createSelector,
  createDraftSafeSelector,
  createSlice,
  createAction,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Piece } from "../gallery/gallery.slice";
import CartItem from "../../components/cart-item/cart-item.component";
import { CreateContextOptions } from "vm";

///////// SELECTORS

const selectCartReducer = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc: number, cartItem: CartItem) => acc + cartItem.quantity,
    0
  )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc: number, cartItem: CartItem) =>
      acc + cartItem.printPrice * cartItem.quantity,
    0
  )
);

//////////// HELPOOORRRS

const findCartItemIndex = (state: CartState, cartItemToFind: CartItem) =>
  state.cartItems.findIndex((cartItem) => cartItem.id === cartItemToFind.id);
const findCartItemObj = (state: CartState, cartItemToFind: CartItem) =>
  state.cartItems.find((cartItem) => cartItem.id === cartItemToFind.id);

/////////// TYPES

export interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
}

export type CartItem = {
  quantity: number;
} & Piece;

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItem>) => {
      const { payload: cartItemToAdd } = action;

      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
      );
      existingItem
        ? (existingItem.quantity += cartItemToAdd.quantity)
        : state.cartItems.push(cartItemToAdd);
    },
    setIsCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
    removeCartItem: (state, action: PayloadAction<CartItem>) => {
      const { payload: cartItemToRemove } = action;
      state.cartItems.splice(findCartItemIndex(state, cartItemToRemove), 1);
    },
    plusCartItem: (state, action: PayloadAction<CartItem>) => {
      const { payload: cartItemToInc } = action;
      state.cartItems[findCartItemIndex(state, cartItemToInc)].quantity++;
    },
    minusCartItem: (state, action: PayloadAction<CartItem>) => {
      const { payload: cartItemToDec } = action;
      const existingItem = findCartItemObj(state, cartItemToDec);
      if (existingItem && existingItem.quantity <= 0) return;
      state.cartItems[findCartItemIndex(state, cartItemToDec)].quantity--;
    },
  },
});

export const {
  setCartItems,
  setIsCartOpen,
  removeCartItem,
  minusCartItem,
  plusCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;

// Possible feature to add - item types for prints vs originals vs cards - also available sizes for prints. Probably best to just have these as different category items in the db rather than calculating with logic in-app.
