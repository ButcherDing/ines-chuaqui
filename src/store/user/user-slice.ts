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
  getCurrentUser,
  signInEmailPass,
  signInWithGooglePopup,
  signOutUser,
} from "../../utils/firebase/firebase.utils";
import { RootState } from "../store";

//////// TYPES

type FormInput = {
  email: string;
  password: string;
};

interface SignUpFormInput extends FormInput {
  displayName: string;
}

export type UserData = {
  createdAt: Date; // |  {seconds: number, nanoseconds: number};
  displayName: string;
  email: string;
};

type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

///// SELECTORS

export const selectUserReducer = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);

///////// THUNKS

export const checkUserSession = createAsyncThunk(
  "authentication/checkUserSession",
  async (_, thunkAPI) => {
    try {
      const res = await getCurrentUser();
      console.log(res);
      if (!res || res === null) return;
      const userData = await createUserDocumentFromAuth(res);
      if (!userData) return;
      return userData.data();
    } catch (error) {
      console.log("error checking user", error);
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
    }
  }
);

export const signInGooglePopupAsync = createAsyncThunk(
  "authentication/signInWithGoogle",
  async (thunkAPI) => {
    const res = await signInWithGooglePopup();

    const userSnapshot = await createUserDocumentFromAuth(res.user);

    if (!userSnapshot) return;
    return userSnapshot.data();
  }
);

export const signUpWithEmailPassAsync = createAsyncThunk(
  "authentication/signUpWithEmailPass",
  async (signUpFormInput: SignUpFormInput, thunkAPI) => {
    const { email, password, displayName } = signUpFormInput;
    const res = await createAuthUserWithEmailAndPassword(email, password);

    if (!res) return;
    const userSnapshot = await createUserDocumentFromAuth(res.user, {
      displayName,
    });
    if (!userSnapshot) return;
    // should this check be in our utils?
    return userSnapshot.data();
  }
);

export const signOut = createAsyncThunk(
  "authentication/signOut",
  async (_, thunkAPI) => {
    await signOutUser();
  }
);

//////////////////////
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.currentUser = action.payload;
    },
  },
  /// TODO: this definitely smells like the wrong way to do this. Even though the doc seems to say like this. Repetitive. useQuery?
  extraReducers(builder) {
    ////////////////// Sign in with Google
    builder.addCase(signInGooglePopupAsync.pending, (state, action) => {
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
    builder.addCase(signInEmailPassAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signInEmailPassAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (!payload) return;
      state.currentUser = payload;
    });
    builder.addCase(signInEmailPassAsync.rejected, (state, { payload }) => {
      state.isLoading = false;
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
  },
});

export const { setUser } = userSlice.actions;
// export const selectCount = (state: RootState) => state.gallery.curSlideIndex

export default userSlice.reducer;
