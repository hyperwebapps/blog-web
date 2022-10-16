import { Stack, Typography } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"
import { MenuContentProps } from "../types"

export const MenuItem: FC<MenuContentProps> = (props: MenuContentProps) => {
  return (
    <Link
      to={props.link}
      style={{
        color: "black",
        textDecoration: "none",
      }}>
      <Stack spacing={2}>
        <img src={props.img} alt="menu item" width="100%" />
        <Typography variant="h5" fontWeight="500">
          {props.title}
        </Typography>
      </Stack>
    </Link>
  )
}
