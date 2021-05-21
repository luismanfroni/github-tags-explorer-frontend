import { useRouter } from "next/router";
import { useCheckAuth, getAuthorization } from "core/authorization";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { Loading } from "shared/components/Loading";

export default function Auth(): JSX.Element {
  const router = useRouter();
  const { isLoading, isAuth } = useCheckAuth();
  useEffect(() => {
    if (!isLoading) {
      if (isAuth) {
        const auth = getAuthorization();
        const cookies = new Cookies();
        cookies.set("session", auth, { sameSite: "strict" });
        router.push("/");
      } else {
        router.push("/login?invalidSession=1");
      }
    }
  }, [isLoading]);
  return <Loading />;
}
