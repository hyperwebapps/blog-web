import { Box } from "@mui/material"
import { Stack } from "@mui/system"
import { FC } from "react"
import { MenuContentProps } from "../types"
import { MenuItem } from "./MenuItem"

export const Menu: FC = () => {
  const menuItems: MenuContentProps[] = [
    {
      link: "/posts/2",
      img: "https://images.pexels.com/photos/5421530/pexels-photo-5421530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      link: "/posts/2",
      img: "https://images.pexels.com/photos/5421530/pexels-photo-5421530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      link: "/posts/2",
      img: "https://images.pexels.com/photos/5421530/pexels-photo-5421530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ]

  return (
    <Box sx={{ width: "30%", display: { xs: "none", md: "block" } }}>
      <Stack spacing={4}>
        {menuItems.map((item, index) => (
          <MenuItem {...item} key={index} />
        ))}
      </Stack>
    </Box>
  )
}
