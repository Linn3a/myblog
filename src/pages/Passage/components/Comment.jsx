import React from 'react';
import styled from 'styled-components';


const Commentwrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Commentheader = styled.div`
    display: flex;
    flex-direction: row;

`
const Commentavatar = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 8px;
    z-index: 1;
`
const Commentinfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 8px;
    padding-left: 18px;
    padding-right: 50px;

`
const Commentbody = styled.div`
    margin-top: -32px;
    border-radius: 8px;
    margin-left: 32px;
    margin-right: 32px;
    margin-bottom: 32px;
    padding: 40px;
    background-color: rgba(217, 237, 229, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`

const Comment = (props) => {
    const {comment } = props;
  return (
    <Commentwrapper>
      <Commentheader>
        <Commentavatar src={comment.avatar}/>
        <Commentinfo>
        <div>{comment.username}</div>       
        <div style={{color:"grey"}}>{comment.time}</div>
        </Commentinfo>
      </Commentheader>
        <Commentbody>
            {comment.content}   
        </Commentbody>
    </Commentwrapper>
  );
}



export default Comment;