import { RootState } from "../store";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Piece } from "../gallery/gallery.slice";
import { PaymentIntentResult } from "@stripe/stripe-js";
import {
  addDocumentToCollection,
  getCurrentUser,
} from "../../utils/firebase/firebase.utils";
import { current } from "immer";
import { getCurrentScope } from "immer/dist/internal";

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
      cartItem.buyType.size === cartItemToFind.buyType.size
  );

const findSameItem = (itemArr: CartItem[], itemToFind: CartItem) =>
  itemArr.find(
    (item) => item.id === itemToFind.id && item.buyType === itemToFind.buyType
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
  cartId: string;
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
    const userRes = await getCurrentUser();
    if (!userRes) return;
    const updateUserHistoryRes = await addDocumentToCollection(
      "users",
      userRes.uid,
      { orders: orderDoc }
    );
    // we need to sift the data a bit more, the whole object ends up in fb users (but now being )
    return;
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
      const oldCartItems = state.cartItems;
      const newCartItem = action.payload;
      const sameItem = oldCartItems.find(
        (oldItem) => newCartItem.cartId === oldItem.cartId
      );
      sameItem
        ? (sameItem.quantity += newCartItem.quantity)
        : state.cartItems.push(newCartItem);
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
      const existingItem = findSameItem(state.cartItems, cartItemToDec);
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
