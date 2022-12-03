import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useContext, useReducer } from "react"
import app from "../config"
import blogReducer, { initialState } from "./blogReducer"
import { ILogin } from "./types"

export const BlogContext = createContext(initialState)

export const BlogProvider = ({ children }: any) => {
  const auth = getAuth(app)
  const [state, dispatch] = useReducer(blogReducer, initialState)

  const login = async (credentials: ILogin) => {
    await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
    dispatch({
      type: "LOGIN",
      payload: {
        currentUser: auth.currentUser,
      },
    })
  }

  const logout = () => {
    auth.signOut()
    dispatch({
      type: "LOGOUT",
    })
  }

  const value = {
    currentUser: state.currentUser,
    isAuthenticated: state.isAuthenticated,
    logout,
    login,
  }

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
}

const useBlog = () => {
  const context = useContext(BlogContext)

  if (context === undefined)
    throw new Error("useShop must be used within ShopContext")

  return context
}

export default useBlog
