export interface NavbarProps {
  window?: () => Window
}

export interface PostPros {
  id: number
  textOrder: number
  imageOrder: number
}

export interface MenuProps {
  anchorEl?: React.MouseEvent<null | HTMLElement>
  setAnchorEl?: any
}
