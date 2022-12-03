import { Avatar, Box, Button, Stack, TextField } from "@mui/material"
import { amber } from "@mui/material/colors"
import {
  getAuth,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { ChangeEvent, useEffect, useState } from "react"
import { toast } from "react-toastify"
import app from "../../config"
import { getUserAvatar } from "../../utils"
import { EditUserProps } from "../types"

export const UserForm = () => {
  const auth = getAuth(app)
  const storage = getStorage(app)

  const [imageUrl, setImageUrl] = useState<string>("")

  const [editedUser, setEditedUser] = useState<Partial<EditUserProps>>({})

  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      await uploadBytes(
        ref(storage, `posts/${event.target.files[0].name}`),
        event.target.files[0]
      )
      const url = await getDownloadURL(
        ref(storage, `posts/${event.target.files[0].name}`)
      )
      setEditedUser((prev) => ({
        ...prev,
        photoUrl: url,
      }))
    } else {
      toast.error("Image upload gone wrong")
    }
  }

  const editUser = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    try {
      if (!auth.currentUser) throw new Error("You're not authenticated")
      if (editedUser.password !== editedUser.confirmPassword)
        throw new Error("Passwords are not matching")
      await updateProfile(auth.currentUser, {
        displayName: editedUser.username,
        photoURL: imageUrl,
      })
      if (editedUser.email)
        await updateEmail(auth.currentUser, editedUser.email)
      if (editedUser.password)
        await updatePassword(auth.currentUser, editedUser.password)
      toast.success("Profile has been updated")
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  useEffect(() => {
    setImageUrl(() => getUserAvatar(auth))
    setEditedUser(() => ({
      username: auth.currentUser?.displayName,
      email: auth.currentUser?.email,
    }))
  }, [auth])

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
        px: "1rem",
      }}
      onSubmit={editUser}>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems={{ xs: "center", md: "start" }}
        spacing={4}
        width="100%">
        <Stack direction="row" alignItems="center" spacing={3} width="100%">
          <Avatar
            sx={{
              bgcolor: "#233cf6",
              ml: "0.5rem",
              width: 64,
              height: 64,
            }}
            alt="Frank"
            src={imageUrl}
          />
          <Button variant="contained" component="label" disableElevation>
            Upload
            <input
              hidden
              accept="image/png, image/jpeg, image/jpg, image/avif"
              multiple
              type="file"
              onChange={handleFile}
            />
          </Button>
        </Stack>
        <TextField
          label="Email"
          name="email"
          size="small"
          value={editedUser.email}
          onChange={handleChange}
          placeholder="Enter a new email"
          type="email"
          sx={{
            width: { xs: "100%", md: "40%" },
            "&.Mui-focused fieldset": {
              borderColor: "#233cf6",
            },
          }}
        />
        <TextField
          label="Username"
          name="username"
          size="small"
          value={editedUser.username}
          onChange={handleChange}
          placeholder="Enter a new username"
          type="text"
          sx={{
            width: { xs: "100%", md: "40%" },
            "&.Mui-focused fieldset": {
              borderColor: "#233cf6",
            },
          }}
        />
        <TextField
          label="Password"
          name="password"
          size="small"
          placeholder="Enter a new password"
          onChange={handleChange}
          type="password"
          sx={{
            width: { xs: "100%", md: "40%" },
            "&.Mui-focused fieldset": {
              borderColor: "#233cf6",
            },
          }}
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          size="small"
          placeholder="Confirm the new password"
          onChange={handleChange}
          type="password"
          sx={{
            width: { xs: "100%", md: "40%" },
            "&.Mui-focused fieldset": {
              borderColor: "#233cf6",
            },
          }}
        />
        <Button
          variant="contained"
          disableElevation
          type="submit"
          sx={{
            bgcolor: amber[800],
            "&:hover": {
              backgroundColor: amber[800],
              borderColor: amber[800],
              boxShadow: "none",
            },
            width: { xs: "30%", md: "10%" },
          }}>
          Save
        </Button>
      </Stack>
    </Box>
  )
}
