import { IPurchase } from "./purchase.types";

export interface LoadingState {
  loading: boolean;
}

export interface ApplicationState {
  loading: LoadingState;
  purchases: IPurchase[];
}
