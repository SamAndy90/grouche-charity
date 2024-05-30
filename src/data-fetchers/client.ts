import axios from "axios";
import Qs from "qs";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL ?? "",
  timeout: 20 * 1000,
  paramsSerializer: function (params) {
    return Qs.stringify(params, { arrayFormat: "repeat" });
  },
});
