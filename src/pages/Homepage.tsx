import { Container, Toolbar } from "@mui/material"
import { FC } from "react"
import { Footer, Navbar, Post, PostsPros } from "../components"

export const Homepage: FC = () => {
  const posts: PostsPros[] = [
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
    <>
      <Navbar />
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexWrap: "wrap", my: "4rem" }}>
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </Container>
      <Footer />
    </>
  )
}
