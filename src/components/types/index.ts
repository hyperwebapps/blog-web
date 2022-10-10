export interface NavbarProps {
  window?: () => Window
}

export interface PostsPros {
  id: number
  textOrder: number
  imageOrder: number
}

export interface MenuProps {
  anchorEl?: React.MouseEvent<null | HTMLElement>
  setAnchorEl?: any
}

export interface PostContentProps {
  id: number
  img: string
  title: string
  postDate: string
  description: string
}

export interface MenuContentProps {
  link: string
  img: string
  title: string
}
