import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInEmailPass,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { EmailAuthCredential } from "firebase/auth";

type FormInput = {
  email: string;
  password: string;
};

interface SignUpFormInput extends FormInput {
  displayName: string;
}

export type UserData = {
  createdAt: Date;
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

export const getUserDataAsync = createAsyncThunk(
  "authentication/getUserDataAsync",
  async (thunkAPI) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (data) => data.json()
    );
    console.log(res);
    return res;
  }
);

export const signInEmailPassAsync = createAsyncThunk(
  "authentication/signInWithEmailAndPassword",
  async (signInFormInput: FormInput, thunkAPI) => {
    try {
      const { email, password } = signInFormInput;
      const res = await signInEmailPass(email, password);
      console.log(res);
    } catch (error) {
      console.log("user sign in failed", error);
    }
  }
);

export const signInGooglePopupAsync = createAsyncThunk(
  "authentication/signInWithGoogle",
  async (thunkAPI) => {
    const res = await signInWithGooglePopup();
    console.log(res);
    const userSnapshot = createUserDocumentFromAuth(res.user);
    console.log(userSnapshot);
  }
);

export const signUpWithEmailPassAsync = createAsyncThunk(
  "authentication/signUpWithEmailPass",
  async (signUpFormInput: SignUpFormInput, thunkAPI) => {
    const { email, password, displayName } = signUpFormInput;
    const res = await createAuthUserWithEmailAndPassword(
      email,
      password,
      displayName
    );
    console.log(res);
    if (!res) return;
    const userSnapshot = createUserDocumentFromAuth(res.user);
    console.log(userSnapshot);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserDataAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserDataAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.currentUser = payload;
    });
    builder.addCase(getUserDataAsync.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(signInGooglePopupAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signInGooglePopupAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      // state.currentUser = payload;
    });
    builder.addCase(signInGooglePopupAsync.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(signInEmailPassAsync.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signInEmailPassAsync.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(signInEmailPassAsync.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});
