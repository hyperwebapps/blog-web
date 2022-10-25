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
