import { IAuthInitialState } from "modules/auth/auth.slice";
import { RootState } from "redux/store";
import { createSelector } from "reselect";

export const authSelector = createSelector<
  [(state: RootState) => IAuthInitialState],
  IAuthInitialState
>(
  (state) => state.auth,
  (values) => values
);
