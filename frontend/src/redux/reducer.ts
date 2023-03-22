import { combineReducers } from "@reduxjs/toolkit";
import { authSliceReducer } from "modules/auth/auth.slice";

export const reducer = combineReducers({
  auth: authSliceReducer,
});
