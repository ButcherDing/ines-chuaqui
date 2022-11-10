import { RootState } from "../store";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Piece } from "../gallery/gallery.slice";
import { PaymentIntentResult } from "@stripe/stripe-js";
import { addDocumentToCollection } from "../../utils/firebase/firebase.utils";

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
      acc + cartItem.printPrices[1].price * cartItem.quantity,
    0
  )
);

//////////// HELPOOORRRS

const findCartItemIndex = (state: CartState, cartItemToFind: CartItem) =>
  state.cartItems.findIndex(
    (cartItem) =>
      cartItem.id === cartItemToFind.id &&
      cartItem.buyType === cartItemToFind.buyType
  );
const findCartItemObj = (state: CartState, cartItemToFind: CartItem) =>
  state.cartItems.find(
    (cartItem) =>
      cartItem.id === cartItemToFind.id &&
      cartItem.buyType === cartItemToFind.buyType
  );

/////////// TYPES

export interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
  isLoading: boolean;
}

export type CartItem = {
  quantity: number;
  buyType: Print;
} & Piece;

export type Print = { size: string; price: number };

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
  isLoading: false,
};

//////////// THUNKS
// do we need to handle errors here?
export const logTransactionToFirebase = createAsyncThunk(
  "checkout/logTransactionToFirebase",
  async (paymentResult: PaymentIntentResult, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    console.log(state);
    const { currentUser } = state.user;
    const { cartItems } = state.cart;
    const orderDoc = {
      currentUser,
      cartItems,
      paymentResult,
    };
    if (!paymentResult.paymentIntent) return console.error("no payment token");
    const fbRes = await addDocumentToCollection(
      "transactions",
      paymentResult.paymentIntent.id,
      orderDoc
    );
    return fbRes;
  }
);

////////////

// TODO Names need rethinking too.

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // consider making the payload a new type, is this a bit confusing to read?
    setCartItems: (state, action: PayloadAction<CartItem>) => {
      const { payload: cartItemToAdd } = action;
      if (!cartItemToAdd.quantity || !cartItemToAdd.buyType) return;
      const existingItem = state.cartItems.find(
        (cartItem) =>
          cartItem.id === cartItemToAdd.id &&
          cartItem.buyType === cartItemToAdd.buyType
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
  extraReducers(builder) {
    //////////////// Log Purchase
    builder.addCase(logTransactionToFirebase.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(logTransactionToFirebase.fulfilled, (state) => {
      state.isLoading = false;
      state.cartItems = [];
      state.isCartOpen = false;
      console.log(state);
    });
    builder.addCase(logTransactionToFirebase.rejected, (state) => {
      state.isLoading = false;
    });
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
