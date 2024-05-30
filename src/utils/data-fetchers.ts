import { AxiosError } from "axios";
import { notFound } from "next/navigation";

export type FetcherAsyncRunnerOptions = {
  throw404?: boolean;
};

export async function fetcherAsyncRunner<T>(
  fn: () => Promise<T>,
  { throw404 = false }: FetcherAsyncRunnerOptions = {}
) {
  type Result = [T, undefined] | [undefined, Error];

  try {
    return [await fn(), undefined] as Result;
  } catch (err) {
    if (throw404 && err instanceof AxiosError && err.response?.status === 404) {
      return notFound();
    }

    return [undefined, err] as Result;
  }
}
