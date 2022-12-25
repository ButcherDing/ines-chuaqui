import {
  createSlice,
  createAsyncThunk,
  createSelector,
  SerializedError,
} from "@reduxjs/toolkit";
import { PaymentIntentResult } from "@stripe/stripe-js";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  deleteAccountFromFbAuth,
  getCurrentUser,
  signInEmailPass,
  signInWithGooglePopup,
  signOutUser,
  updateDisplayName,
  updateFbAuthEmail,
  updateFbPassword,
} from "../../utils/firebase/firebase.utils";
import { RootState } from "../store";
import { logTransactionAsync } from "../cart/cart.slice";

//  For debugging reducers - use current to console.log a value inside reducer
// import { current } from "immer";
// import { getCurrentScope } from "immer/dist/internal";

//

//////// TYPES

type FormInput = {
  email: string;
  password: string;
};

interface SignUpFormInput extends FormInput {
  displayName: string;
}

type UserState = {
  readonly changedMsg: boolean;
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: SerializedError | null;
};

export type UserData = {
  createdAt: string;
  displayName: string;
  email: string;
  orders: Order[];
};

export type Order = {
  orderedItems: OrderedItem[];
  currentUser: UserData | null;
  orderId: string;
  paymentResult: PaymentIntentResult;
};

const initialState: UserState = {
  changedMsg: false,
  currentUser: null,
  isLoading: false,
  error: null,
};

export type OrderedItem = {
  title: string;
  size: string;
  price: number;
  quantity: number;
  orderId: string;
  date: string;
};

export const dummyCurrentUser: {} = {
  createdAt: "",
  displayName: "",
  email: "",
  orders: "",
};
///// SELECTORS

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);
export const selectOrders = createSelector(
  [selectCurrentUser],
  (currentUser) => {
    if (!currentUser) return;
    return currentUser.orders;
  }
);
export const selectErrorMessage = createSelector(
  [selectUserReducer],
  (user) => {
    if (!user.error) return;
    if (!user.error.message) return "";
    return user.error.message;
  }
);

// TODO research error handling in thunks (best practices in docs?)

///////// THUNKS

export const checkUserSessionAsync = createAsyncThunk(
  "authentication/checkUserSessionAsync",
  async (_, thunkAPI) => {
    try {
      const res = await getCurrentUser();
      if (!res || res === null) return;
      const userData = await createUserDocumentFromAuth(res);
      if (!userData) return;
      return userData.data();
    } catch (error) {
      console.log("error checking current user", error);
      throw error;
    }
  }
);

export const signInEmailPassAsync = createAsyncThunk(
  "authentication/signInWithEmailAndPassword",
  async (signInFormInput: FormInput, thunkAPI) => {
    try {
      const { email, password } = signInFormInput;
      const res = await signInEmailPass(email, password);
      if (!res) return;
      const userSnapshot = await createUserDocumentFromAuth(res.user);
      if (!userSnapshot) return;
      return userSnapshot.data();
    } catch (error) {
      console.log("user sign in failed", error);
      throw error;
    }
  }
);

export const signInGooglePopupAsync = createAsyncThunk(
  "authentication/signInWithGoogle",
  async (_, thunkAPI) => {
    try {
      const res = await signInWithGooglePopup();
      const userSnapshot = await createUserDocumentFromAuth(res.user);

      // throw error?
      if (!userSnapshot) throw new Error("could not find user data");
      return userSnapshot.data();
    } catch (error) {
      console.log("error signing in with google", error);
      throw error;
    }
  }
);

export const signUpWithEmailPassAsync = createAsyncThunk(
  "authentication/signUpWithEmailPass",
  async (signUpFormInput: SignUpFormInput, { dispatch }) => {
    try {
      const { email, password, displayName } = signUpFormInput;
      const res = await createAuthUserWithEmailAndPassword(email, password);

      if (!res) return;
      const userSnapshot = await createUserDocumentFromAuth(res.user, {
        displayName,
      });
      if (!userSnapshot) return;
      dispatch(signInEmailPassAsync({ email, password }));
    } catch (error) {
      console.log("sign up failed", error);
      throw error;
    }
  }
);

export const signOutAsync = createAsyncThunk(
  "authentication/signOut",
  async (_, thunkAPI) => {
    try {
      await signOutUser();
    } catch (error) {
      console.log("error changing signing out:", error);
      throw error;
    }
  }
);

export const changeEmailAsync = createAsyncThunk(
  "authentication/changeEmailAsync",
  async (newEmail: string, thunkAPI) => {
    try {
      await updateFbAuthEmail(newEmail);
      return newEmail;
    } catch (error) {
      console.log("error changing email:", error);
      throw error;
    }
  }
);

export const changePasswordAsync = createAsyncThunk(
  "authentication/changePasswordAsync",
  async (newPassword: string, thunkAPI) => {
    try {
      await updateFbPassword(newPassword);
      // standard to log user out after change?
      // display confimation message
    } catch (error) {
      console.log("error changing password:", error);
      throw error;
    }
  }
);

export const changeDisplayNameAsync = createAsyncThunk(
  "authentication/changeDisplayNameAsync",
  async (newDisplayName: string, thunkAPI) => {
    try {
      await updateDisplayName(newDisplayName);
      return newDisplayName;
    } catch (error) {
      console.log("error changing display name:", error);
      throw error;
    }
  }
);

export const deleteAccountAsync = createAsyncThunk(
  "authentication/deleteAccountAsync",
  async (_, { dispatch, getState }) => {
    try {
      const state = getState() as RootState;
      const currentUser = state.user.currentUser;
      await deleteAccountFromFbAuth({ ...currentUser });
      await dispatch(signOutAsync());
    } catch (error) {
      console.log("error deleting user:", error);
      throw error;
    }
  }
);

///////////

//////////////////////
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setUser: (state, action: PayloadAction<UserData>) => {
    //   state.currentUser = action.payload;
    // },
  },
  /// TODO: wrong way to do this? Even though the doc seems to say like this. Repetitive. Learn about useQuery?
  extraReducers(builder) {
    ////////////////// Sign up
    builder.addCase(signUpWithEmailPassAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUpWithEmailPassAsync.fulfilled, (state) => {
      state.isLoading = false;
      // state is updated by sign in thunk at end of this thunk
    });
    builder.addCase(signUpWithEmailPassAsync.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });
    ////////////////// Sign in with Google
    builder.addCase(signInGooglePopupAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signInGooglePopupAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (!payload) return;
      //// doesn't give us back an object that we can get our currentUser off of the first time, so checksession.
      state.currentUser = payload;
    });
    builder.addCase(signInGooglePopupAsync.rejected, (state, action) => {
      state.isLoading = false;
      if (!state.error) return;
      state.error = action.error;
    });

    ///////////////// Sign in with Email
    builder.addCase(signInEmailPassAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signInEmailPassAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (!payload) return;
      state.currentUser = payload;
    });
    builder.addCase(signInEmailPassAsync.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });

    /////////////// Check User Session
    builder.addCase(checkUserSessionAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(checkUserSessionAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;
      state.currentUser = payload;
      state.isLoading = false;
    });
    builder.addCase(checkUserSessionAsync.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });

    //////////////// Sign Out
    builder.addCase(signOutAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(signOutAsync.fulfilled, (state) => {
      state.isLoading = false;
      state.currentUser = null;
    });
    builder.addCase(signOutAsync.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });
    // TODO consider isLoaded...
    //////////////// Log transaction
    builder.addCase(logTransactionAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(logTransactionAsync.fulfilled, (state, { payload }) => {
      if (!payload) return;
      if (!state.currentUser) return;
      // because someone not logged in can still make a purchase - in this case there is no user to which to push an order record.
      state.currentUser.orders.push(payload);
      state.isLoading = false;
    });
    // order history updates
    builder.addCase(logTransactionAsync.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });

    //////////////// Change Email
    builder.addCase(changeEmailAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(changeEmailAsync.fulfilled, (state, { payload }) => {
      if (!state.currentUser) return;
      if (typeof payload !== "string") return;
      state.currentUser.email = payload;
      state.isLoading = false;
    });
    // email updates in currentUser
    builder.addCase(changeEmailAsync.rejected, (state, { error }) => {
      state.error = error;
      console.log(error);
      state.isLoading = false;
    });
    //////////////// Change Display Name
    builder.addCase(changeDisplayNameAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(changeDisplayNameAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (typeof payload !== "string") return;
      if (!state.currentUser) return;
      state.currentUser.displayName = payload;
    });
    builder.addCase(changeDisplayNameAsync.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });
    //////////////// Change Password
    builder.addCase(changePasswordAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(changePasswordAsync.fulfilled, (state) => {
      // confirmation
      state.isLoading = false;
      state.changedMsg = true;
    });
    builder.addCase(changePasswordAsync.rejected, (state, { error }) => {
      state.isLoading = false;
      console.log(error);
      state.error = error;
    });
    //////////////// Delete Account
    builder.addCase(deleteAccountAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteAccountAsync.fulfilled, (state) => {
      state.isLoading = false;
      state = initialState;
      // account deleted redirect?
    });
    builder.addCase(deleteAccountAsync.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });
    /// SURELY something more elegant than this... useQuery, or possibly something else?
  },
});

// export const { setUser } = userSlice.actions;
// export const selectCount = (state: RootState) => state.gallery.curSlideIndex

export default userSlice.reducer;
