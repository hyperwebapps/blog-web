import { PhotoCamera } from "@mui/icons-material"
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import { getAuth } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { ChangeEvent, useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import app from "../../../config"
import { PostContentProps } from "../../types"

export const CreationBox = () => {
  const auth = getAuth(app)
  const storage = getStorage(app)
  const db = getFirestore(app)
  const navigate = useNavigate()
  const categories: string[] = [
    "art",
    "science",
    "technology",
    "cinema",
    "design",
    "food",
  ]

  const [imageUrl, setImageUrl] = useState<string>("")

  const [post, setPost] = useState<PostContentProps>({
    img: "",
    title: "",
    postDate: new Date().toLocaleDateString("en-GB"),
    description: "",
    category: "",
    status: "draft",
    visibility: "private",
    author: "",
    avatarUrl: "",
    username: "",
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      await uploadBytes(
        ref(storage, `posts/${event.target.files[0].name}`),
        event.target.files[0]
      )
      const url = await getDownloadURL(
        ref(storage, `posts/${event.target.files[0].name}`)
      )
      setImageUrl(() => url)
    } else {
      toast.error("Image upload gone wrong")
    }
  }

  const createPost = async (isDraft: boolean) => {
    try {
      if (post.category === "") throw new Error("A category must be selected")
      if (imageUrl === "") throw new Error("A photo must be added")
      delete post.avatarUrl
      delete post.username
      await addDoc(
        collection(db, "posts"),
        isDraft
          ? {
              ...post,
              img: imageUrl,
              author: auth.currentUser?.uid,
            }
          : {
              ...post,
              img: imageUrl,
              status: "created",
              visibility: "public",
              author: auth.currentUser?.uid,
            }
      )
      toast.success(`Post has been created`)
      navigate(`/`)
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const controlProps = (item: string) => ({
    checked: post.category === item,
    onChange: handleChange,
    value: item,
    name: "category",
    inputProps: { "aria-label": item },
  })

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
        px: "1rem",
      }}>
      <Stack
        spacing={3}
        sx={{ width: { xs: "100%", md: "65%" }, mb: { xs: "6rem", md: 0 } }}
        component="div">
        <TextField
          label="Title"
          name="title"
          placeholder="Enter a title for the post"
          variant="outlined"
          size="small"
          sx={{
            width: "100%",
            "&.Mui-focused fieldset": {
              borderColor: "#233cf6",
            },
          }}
          onChange={handleChange}
        />
        <Box sx={{ width: "100%" }} component="div">
          <ReactQuill
            theme="snow"
            style={{ width: "100%", height: "35.2vh" }}
            onChange={(value) =>
              setPost((prev) => ({
                ...prev,
                description: value,
              }))
            }
          />
        </Box>
      </Stack>
      <Stack
        spacing={3}
        sx={{ width: { xs: "100%", md: "30%" } }}
        component="div">
        <Paper variant="outlined">
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={0.4}
            sx={{ p: "0.5rem" }}>
            <Typography component="span" fontWeight="500" variant="h6">
              Publish
            </Typography>
            <Box component="div">
              <Typography fontWeight="500" fontSize="0.9rem" component="span">
                Status:
              </Typography>
              <Typography component="span" fontSize="0.9rem" mx="0.2rem">
                Draft
              </Typography>
            </Box>
            <Box component="div">
              <Typography fontWeight="500" fontSize="0.9rem" component="span">
                Visibility:
              </Typography>
              <Typography component="span" fontSize="0.9rem" mx="0.2rem">
                Public
              </Typography>
            </Box>
            <Box component="div">
              <IconButton
                sx={{ color: "#233cf6" }}
                aria-label="upload picture"
                component="label">
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleFile}
                />
                <PhotoCamera />
              </IconButton>
            </Box>
            <Stack direction="row" justifyContent="space-between" width="100%">
              <Button
                type="button"
                sx={{ color: "#233cf6" }}
                onClick={() => createPost(true)}>
                Save as draft
              </Button>
              <Button
                type="button"
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "#233cf6",
                  "&:hover": {
                    backgroundColor: "#233cf6",
                    borderColor: "#233cf6",
                    boxShadow: "none",
                  },
                }}
                onClick={() => createPost(false)}>
                Publish
              </Button>
            </Stack>
          </Stack>
        </Paper>
        <Paper variant="outlined">
          <FormControl sx={{ p: "0.5rem" }}>
            <Typography mb="0.5rem">Category</Typography>
            <RadioGroup defaultValue="art">
              {categories.map((category, index) => (
                <FormControlLabel
                  key={index}
                  value={category}
                  control={
                    <Radio
                      {...controlProps(category)}
                      sx={{
                        mr: "-0.3rem",
                        color: "#757575",
                        "&.Mui-checked": {
                          color: "#233cf6",
                        },
                      }}
                      size="small"
                    />
                  }
                  label={category}
                  sx={{ textTransform: "capitalize", mt: "-0.4rem" }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Paper>
      </Stack>
    </Box>
  )
}
