import React from 'react';
import tw from "tailwind-styled-components"

const Content = (props) => {
  const StyledContent = tw.div`
    md:w-11/12 w-9/12
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