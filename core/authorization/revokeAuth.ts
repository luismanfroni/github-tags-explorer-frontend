import { getAuthorization, authRequest } from "./index";

export async function revokeAuth(): Promise<void> {
  const auth = getAuthorization();
  if (auth) {
    await authRequest("/api/auth", {
      method: "DELETE"
    });
  }
}
