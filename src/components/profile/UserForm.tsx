import { Avatar, Box, Button, Stack, TextField } from "@mui/material"
import { amber } from "@mui/material/colors"
import { getAuth } from "firebase/auth"
import app from "../../config"
import { getUserAvatar } from "../../utils"

export const UserForm = () => {
  const auth = getAuth(app)

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
        px: "1rem",
      }}>
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
          component="label"
          disableElevation
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
