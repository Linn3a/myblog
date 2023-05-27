import React from 'react';
import tw from "tailwind-styled-components"

const Footer = tw.div`
  w-11/12
  h-10
  mx-auto
  text-sm
  text-gray-500
  flex justify-center items-center

`

const Content = (props) => {
  const StyledContent = tw.div`
  w-11/12 md:w-9/12
    my-16
    mx-auto
    p-6
  `
  return (
    <>
    <StyledContent >
      {props.content}
    </StyledContent>
    <Footer>Copyright © 2023 Linn3a</Footer>
    </>
  )
}

export default Content