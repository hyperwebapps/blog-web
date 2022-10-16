import { Snackbar } from "@mui/material"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
import { FC, forwardRef, useState } from "react"
import { ToastProps } from "./types"

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const Toast: FC<ToastProps> = ({ message }: ToastProps) => {
  const [open, setOpen] = useState(false)

  // const handleClick = () => {
  //   setOpen(true)
  // }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
