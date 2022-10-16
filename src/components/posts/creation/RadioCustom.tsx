import { Radio } from "@mui/material"

export const RadioCustom = () => {
  return (
    <Radio
      sx={{
        color: "#233cf6",
        "&.Mui-checked": {
          color: "#233cf6",
        },
      }}
    />
  )
}
