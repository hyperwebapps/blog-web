import { IUserState } from "./types"

export const initialState: IUserState = {
  currentUser: null,
  isAuthenticated: false,
}

const blogReducer = (state: any, action: any) => {
  const { type, payload } = action

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        currentUser: payload.currentUser,
        isAuthenticated: true,
      }
    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
      }

    default:
      throw new Error(`No case for type ${type} found in blogReducer.`)
  }
}

export default blogReducer
