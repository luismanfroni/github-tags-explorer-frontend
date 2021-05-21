import { useRouter } from "next/router";
import { useCheckAuth, revokeAuth } from "core/authorization";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { Loading } from "shared/components/Loading";

export default function Logout(): JSX.Element {
  const router = useRouter();
  const { isLoading, isAuth } = useCheckAuth();
  useEffect(() => {
    if (!isLoading) {
      if (isAuth) {
        revokeAuth().then(() => {
          const cookies = new Cookies();
          cookies.remove("session");
          // cookies.set("session", auth, { sameSite: "strict" });
          router.push("/");
        });
      }
      router.push("/login");
    }
  });
  return <Loading />;
}
