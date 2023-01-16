import Api from "./Api";

import { ApiGetPurchase, IPurchase } from "../types/purchase.types";

export default {
  async getAllPurchases(access_token: string) {
    const response = await Api().get("/bi/purchase", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const body: ApiGetPurchase = response.data;
    return body.data as IPurchase[];
  },
  async getPurchase(id: number, access_token: string) {
    const response = await Api().get(`/bi/purchase/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const body: ApiGetPurchase = response.data;
    return body.data as IPurchase;
  },
};
