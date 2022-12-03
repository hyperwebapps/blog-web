import { User } from "firebase/auth"

export interface AuthProviderProps {
  children: JSX.Element
}

export interface IUser {
  photoURL: string
  email: string
  displayName: string
  password: string
  confirmPassword?: string
}

export interface ILogin {
  email: string
  password: string
}

export interface IRegister extends ILogin {
  username: string
}

export interface IUserState {
  currentUser: User | null
  isAuthenticated: boolean
  login?(cred: ILogin): Promise<void>
  logout?(): void
}
