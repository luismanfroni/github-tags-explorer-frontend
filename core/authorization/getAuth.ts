import Cookies from "universal-cookie";

export function getAuthorization(): string | null {
  const cookies = new Cookies();
  let auth = cookies.get("session");
  if (typeof window !== "undefined" && !auth) {
    const urlParams = new URLSearchParams(window.location.search);
    auth = urlParams.get("session");
  }
  return auth;
}
