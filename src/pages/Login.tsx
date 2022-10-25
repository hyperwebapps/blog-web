import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import app from "../config"
import { ILogin } from "../context/types"

export const Login = () => {
  const auth = getAuth(app)
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState<ILogin>({
    email: "",
    password: "",
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleLogin = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
      navigate("/")
    } catch (error: any) {
      toast.error(error.message)
    }
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
      onSubmit={handleLogin}>
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
          Login
        </Typography>
        <Link
          to="/register"
          style={{
            textDecoration: "none",
            color: "#233cf6",
            paddingTop: "0.2rem",
          }}>
          Create account
        </Link>
        <TextField
          label="Email"
          name="email"
          type="text"
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
          Sign In
        </Button>
      </Paper>
    </Box>
  )
}
