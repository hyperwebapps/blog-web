import { Container, Toolbar } from "@mui/material"
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
} from "firebase/firestore"
import { FC, useEffect, useState } from "react"
import { Footer, MenuContentProps, Navbar, Post } from "../components"
import app from "../config"

export const Homepage: FC = () => {
  const db = getFirestore(app)
  const [posts, setPosts] = useState<MenuContentProps[] | []>([])

  useEffect(() => {
    const getHomepagePosts = async () => {
      const q = query(collection(db, "posts"), limit(3))
      const querySnapshot = (await getDocs(q)).docs
      const mapped = querySnapshot.map((document, index) => ({
        ...document.data(),
        link: `/posts/${document.id}`,
        imageOrder: index % 2 === 0 ? 2 : 1,
        textOrder: index % 2 === 0 ? 1 : 2,
      })) as MenuContentProps[]
      setPosts(() => mapped)
    }

    getHomepagePosts()
  }, [db])

  return (
    <>
      <Navbar />
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexWrap: "wrap", my: "4rem" }}>
        {posts.length >= 1 ? (
          <>
            {posts.map((post, index) => (
              <Post {...post} key={index} />
            ))}
          </>
        ) : (
          <></>
        )}
      </Container>
      <Footer />
    </>
  )
}
