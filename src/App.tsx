import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { BlogProvider } from "./context"
import { router } from "./routes"

export const App = () => {
  const theme = createTheme({})

  return (
    <BlogProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="light"
        />
      </ThemeProvider>
    </BlogProvider>
  )
}

export default App
