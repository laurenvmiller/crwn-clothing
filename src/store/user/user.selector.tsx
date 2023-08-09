import { createSelector } from "reselect";

import { RootState } from "../store";
import { UserSliceModel } from "./user.slice";

export const selectUserReducer = (state: RootState): UserSliceModel =>
  state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
