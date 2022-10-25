import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { createContext, FC, useContext, useState } from "react"
import { AuthProviderProps } from "./types"

const AuthContext = createContext({})

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const auth = getAuth()

  const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const value = {
    currentUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
