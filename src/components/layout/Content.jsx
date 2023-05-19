import React from 'react';
import tw from "tailwind-styled-components"

const Content = (props) => {
  const StyledContent = tw.div`
  w-11/12 md:w-9/12
    my-16
    mx-auto
    p-6
    /* bg-red-50*/
  `
  return (
    <StyledContent >
      {props.content}
    </StyledContent>
  )
}

export default Content