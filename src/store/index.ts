import { configureStore } from "@reduxjs/toolkit";
import purchaseSlice from "./purchase-slice";

const store = configureStore({ reducer: { purchase: purchaseSlice.reducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
