import Api from "./Api";

import { IUser, ApiGetUser } from "../types/user.types";

export default {
  async login(email: string, password: string): Promise<IUser | null> {
    const response = await Api().post("/auth/login", {
      email,
      password,
    });
    const body = response.data;
    const responseCode: number = response.status;
    if (responseCode === 401) {
      return null;
    }
    return body.data as IUser;
  },
};
