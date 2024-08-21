import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserModel } from "../../models";

export type AuthStateType = {
  isAuthenticated: boolean;
  user: null | UserModel;
  token: string | null;
  rememberMe: boolean;
};

export const initialState: AuthStateType = {
  isAuthenticated: false,
  token: null,
  user: null,
  rememberMe: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setAuthentication: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action: PayloadAction<UserModel | null>) => {
      state.user = action.payload;
    },
    setRememberMe: (state, action: PayloadAction<boolean>) => {
      state.rememberMe = action.payload;
    },
    logout: (state) => {
      return {
        ...initialState,
        rememberMe: state.rememberMe,
      };
    },
    updateUser: (state, action: PayloadAction<Partial<UserModel>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { setToken, setUser, logout, updateUser, setAuthentication ,setRememberMe} =
  authSlice.actions;

export default authSlice.reducer;
