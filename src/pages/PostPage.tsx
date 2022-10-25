import { Box, Container, Toolbar } from "@mui/material"
import { useState } from "react"
import { Footer, Navbar } from "../components"
import { Content, Menu } from "../components/posts"
import { PostContentProps } from "../components/types"

export const PostPage = () => {
  const [post] = useState<PostContentProps>({
    img: "https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=1200",
    title: "Jabbersphere",
    postDate: "10/10/2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Sit amet nisl suscipit adipiscing. Cras sed felis eget velit. Semper quis lectus nulla at volutpat diam ut venenatis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Tristique magna sit amet purus gravida. Senectus et netus et malesuada fames ac turpis egestas. Tellus at urna condimentum mattis pellentesque id nibh. Aliquet enim tortor at auctor urna nunc. Facilisi morbi tempus iaculis urna id volutpat. Amet nisl purus in mollis nunc sed id. Bibendum enim facilisis gravida neque convallis a cras. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Sit amet nisl suscipit adipiscing. Cras sed felis eget velit. Semper quis lectus nulla at volutpat diam ut venenatis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Tristique magna sit amet purus gravida. Senectus et netus et malesuada fames ac turpis egestas. Tellus at urna condimentum mattis pellentesque id nibh. Aliquet enim tortor at auctor urna nunc. Facilisi morbi tempus iaculis urna id volutpat. Amet nisl purus in mollis nunc sed id. Bibendum enim facilisis gravida neque convallis a cras. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Sit amet nisl suscipit adipiscing. Cras sed felis eget velit. Semper quis lectus nulla at volutpat diam ut venenatis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Tristique magna sit amet purus gravida. Senectus et netus et malesuada fames ac turpis egestas. Tellus at urna condimentum mattis pellentesque id nibh. Aliquet enim tortor at auctor urna nunc. Facilisi morbi tempus iaculis urna id volutpat. Amet nisl purus in mollis nunc sed id. Bibendum enim facilisis gravida neque convallis a cras. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Sit amet nisl suscipit adipiscing. Cras sed felis eget velit. Semper quis lectus nulla at volutpat diam ut venenatis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Tristique magna sit amet purus gravida. Senectus et netus et malesuada fames ac turpis egestas. Tellus at urna condimentum mattis pellentesque id nibh. Aliquet enim tortor at auctor urna nunc. Facilisi morbi tempus iaculis urna id volutpat. Amet nisl purus in mollis nunc sed id. Bibendum enim facilisis gravida neque convallis a cras.",
    category: "art",
    status: "draft",
    visibility: "public",
  })

  return (
    <>
      <Navbar />
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          my: "4rem",
        }}>
        <Box
          sx={{
            px: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Content {...post} />
          <Menu />
        </Box>
      </Container>
      <Footer />
    </>
  )
}
