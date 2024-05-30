import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Charity } from "types";

export async function getCharityList(
  client: AxiosInstance,
  config?: AxiosRequestConfig,
) {
  const response = await client.get<Charity[]>("/catalog/charity/", config);
  return response.data;
}

export async function getCharity(
  client: AxiosInstance,
  slug: string,
  config?: AxiosRequestConfig,
) {
  const response = await client.get<Charity>(
    `/catalog/charity/${slug}/`,
    config,
  );
  return response.data;
}
