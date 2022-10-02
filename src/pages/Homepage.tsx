import { Box, Container, Toolbar } from "@mui/material"
import { FC } from "react"
import { Footer, Navbar, Post, PostPros } from "../components"

export const Homepage: FC = () => {
  const posts: PostPros[] = [
    {
      id: 1,
      textOrder: 1,
      imageOrder: 2,
    },
    {
      id: 2,
      textOrder: 2,
      imageOrder: 1,
    },
    {
      id: 3,
      textOrder: 1,
      imageOrder: 2,
    },
  ]
  return (
    <Box>
      <Navbar />
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexWrap: "wrap", my: "4rem" }}>
        {posts.map((post) => (
          <Post {...post} />
        ))}
      </Container>
      <Footer />
    </Box>
  )
}
