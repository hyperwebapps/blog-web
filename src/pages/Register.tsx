import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Register = () => {
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
      }}>
      <Paper
        elevation={2}
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
          type="email"
          sx={{ width: "100%", mt: "2.5rem" }}
          size="small"
          required
        />
        <TextField
          label="Username"
          type="text"
          sx={{ width: "100%", mt: "1rem" }}
          size="small"
          required
        />
        <TextField
          label="Password"
          type="password"
          sx={{ width: "100%", mt: "1rem", mb: "2rem" }}
          size="small"
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
