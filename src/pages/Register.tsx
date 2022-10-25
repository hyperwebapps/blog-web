import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import { getDownloadURL, getStorage, ref } from "firebase/storage"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import app from "../config"
import { IRegister } from "../context/types"

export const Register = () => {
  const auth = getAuth(app)
  const storage = getStorage(app)
  const db = getFirestore(app)
  const navigate = useNavigate()

  const [user, setUser] = useState<IRegister>({
    email: "",
    username: "",
    password: "",
  })

  const handleRegistration = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password)
      const url = await getDownloadURL(ref(storage, "avatar.png"))
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: user.username,
          photoURL: url,
        })
        await setDoc(doc(db, "users", auth.currentUser.uid), {
          avatarUrl: url,
          username: user.username,
        })
      } else {
        throw new Error("Something is gone wrong")
      }
      navigate("/")
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        mx: "auto",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      onSubmit={handleRegistration}>
      <Paper
        variant="outlined"
        sx={{
          width: "100%",
          maxWidth: "23rem",
          display: "flex",
          flexWrap: "wrap",
          px: "2rem",
          py: "2rem",
          borderRadius: "1rem",
        }}>
        <Typography variant="h5" sx={{ flexGrow: 10 }}>
          Register
        </Typography>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#233cf6",
            paddingTop: "0.3rem",
          }}>
          Have an account?
        </Link>
        <TextField
          label="Email"
          name="email"
          type="email"
          sx={{
            width: "100%",
            mt: "2.5rem",
            "&.Mui-focused fieldset": {
              borderColor: "#233cf6",
            },
          }}
          size="small"
          onChange={handleChange}
          required
        />
        <TextField
          label="Username"
          name="username"
          type="text"
          sx={{
            width: "100%",
            mt: "1rem",
            "&.Mui-focused fieldset": {
              borderColor: "#233cf6",
            },
          }}
          size="small"
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          sx={{
            width: "100%",
            mt: "1rem",
            mb: "2rem",
            "&.Mui-focused fieldset": {
              borderColor: "#233cf6",
            },
          }}
          size="small"
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          sx={{
            width: "100%",
            backgroundColor: "#050a30",
            "&:hover": {
              backgroundColor: "#050a30",
            },
          }}
          variant="contained"
          disableElevation>
          Sign Up
        </Button>
      </Paper>
    </Box>
  )
}
