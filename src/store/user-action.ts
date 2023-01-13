import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from ".";
import userService from "../service/user.service";
import { IUser } from "../types/user.types";
import userSlice from "./user-slice";

export const userActions = userSlice.actions;

export const login = (
  email: string,
  password: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response: IUser | null = await userService.login(email, password);
    if (response === null) {
      dispatch(userActions.setErrorAuth("Invalid credentials"));
    } else {
      dispatch(userActions.getUser(response));
    }
  };
};
