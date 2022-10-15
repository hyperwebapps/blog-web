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
import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

export const CreationBox = () => {
  const categories: string[] = [
    "art",
    "science",
    "technology",
    "cinema",
    "design",
    "food",
  ]
  const [selectedValue, setSelectedValue] = useState("art")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    inputProps: { "aria-label": item },
  })

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
      component="div">
      <Stack
        spacing={3}
        sx={{ width: { xs: "100%", md: "65%" }, mb: { xs: "6rem", md: 0 } }}
        component="div">
        <TextField
          label="Title"
          placeholder="Enter a title for the post"
          variant="outlined"
          size="small"
          sx={{ width: "100%" }}
        />
        <Box sx={{ width: "100%" }} component="div">
          <ReactQuill
            theme="snow"
            style={{ width: "100%", height: "35.2vh" }}
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
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
            </Box>
            <Stack direction="row" justifyContent="space-between" width="100%">
              <Button sx={{ color: "#233cf6" }}>Save as draft</Button>
              <Button
                variant="contained"
                disableElevation
                sx={{ bgcolor: "#233cf6" }}>
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
