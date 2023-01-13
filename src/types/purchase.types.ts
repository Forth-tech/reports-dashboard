import { Action } from "redux";

export interface IPurchase {
  id: number;
  nf: string;
  internalCode: string;
  date: string;
  type: string;
  id_seller: number;
  id_store: number;
}

export interface PurchaseState {
  purchases: IPurchase[];
  activePurchase: IPurchase | null;
}

export interface LoadPurchasesRequest extends Action {
  type: "LOAD_PURCHASES_REQUEST";
}

export interface LoadPurchasesSuccess extends Action {
  type: "LOAD_PURCHASES_SUCCESS";
  payload: IPurchase[];
}

export type ApiGetPurchase = {
  message: string;
  success: boolean;
  data: IPurchase | IPurchase[];
};

export type PurchaseAction = LoadPurchasesRequest | LoadPurchasesSuccess;
