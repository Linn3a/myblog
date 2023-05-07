import React from 'react';
import styled from 'styled-components';


const Content = (props) => {
  const StyledContent = styled.div`
  width:75%;
  margin:28px auto;
  padding:28px;
  height:100%;
  // background-color: blue;
  `
  return (
    <StyledContent>
      {props.content}
    </StyledContent>
  )
}

export default Content