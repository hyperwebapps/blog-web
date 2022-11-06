import { createBrowserRouter } from "react-router-dom"
import {
  Homepage,
  Login,
  PostAdd,
  PostEdit,
  PostPage,
  Profile,
  Register,
} from "./pages"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/posts/:postId",
    element: <PostPage />,
  },
  {
    path: "/posts/add",
    element: <PostAdd />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/posts/edit/:postId",
    element: <PostEdit />,
  },
])
