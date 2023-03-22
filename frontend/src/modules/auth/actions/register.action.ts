import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIError } from "shared/interfaces";
import { IRegisterFormInitialValues } from "views/register/interfaces";
import { ITokens } from "modules/auth/interfaces";
import { AuthService } from "modules/auth/services";
import { transformError } from "shared/utils";

export const registerAction = createAsyncThunk<
  ITokens,
  IRegisterFormInitialValues,
  { rejectValue: APIError }
>(
  "auth/register",
  async (payload: IRegisterFormInitialValues, { rejectWithValue }) => {
    try {
      const response = await AuthService.register<ITokens>(payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(transformError(error));
    }
  }
);
