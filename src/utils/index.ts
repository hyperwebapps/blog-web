import { Auth } from "firebase/auth"

export const getUserAvatar = (auth: Auth): string => {
  return auth.currentUser?.photoURL === undefined ||
    auth.currentUser?.photoURL === null
    ? ""
    : auth.currentUser?.photoURL
}
