import { Box, Container, Toolbar } from "@mui/material"
import { useParams } from "react-router-dom"
import { Footer, Navbar } from "../components"
import { EditBox } from "../components/posts"

export const PostEdit = () => {
  const { postId } = useParams()

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
        <EditBox id={postId ? postId : ""} />
      </Container>
      <Footer />
    </Box>
  )
}
