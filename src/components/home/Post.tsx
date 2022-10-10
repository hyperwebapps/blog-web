import { Box, Button, Typography } from "@mui/material"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { PostsPros } from "../types"

export const Post: FC<PostsPros> = ({
  id,
  imageOrder,
  textOrder,
}: PostsPros) => {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Typography>
        <Typography component="div" fontSize="1.2rem" my="1rem">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis!
        </Typography>
        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate(`/posts/${id}`)}>
          Read More
        </Button>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          order: { xs: 1, md: imageOrder },
          mb: { xs: "1.3rem", md: 0 },
        }}>
        <img
          src="https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=1200"
          alt="no post"
          width="100%"
        />
      </Box>
    </Box>
  )
}
