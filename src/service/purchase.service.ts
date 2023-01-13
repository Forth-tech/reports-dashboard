import Api from "./Api";

import { ApiGetPurchase, IPurchase } from "../types/purchase.types";

export default {
  async getAllPurchases() {
    const response = await Api().get("/bi/purchase");
    const body: ApiGetPurchase = response.data;
    return body.data as IPurchase[];
  },
  async getPurchase(id: number) {
    const response = await Api().get(`/bi/purchase/${id}`);
    const body: ApiGetPurchase = response.data;
    return body.data as IPurchase;
  },
};
