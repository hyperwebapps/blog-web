import { Box } from "@mui/material"
import { Stack } from "@mui/system"
import { FC } from "react"
import { MenuContentProps } from "../types"
import { MenuItem } from "./MenuItem"

export const Menu: FC<{ items: MenuContentProps[] | [] }> = ({ items }) => {
  return (
    <Box sx={{ width: "30%", display: { xs: "none", md: "block" } }}>
      <Stack spacing={4}>
        {items.length >= 1 ? (
          <>
            {items.map((item, index) => (
              <MenuItem {...item} key={index} />
            ))}
          </>
        ) : (
          <></>
        )}
      </Stack>
    </Box>
  )
}
