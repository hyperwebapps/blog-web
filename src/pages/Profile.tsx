import { Box, Container, Toolbar } from "@mui/material"
import { Footer, Navbar, UserForm } from "../components"

export const Profile = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "grid",
        gridTemplateRows: "auto auto 1fr",
        minHeight: "100vh",
      }}>
      <Navbar />
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          my: "5rem",
        }}>
        <UserForm />
      </Container>
      <Footer />
    </Box>
  )
}
