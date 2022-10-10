import { Box, Container } from "@mui/material"
import { FC } from "react"

export const Footer: FC = () => {
  const getYear = () => {
    return new Date().getFullYear()
  }

  return (
    <Box
      component="div"
      sx={{
        color: "white",
        backgroundColor: "#050a30",
        py: "2rem",
      }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <img src="/logo512.png" alt="no logo" width={48} height={48} />
        <Box component="div">&copy; {getYear()} Made By vincecommerce</Box>
      </Container>
    </Box>
  )
}
