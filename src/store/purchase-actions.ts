import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from ".";
import purchaseService from "../service/purchase.service";
import { IPurchase } from "../types/purchase.types";
import purchaseSlice from "./purchase-slice";

export const purchaseActions = purchaseSlice.actions;

export const fetchPurchases = (
  access_token: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response: IPurchase[] = await purchaseService.getAllPurchases(
      access_token
    );
    dispatch(purchaseActions.getPurchases(response));
  };
};

export const fetchPurchase = (
  id: number,
  access_token: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response: IPurchase = await purchaseService.getPurchase(
      id,
      access_token
    );
    dispatch(purchaseActions.getPurchase(response));
  };
};
