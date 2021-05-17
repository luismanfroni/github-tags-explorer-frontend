import { getAuthorization } from "./getAuth";
import { useFetch, fetcher } from "../fetcher";
import { SWRResponse } from "swr";

export async function authRequest<Data = any>(url: string, options?: RequestInit): Promise<Data> {
  const auth = getAuthorization();
  const response = await fetcher(
    url,
    {
      ...options,
      headers: {
        Authorization: "bearer " + auth
      }
    },
    false
  );
  return response;
}

export function useAuthSWR<Data = any, Error = any>(
  url: string,
  options?: RequestInit,
  parseData = true
): SWRResponse<Data, Error> & { isLoading: boolean } {
  const auth = getAuthorization();
  const response = useFetch(
    url,
    {
      ...options,
      headers: {
        Authorization: "bearer " + auth
      }
    },
    parseData
  );
  return {
    ...response,
    isLoading: !response.error && !response.data
  };
}
