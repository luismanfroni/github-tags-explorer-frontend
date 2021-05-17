import { useAuthSWR } from "./authorizedFetch";
type CheckAuth = {
  isAuth: boolean;
  isLoading: boolean;
};
export function useCheckAuth(): CheckAuth {
  const auth = useAuthSWR("/api/auth/check", {}, false);
  return {
    isAuth: auth.data?.ok,
    isLoading: auth.isLoading
  };
}
