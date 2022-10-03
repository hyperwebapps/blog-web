import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Homepage, Login, PostAdd, PostPage, Profile, Register } from "./pages"

const router = createBrowserRouter([
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
    path: "/posts/:id",
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
])

export const App = () => {
  const theme = createTheme({})

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
