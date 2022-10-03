import { Box, Button, Paper, TextField } from "@mui/material"

export const Login = () => {
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
        variant="outlined"
        sx={{
          width: "50%",
          maxWidth: "20rem",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          px: "2rem",
          py: "4rem",
          borderRadius: "1rem",
        }}>
        <TextField
          label="Email or username"
          type="text"
          sx={{ width: "100%" }}
          size="small"
          required
        />
        <TextField
          label="Password"
          type="password"
          sx={{ width: "100%", mt: "0.7rem", mb: "2rem" }}
          size="small"
          required
        />
        <Button
          type="submit"
          sx={{
            width: "80%",
            backgroundColor: "#233cf6",
            "&:hover": {
              backgroundColor: "#233cf6",
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
