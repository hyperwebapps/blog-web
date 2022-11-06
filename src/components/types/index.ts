export interface NavbarProps {
  window?: () => Window
}

export interface PostsProps {
  textOrder?: number
  imageOrder?: number
}

export interface MenuProps {
  anchorEl?: React.MouseEvent<null | HTMLElement>
  setAnchorEl?: any
}

export interface PostAuthorProps {
  avatarUrl?: string
  username?: string
}

export interface PostContentProps extends PostAuthorProps {
  img: string
  title: string
  postDate: string
  description: string
  category: string
  status: string
  visibility: string
  author: string
}

export interface MenuContentProps extends PostsProps {
  link: string
  img: string
  title: string
  postDate: string
}

export interface ToastProps {
  message: string
}
