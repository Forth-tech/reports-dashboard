import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, UserState } from "../types/user.types";

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    setErrorAuth(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default userSlice;
