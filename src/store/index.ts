import { configureStore } from "@reduxjs/toolkit";
import purchaseSlice from "./purchase-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: { purchase: purchaseSlice.reducer, user: userSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
