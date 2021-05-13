const BASE_API_URL: string = process.env.NEXT_PUBLIC_BASE_API_URL || "";
import useSWR, { SWRResponse } from "swr";

export async function fetcher<Data = any>(
  url: string,
  options?: RequestInit,
  parseData = true
): Promise<Data> {
  const response = await window.fetch(BASE_API_URL + url, options);
  if (parseData) {
    const data = await response.json();
    return data;
  } else {
    return response;
  }
}

export function useFetch<Data = any, Error = any>(
  url: string,
  options?: RequestInit,
  parseData = true
): SWRResponse<Data, Error> {
  return useSWR<Data, Error>(url, async (url) => await fetcher<Data>(url, options, parseData));
}
