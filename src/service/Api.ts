import axios from "axios";

export const baseUrl: string = "http://localhost:3000";

export default () => {
  return axios.create({
    baseURL: baseUrl,
  });
};
