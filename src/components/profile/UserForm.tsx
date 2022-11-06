import { Avatar, Box, Button, Stack, TextField } from "@mui/material"
import { amber } from "@mui/material/colors"
import { getAuth } from "firebase/auth"
import { ChangeEvent } from "react"
import { toast } from "react-toastify"
import app from "../../config"
import { getUserAvatar } from "../../utils"

export const UserForm = () => {
  const auth = getAuth(app)

  const editUser = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    toast.error("Profile update not enabled")
  }

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
            src={getUserAvatar(auth)}
          />
          <Button variant="contained" component="label" disableElevation>
            Upload
            <input
              hidden
              accept="image/png, image/jpeg, image/jpg"
              multiple
              type="file"
            />
          </Button>
        </Stack>
        <TextField
          label="Email"
          name="email"
          size="small"
          value={auth.currentUser?.email}
          placeholder="Enter a new email"
          sx={{
            width: { xs: "100%", md: "40%" },
            "&.Mui-focused fieldset": {
              borderColor: "#233cf6",
            },
          }}
        />
        <TextField
          label="Username"
          name="displayName"
          size="small"
          value={auth.currentUser?.displayName}
          placeholder="Enter a new username"
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
