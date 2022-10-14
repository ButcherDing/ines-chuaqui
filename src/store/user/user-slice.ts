import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean
  readonly error: Error | null;
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
}

export const getUserData = createAsyncThunk(
  'collection/getUserData',
  async (thunkAPI) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
      (data) => data.json()
    )
    console.log(res)
    return res
  })


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.currentUser = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(getUserData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.currentUser = payload;
    });
    builder.addCase(getUserData.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload)
    });
  },
})