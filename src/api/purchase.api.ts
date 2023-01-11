import axios, { AxiosResponse } from "axios";
import { baseUrl } from "./api";

export const getPurchases = async (): Promise<
  AxiosResponse<ApiGetPurchaseType>
> => {
  try {
    const purchases: AxiosResponse<ApiGetPurchaseType> = await axios.get(
      `${baseUrl}/bi/purchase`
    );
    return purchases;
  } catch (error: any) {
    throw new Error(error);
  }
};
