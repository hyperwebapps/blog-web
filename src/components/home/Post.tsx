import { Box, Button, Typography } from "@mui/material"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { MenuContentProps } from "../types"

export const Post: FC<MenuContentProps> = ({
  link,
  postDate,
  img,
  title,
  imageOrder,
  textOrder,
}: MenuContentProps) => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        px: "1rem",
        mb: "6rem",
      }}>
      <Box
        sx={{
          width: { xs: "100%", md: "55%" },
          order: { xs: 2, md: textOrder },
        }}>
        <Typography component="div" variant="h3" fontWeight="bold">
          {title}
        </Typography>
        <Typography component="div" fontSize="1.2rem" my="1rem" display="flex">
          Published:
          <Typography fontWeight="bold" fontSize="inherit" ml="0.5rem">
            {postDate}
          </Typography>
        </Typography>
        <Button variant="outlined" size="large" onClick={() => navigate(link)}>
          Read More
        </Button>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          order: { xs: 1, md: imageOrder },
          mb: { xs: "1.3rem", md: 0 },
        }}>
        <img src={img} alt="no post" width="100%" />
      </Box>
    </Box>
  )
}
