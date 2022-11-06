import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Box, Typography } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import * as DOMPurify from "dompurify"
import { getAuth } from "firebase/auth"
import { deleteDoc, doc, getFirestore } from "firebase/firestore"
import moment from "moment"
import { FC } from "react"
import { useNavigate, useParams } from "react-router-dom"
import app from "../../config"
import { PostContentProps } from "../types"

export const Content: FC<PostContentProps> = (props: PostContentProps) => {
  const { postId } = useParams()
  const auth = getAuth(app)
  const db = getFirestore(app)
  const navigate = useNavigate()
  const user = auth.currentUser

  const cleanHtml = DOMPurify.sanitize(props.description, {
    USE_PROFILES: { html: true },
  })

  const splitDate = (date: string): string[] => {
    return date.split("/")
  }

  const deletePost = async () => {
    if (postId) {
      await deleteDoc(doc(db, "posts", postId))
      navigate("/")
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: { xs: "100%", md: "65%" },
      }}>
      <img
        src={props.img}
        alt="no post img"
        width="100%"
        style={{ maxHeight: 450 }}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          my: "2rem",
        }}>
        <Avatar
          alt="user profile"
          src={props.avatarUrl}
          sx={{ width: 52, height: 52 }}
        />
        <Box mx="0.5rem">
          <Box component="span">{props.username}</Box>
          <Box component="div" fontWeight="500">
            {moment([
              splitDate(props.postDate)[2],
              splitDate(props.postDate)[1],
              splitDate(props.postDate)[0],
            ]).fromNow()}
          </Box>
        </Box>
        {props.username === user?.displayName && (
          <Box component="span">
            <Box
              component="span"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`/posts/edit/${postId}`)}>
              <EditIcon sx={{ color: "orange", mx: "0.4rem" }} />
            </Box>
            <Box
              component="span"
              sx={{ cursor: "pointer" }}
              onClick={deletePost}>
              <DeleteIcon sx={{ color: "red" }} />
            </Box>
          </Box>
        )}
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography variant="h4" fontWeight="bold">
          {props.title}
        </Typography>
      </Box>
      <Typography
        sx={{ mt: "0.4rem" }}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </Box>
  )
}
