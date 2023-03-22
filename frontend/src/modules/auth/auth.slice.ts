import { createSlice } from "@reduxjs/toolkit";
import { APIError } from "shared/interfaces";
import { ITokens, User } from "modules/auth/interfaces";
import { registerAction } from "modules/auth/actions";
import jwt_decode from "jwt-decode";

export interface IAuthInitialState {
  loading: boolean;
  error: APIError | undefined;
  user: User | undefined;
}

const initialState: IAuthInitialState = {
  loading: false,
  error: undefined,
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authResetError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: {
    [registerAction.pending.type]: (state) => {
      state.loading = true;
    },
    [registerAction.fulfilled.type]: (
      state,
      { payload }: { payload: ITokens }
    ) => {
      const decoded: any = jwt_decode(payload.access_token, { header: false });
      const { iat, exp, ...user } = decoded;
      localStorage.setItem("X-Auth-Token-Blog", payload.access_token);
      localStorage.setItem("user", user);
      state.loading = false;
      state.error = undefined;
      state.user = user;
    },
    [registerAction.rejected.type]: (
      state,
      { payload }: { payload: APIError }
    ) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const authSliceReducer = authSlice.reducer;

export const { authResetError } = authSlice.actions;
