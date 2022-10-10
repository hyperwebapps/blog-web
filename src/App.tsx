import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

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
