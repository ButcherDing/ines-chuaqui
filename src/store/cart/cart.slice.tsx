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
  updateDocumentArrayInCollection,
} from "../../utils/firebase/firebase.utils";
import { checkUserSessionAsync } from "../user/user-slice";

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
    // this matching appears everywhere, to helper function?
    const matchedItem = cartItems.find(
      (item) => item.cartId === currentItem.cartId
    );
    if (!matchedItem) return;
    return matchedItem;
  }
);
// export const selectIsCartOpen = createSelector(
//   [selectCartReducer],
//   (cart) => cart.isCartOpen
// );

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

// export const selectCartItem = createSelector([selectCartItems],
//   (cartItems)=>
//   cartItems

/////////// TYPES

export type CartState = {
  // isCartOpen: boolean;
  cartItems: CartItem[];
  isLoading: boolean;
  currentItem: CartItem;
};

export type CartItem = {
  quantity: number;
  printType: PrintType;
  cartId: CartId;
} & Piece;

// make more strict?
export type CartId = string;

export type PrintType = { size: string; price: number };

///////////// INITIAL STATE

export const initialState: CartState = {
  // isCartOpen: false,
  cartItems: [],
  isLoading: false,
  currentItem: {
    description: "",
    largeImageUrl: "",
    smallImageUrl: "",
    pieceId: -1,
    title: "draft",
    prints: [],
    quantity: -1,
    printType: { size: "", price: -1 },
    cartId: "draft",
  },
};
//////////// THUNKS

// this does a lot of things....
export const logTransactionToFirebase = createAsyncThunk(
  "checkout/logTransactionToFirebase",
  async (paymentResult: PaymentIntentResult, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const { currentUser } = state.user;
      const { cartItems } = state.cart;

      if (!paymentResult.paymentIntent)
        return console.error("no payment intent token received from stripe");

      // Prepare a transaction document (consider function). This records the user, the items they purchased (cart items), and the payment result object. It also makes the orderId more accessible by copying it to the top level. (Rationale: as it is deeply nested - this deep nesting preserved because we don't want to start modifying the stripe payment result object, we want all these details to stay the same.)
      const orderDoc = {
        currentUser,
        cartItems,
        paymentResult,
        orderId: paymentResult.paymentIntent.id,
      };

      // write the TRANSACTION document to our transaction records in firebase
      await addDocumentToCollection(
        "transactions",
        paymentResult.paymentIntent.id,
        orderDoc
      );

      // create our orderHistory object - we want a different, simpler object to work with when we pull it off of user later

      const formattedDate = paymentResult.paymentIntent
        ? String(
            new Date(
              paymentResult.paymentIntent.created * 1000
            ).toLocaleDateString()
          )
        : "no date";

      const formattedBoughtItems = cartItems.map((cartItem) => {
        const orderItem = {
          title: cartItem.title,
          size: cartItem.printType.size,
          price: cartItem.printType.price,
          quantity: cartItem.quantity,
          orderId: paymentResult.paymentIntent.id,
          date: formattedDate,
        };
        return orderItem;
      });

      const userOrderDoc = {
        currentUser,
        formattedBoughtItems,
        paymentResult,
        orderId: paymentResult.paymentIntent.id,
      };

      console.log(formattedBoughtItems);
      // we don't have the uid anywhere in state unfortunately....
      const userRes = await getCurrentUser();
      if (!userRes) return;
      await updateDocumentArrayInCollection(
        "users",
        userRes.uid,
        "orders",
        userOrderDoc
      );
      thunkAPI.dispatch(checkUserSessionAsync());
      return userOrderDoc;
    } catch (error) {
      console.error(error);
    }
  }
);

//////////// COMPONENT HELPERS

export const makeDraftCartItem = (piece: Piece, printType: PrintType) => {
  return {
    ...piece,
    printType,
    quantity: -1,
    cartId: `${piece.pieceId + printType.size}`,
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
    new Date(unixStamp * 1000).toLocaleTimeString().slice(0, -3)
  );
};

//////////// REDUCER SLICE

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    chooseItem: (state, action: PayloadAction<CartItem>) => {
      const cartItemToSelect = action.payload;
      console.log(cartItemToSelect);
      const matchedItem = state.cartItems.find(
        (item) => item.cartId === cartItemToSelect.cartId
      );
      matchedItem
        ? (state.currentItem = matchedItem)
        : (state.currentItem = cartItemToSelect);
    },

    // selectItem: (state, action: PayloadAction<CartId>) => {
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
        // UX-wise this one kind of jarring
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
    builder.addCase(logTransactionToFirebase.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(logTransactionToFirebase.fulfilled, (state) => {
      state.isLoading = false;
      state.cartItems = [];
      // state.isCartOpen = false;
    });
    builder.addCase(logTransactionToFirebase.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { removeCartItem, minusCartItem, addCartItem, chooseItem } =
  cartSlice.actions;

export default cartSlice.reducer;

// Possible feature to add - item types for prints vs originals vs cards - also available sizes for prints. Probably best to just have these as different category items in the db rather than calculating with logic in-app.
