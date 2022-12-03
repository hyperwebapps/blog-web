import { Box, CircularProgress, Container, Toolbar } from "@mui/material"
import {
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { Footer, Navbar } from "../components"
import { Content, Menu } from "../components/posts"
import {
  MenuContentProps,
  PostAuthorProps,
  PostContentProps,
} from "../components/types"
import app from "../config"

export const PostPage = () => {
  const { postId } = useParams()
  const db = getFirestore(app)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const [post, setPost] = useState<Partial<PostContentProps>>({})

  const [menuPost, setMenuPost] = useState<MenuContentProps[] | []>([])

  useEffect(() => {
    const getAuthorData = async (id: string): Promise<PostAuthorProps> => {
      const docRef = doc(db, "users", id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const userData = docSnap.data() as PostAuthorProps
        return userData
      } else {
        return {
          avatarUrl: "",
          username: "No Data",
        }
      }
    }
    const getPost = async () => {
      if (postId) {
        setIsLoading((prev) => !prev)
        const docRef = doc(db, "posts", postId)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          const postData = docSnap.data() as PostContentProps
          const userData = await getAuthorData(postData.author)
          setPost(() => ({
            ...postData,
            ...userData,
          }))
          setIsLoading((prev) => !prev)
        } else {
          toast.error("No post has been found")
          navigate("/")
        }
      } else {
        toast.error("Something has gone wrong")
      }
    }

    const getMenuPosts = async () => {
      const q = query(
        collection(db, "posts"),
        where(documentId(), "!=", postId),
        limit(3)
      )
      const querySnapshot = (await getDocs(q)).docs
      const mapped = querySnapshot.map((document) => ({
        ...document.data(),
        link: `/posts/${document.id}`,
      })) as MenuContentProps[]
      setMenuPost(() => mapped)
    }

    getPost()
    getMenuPosts()
  }, [db, postId, navigate])

  return (
    <>
      <Navbar />
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: isLoading ? "center" : "none",
          my: "4rem",
        }}>
        <Box
          sx={{
            px: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}>
          {isLoading ? (
            <Box component="div">
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Content {...post} />
              <Menu items={menuPost} />
            </>
          )}
        </Box>
      </Container>
      <Footer />
    </>
  )
}
