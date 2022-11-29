import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { PaymentIntentResult } from "@stripe/stripe-js";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  addDocumentToCollection,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  deleteAccountFromFb,
  getCurrentUser,
  signInEmailPass,
  signInWithGooglePopup,
  signOutUser,
  updateDisplayName,
  updateFbAuthEmail,
  updateFbPassword,
} from "../../utils/firebase/firebase.utils";
import { RootState } from "../store";
import { useAppDispatch } from "../hooks/hooks";
import { FirebaseError } from "firebase/app";
import { CartItem, logTransactionToFirebase } from "../cart/cart.slice";

//////// TYPES

type FormInput = {
  email: string;
  password: string;
};

interface SignUpFormInput extends FormInput {
  displayName: string;
}

type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
  orders: Order[];
};

export type Order = {
  formattedBoughtItems: FormattedOrderItem[];
  currentUser: UserData;
  orderId: string;
  paymentResult: PaymentIntentResult;
};
// orderDoc.paymentResult.paymentIntent: amount, created
// date = new Date(created * 1000)

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export type FormattedOrderItem = {
  title: string;
  size: string;
  price: number;
  quantity: number;
  orderId: number;
  date: string;
};

///// SELECTORS

export const selectUserReducer = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);

// TODO research error handling in thunks (best practices in docs)
///////// THUNKS

export const checkUserSession = createAsyncThunk(
  "authentication/checkUserSession",
  async (_, thunkAPI) => {
    try {
      const res = await getCurrentUser();
      if (!res || res === null) return;
      const userData = await createUserDocumentFromAuth(res);
      if (!userData) return;
      return userData.data();
    } catch (error) {
      console.log("error checking current user", error);
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
      console.log(userSnapshot);
      return userSnapshot.data();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  }
);

export const signInGooglePopupAsync = createAsyncThunk(
  "authentication/signInWithGoogle",
  async (thunkAPI) => {
    try {
      const res = await signInWithGooglePopup();

      const userSnapshot = await createUserDocumentFromAuth(res.user);

      // throw error?
      if (!userSnapshot) return;
      return userSnapshot.data();
    } catch (error) {
      console.log("error signing in with google", error);
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
      const notSnapshot = await createUserDocumentFromAuth(res.user, {
        displayName,
      });
      dispatch(signInEmailPassAsync({ email, password }));
    } catch (error) {
      console.log("sign up failed", error);
    }
  }
);

export const signOut = createAsyncThunk(
  "authentication/signOut",
  async (_, thunkAPI) => {
    try {
      await signOutUser();
    } catch (error) {
      console.log("error changing signing out:" + error);
    }
  }
);

export const changeEmail = createAsyncThunk(
  "authentication/changeEmail",
  async (newEmail: string, thunkAPI) => {
    try {
      updateFbAuthEmail(newEmail);
      checkUserSession();
    } catch (error) {
      console.log("error changing email:" + error);
    }
  }
);
export const changePassword = createAsyncThunk(
  "authentication/changePassword",
  async (newPassword: string, thunkAPI) => {
    try {
      updateFbPassword(newPassword);
      // standard to log user out after change?
      checkUserSession();
    } catch (error) {
      console.log("error changing password:" + error);
    }
  }
);
export const changeDisplayName = createAsyncThunk(
  "authentication/changeDisplayName",
  async (newDisplayName: string, thunkAPI) => {
    try {
      updateDisplayName(newDisplayName);
      console.log("display name updated");
      checkUserSession();
    } catch (error) {
      console.log("error changing display name:" + error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "authentication/deleteUser",
  async (_, { dispatch }) => {
    try {
      deleteAccountFromFb();
      console.log("account deleted");
      dispatch(signOut());
    } catch (error) {
      console.log("error deleting user:" + error);
    }
  }
);

///////////

//////////////////////
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.currentUser = action.payload;
    },
  },
  /// TODO: wrong way to do this? Even though the doc seems to say like this. Repetitive. Learn about useQuery?
  extraReducers(builder) {
    ////////////////// Sign up
    builder.addCase(signUpWithEmailPassAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUpWithEmailPassAsync.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(signUpWithEmailPassAsync.rejected, (state) => {
      state.isLoading = false;
    });
    ////////////////// Sign in with Google
    builder.addCase(signInGooglePopupAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signInGooglePopupAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (!payload) return;
      state.currentUser = payload;
    });
    builder.addCase(signInGooglePopupAsync.rejected, (state, { payload }) => {
      state.isLoading = false;
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
    builder.addCase(signInEmailPassAsync.rejected, (state, { payload }) => {
      if (!payload) return;
      state.isLoading = false;
      // state.error = payload;
    });

    /////////////// Check User Session
    builder.addCase(checkUserSession.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(checkUserSession.fulfilled, (state, { payload }) => {
      if (!payload) return;
      state.currentUser = payload;
      state.isLoading = false;
    });
    builder.addCase(checkUserSession.rejected, (state) => {
      state.isLoading = false;
    });

    //////////////// Sign Out
    builder.addCase(signOut.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(signOut.fulfilled, (state) => {
      state.isLoading = false;
      state.currentUser = null;
    });
    builder.addCase(signOut.rejected, (state) => {
      state.isLoading = false;
    });
    // TODO consider isLoaded...
    //////////////// Log transaction
    builder.addCase(logTransactionToFirebase.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(logTransactionToFirebase.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(logTransactionToFirebase.rejected, (state) => {
      state.isLoading = false;
    });
    //////////////// Change Email
    builder.addCase(changeEmail.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(changeEmail.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(changeEmail.rejected, (state) => {
      state.isLoading = false;
    });
    //////////////// Change Display Name
    builder.addCase(changeDisplayName.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(changeDisplayName.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(changeDisplayName.rejected, (state) => {
      state.isLoading = false;
    });
    //////////////// Change Password
    builder.addCase(changePassword.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(changePassword.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(changePassword.rejected, (state) => {
      state.isLoading = false;
    });
    //////////////// Delete Account
    builder.addCase(deleteUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteUser.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setUser } = userSlice.actions;
// export const selectCount = (state: RootState) => state.gallery.curSlideIndex

export default userSlice.reducer;
