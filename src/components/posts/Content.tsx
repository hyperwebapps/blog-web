import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Box, Typography } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import * as DOMPurify from "dompurify"
import moment from "moment"
import { FC, useState } from "react"
import { PostContentProps } from "../types"

export const Content: FC<PostContentProps> = (props: PostContentProps) => {
  const [isAuth] = useState(true)

  const cleanHtml = DOMPurify.sanitize(props.description, {
    USE_PROFILES: { html: true },
  })

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: { xs: "100%", md: "65%" },
      }}>
      <img
        src={props.img}
        alt="no post img"
        width="100%"
        style={{ maxHeight: 450 }}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          my: "2rem",
        }}>
        <Avatar
          alt="user profile"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: 52, height: 52 }}
        />
        <Box mx="0.5rem">
          <Box component="span">iliveintheworld</Box>
          <Box component="div" fontWeight="500">
            {moment(props.postDate, "mm/dd/yyyy").fromNow()}
          </Box>
        </Box>
        {isAuth && (
          <Box component="span">
            <Box component="span" onClick={() => console.log("Edited Post")}>
              <EditIcon sx={{ color: "orange", mx: "0.4rem" }} />
            </Box>
            <Box component="span" onClick={() => console.log("Deleted Post")}>
              <DeleteIcon sx={{ color: "red" }} />
            </Box>
          </Box>
        )}
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography variant="h4" fontWeight="bold">
          {props.title}
        </Typography>
      </Box>
      <Typography sx={{ mt: "0.4rem" }}>{cleanHtml}</Typography>
    </Box>
  )
}
