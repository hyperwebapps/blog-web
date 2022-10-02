import MenuIcon from "@mui/icons-material/Menu"
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material"
import { FC, useState } from "react"
import { Link } from "react-router-dom"
import { NavbarProps } from "./types"

export const Navbar: FC = (props: NavbarProps) => {
  const drawerWidth = 240
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  const navItems: string[] = [
    "art",
    "science",
    "technology",
    "cinema",
    "design",
    "food",
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Bulb Blog
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", textTransform: "capitalize" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#050a30", p: "1rem" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "space-between", sm: "none" },
          }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              flexGrow: { xs: 0, sm: 1 },
              display: { xs: "none", sm: "block" },
            }}>
            <img src="./logo512.png" alt="no logo" width={32} height={32} />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Link
                to={`/?cat=${item}`}
                key={index}
                style={{
                  color: "white",
                  textDecoration: "none",
                  marginRight: "1rem",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}>
                {item}
              </Link>
            ))}
          </Box>
          <Avatar
            sx={{ bgcolor: "orange", ml: "0.5rem" }}
            alt="Frank"
            src="/broken-image.jpg"
          />
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
