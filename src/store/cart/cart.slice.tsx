import { RootState } from "../store";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Piece } from "../gallery/gallery.slice";
import { PaymentIntent, PaymentIntentResult } from "@stripe/stripe-js";
import {
  addDocumentToCollection,
  getCurrentUser,
  updateDocumentArrayInCollection,
} from "../../utils/firebase/firebase.utils";
import { OrderedItem } from "../user/user-slice";
import { fetchTotal } from "../../utils/stripe/stripe.utils";

////  For debugging reducers - use current to console.log a value inside reducer
// import { current } from "immer";
// import { getCurrentScope } from "immer/dist/internal";
////

///////// SELECTORS

const selectCartReducer = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCurrentItem = createSelector(
  [selectCartReducer],
  (cart) => cart.currentItem
);

export const selectCartItem = createSelector(
  [selectCartItems, selectCurrentItem],
  (cartItems, currentItem) => {
    const matchedItem = cartItems.find(
      (item) => item.cartId === currentItem.cartId
    );
    if (!matchedItem) return;
    return matchedItem;
  }
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
      acc + cartItem.printType.price * cartItem.quantity,
    0
  )
);

/////////// TYPES

export type CartState = {
  cartItems: CartItem[];
  isLoading: boolean;
  currentItem: CartItem;
  error: SerializedError | null;
};

export type CartItem = {
  quantity: number;
  printType: PrintType;
  cartId: CartId;
} & Piece;
export type PrintType = { size: string; price: number };
export type CartId = string;

///////////// INITIAL STATE

export const initialState: CartState = {
  cartItems: [],
  isLoading: false,
  currentItem: {
    description: "",
    largeImageUrl: "",
    smallImageUrl: "",
    pieceId: "dummy",
    title: "draft",
    prints: [],
    quantity: -1,
    printType: { size: "", price: -1 },
    cartId: "draft",
  },
  error: null,
};
//////////// THUNKS

// Codesmell: does too many things
export const logTransactionAsync = createAsyncThunk(
  "checkout/logTransactionAsync",
  async (paymentIntent: PaymentIntent, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const { currentUser } = state.user;
      const { cartItems } = state.cart;

      console.log("payment intent:", paymentIntent);
      if (!paymentIntent)
        return console.error("no payment result from payment provider");

      // make new order doc
      const orderDoc = {
        currentUser,
        cartItems,
        paymentIntent,
        orderId: paymentIntent.id,
      };

      // write it to fb
      await addDocumentToCollection("transactions", paymentIntent.id, orderDoc);

      // create our orderHistory object to append to currentUser
      const formattedDate = paymentIntent
        ? String(new Date(paymentIntent.created * 1000).toLocaleDateString())
        : "no date";

      // helper
      const makeOrderedItems = (cartItems: CartItem[]): OrderedItem[] => {
        const orderedItems = cartItems.map((cartItem) => {
          const orderedItem = {
            title: cartItem.title,
            size: cartItem.printType.size,
            price: cartItem.printType.price,
            quantity: cartItem.quantity,
            orderId: paymentIntent.id,
            date: formattedDate,
          };
          return orderedItem;
        });
        return orderedItems;
      };

      const orderedItems = makeOrderedItems(cartItems);

      const userOrderDoc = {
        currentUser,
        orderedItems,
        paymentIntent,
        orderId: paymentIntent.id,
      };

      const userRes = await getCurrentUser();
      if (!userRes) return;
      await updateDocumentArrayInCollection(
        "users",
        userRes.uid,
        "orders",
        userOrderDoc
      );
      return userOrderDoc;
    } catch (error) {
      console.error("Error logging transaction to database:", error);
      throw error;
    }
  }
);

//////////// COMPONENT HELPERS
export const makeDraftCartItem = (piece: Piece, printType: PrintType) => {
  return {
    ...piece,
    printType,
    quantity: -1,
    cartId: `${piece.pieceId + "s" + printType.size}`,
  };
};

//////////// SLICE HELPERS
const findCartItemIndex = (state: CartState, cartItemToFind: CartItem) =>
  state.cartItems.findIndex(
    (cartItem) => cartItem.cartId === cartItemToFind.cartId
  );

export const unixToDate = (unixStamp: number | undefined) => {
  if (!unixStamp) return "invalid date";
  return (
    new Date(unixStamp * 1000).toLocaleDateString() +
    " - " +
    new Date(unixStamp * 1000).toLocaleTimeString()
  );
};

//////////// REDUCER SLICE

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    chooseItem: (state, action: PayloadAction<CartItem>) => {
      const cartItemToSelect = action.payload;
      const matchedItem = state.cartItems.find(
        (item) => item.cartId === cartItemToSelect.cartId
      );
      matchedItem
        ? (state.currentItem = matchedItem)
        : (state.currentItem = cartItemToSelect);
    },

    addCartItem: (state, action: PayloadAction<CartItem>) => {
      const itemToAdd = action.payload;
      if (itemToAdd.title === "draft") return;
      const existingItem = state.cartItems.find(
        (item) => item.cartId === itemToAdd.cartId
      );
      existingItem
        ? existingItem.quantity++
        : state.cartItems.push({ ...itemToAdd, quantity: 1 });
    },
    minusCartItem: (state, action: PayloadAction<CartItem>) => {
      const cartItemToMinus = action.payload;
      const matchedItemInCart = state.cartItems.find(
        (item) => item.cartId === cartItemToMinus.cartId
      );
      if (!matchedItemInCart) {
        return;
      } else if (cartItemToMinus.quantity === -1) {
        return;
        // jarring UX
      } else if (cartItemToMinus.quantity === 1) {
        state.cartItems.splice(findCartItemIndex(state, cartItemToMinus), 1);
      } else {
        matchedItemInCart.quantity--;
      }
    },

    removeCartItem: (state, action: PayloadAction<CartItem>) => {
      const { payload: cartItemToRemove } = action;
      state.cartItems.splice(findCartItemIndex(state, cartItemToRemove), 1);
    },
  },

  extraReducers: (builder) => {
    //////////////// Log Purchase
    builder.addCase(logTransactionAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(logTransactionAsync.fulfilled, (state) => {
      state.isLoading = false;
      state.cartItems = [];
      // state.isCartOpen = false;
    });
    builder.addCase(logTransactionAsync.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });
  },
});

export const { removeCartItem, minusCartItem, addCartItem, chooseItem } =
  cartSlice.actions;

export default cartSlice.reducer;

// Possible feature to add - item types for prints vs originals vs cards - also available sizes for prints. Probably best to just have these as different category items in the db rather than calculating with logic in-app.
