import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIError } from "shared/interfaces";
import { ITokens } from "modules/auth/interfaces";
import { AuthService } from "modules/auth/services";
import { transformError } from "shared/utils";
import { ILoginFormInitialValues } from "views/login/interfaces";

export const loginAction = createAsyncThunk<
  ITokens,
  ILoginFormInitialValues,
  { rejectValue: APIError }
>(
  "auth/login",
  async (payload: ILoginFormInitialValues, { rejectWithValue }) => {
    try {
      const response = await AuthService.login<ITokens>(payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(transformError(error));
    }
  }
);
