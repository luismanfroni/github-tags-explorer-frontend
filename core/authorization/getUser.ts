import jwtDecode from "jwt-decode";
import { getAuthorization } from "./getAuth";
type UserObject = {
  name: string;
  pictureUrl: string;
  userName: string;
};
export const getUser = () => {
  const auth = getAuthorization();
  if (auth) {
    const decoded: any = jwtDecode(auth);
    if (decoded && decoded.user) {
      const user: UserObject = decoded.user as UserObject;
      return user;
    }
  }
  return null;
};
