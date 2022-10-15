import { Avatar, Box, Button, Stack, TextField } from "@mui/material"
import { amber } from "@mui/material/colors"

export const UserForm = () => {
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
            src="https://i.seadn.io/gae/ZRh9NK6LE7t8RKo4D4DqyvP-mAyUO6GWw45N2mDUR1W-UmElMwANOowVNdtwDzAr8f7x7_SYWh9CWOD_D4Zdc7IDgl5puZt6Zc8M?auto=format&w=1000"
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
          defaultValue="hello@gmail.com"
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
          defaultValue="theWriter"
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
