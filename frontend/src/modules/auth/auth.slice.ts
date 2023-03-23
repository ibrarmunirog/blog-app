import { createSlice } from "@reduxjs/toolkit";
import { APIError } from "shared/interfaces";
import { ITokens, User } from "modules/auth/interfaces";
import { loginAction, registerAction } from "modules/auth/actions";
import jwt_decode from "jwt-decode";

export interface IAuthInitialState {
  loading: boolean;
  error: APIError | undefined;
  user: User | undefined;
  isAuthenticated: boolean;
}

const initialState: IAuthInitialState = {
  loading: false,
  error: undefined,
  user: undefined,
  isAuthenticated: false,
};

const decodeJwt = (token: string) => {
  const decoded: any = jwt_decode(token, { header: false });
  const { iat, exp, ...user } = decoded;
  return user as User;
};

const saveUserAuth = (token: string, user: User) => {
  localStorage.setItem(process.env.REACT_APP_TOKEN_FIELD, token);
  localStorage.setItem(process.env.REACT_APP_USER_FIELD, JSON.stringify(user));
};

const processErrorReducer = (
  state: IAuthInitialState,
  { payload }: { payload: APIError }
) => {
  state.loading = false;
  state.error = payload;
};

const processLoadingReducer = (state: IAuthInitialState) => {
  state.loading = true;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authResetError: (state) => {
      state.error = undefined;
    },
    logoutUser: (state) => {
      localStorage.removeItem(process.env.REACT_APP_USER_FIELD);
      localStorage.removeItem(process.env.REACT_APP_TOKEN_FIELD);
      state.user = undefined;
      state.isAuthenticated = false;
    },
  },
  extraReducers: {
    [registerAction.pending.type]: processLoadingReducer,
    [registerAction.fulfilled.type]: (
      state,
      { payload }: { payload: ITokens }
    ) => {
      const user = decodeJwt(payload.access_token);
      saveUserAuth(payload.access_token, user);
      state.loading = false;
      state.error = undefined;
      state.user = user;
      state.isAuthenticated = true;
    },
    [registerAction.rejected.type]: processErrorReducer,
    [loginAction.pending.type]: processLoadingReducer,
    [loginAction.fulfilled.type]: (
      state,
      { payload }: { payload: ITokens }
    ) => {
      const user = decodeJwt(payload.access_token);
      saveUserAuth(payload.access_token, user);
      state.loading = false;
      state.isAuthenticated = true;
      state.user = user;
    },
  },
});

export const authSliceReducer = authSlice.reducer;

export const { authResetError, logoutUser } = authSlice.actions;
