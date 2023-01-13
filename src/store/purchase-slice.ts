import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPurchase, PurchaseState } from "../types/purchase.types";

export const RETRIEVE_PURCHASES = "RETRIEVE_PURCHASES";
export const ADD_PURCHASE = "ADD_PURCHASE";

const initialState: PurchaseState = {
  purchases: [],
  activePurchase: null,
};

const purchaseSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: {
    getPurchases(state, action: PayloadAction<IPurchase[]>) {
      state.purchases = action.payload;
    },
    getPurchase(state, action: PayloadAction<IPurchase>) {
      state.activePurchase = action.payload;
    },
  },
});

export default purchaseSlice;
