import React from 'react';
import styled from 'styled-components';
import tw from "tailwind-styled-components";
import UserTag from '/src/components/common/UserTag';   
// import  {timeParser } from '/src/utils/time.js';
import {timeParser} from '/src/utils/utils.js';


const Commentwrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Commentheader = tw.div`
    flex
    flex-row

`
const Commentavatar = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 8px;
    z-index: 1;
`
const Commentinfo = tw.div`
    flex
    flex-col md:flex-row
    justify-between
    w-full
    pt-2
    pl-4
    pr-12



`
// const Commentinfo = styled.div`
//     display: flex;
//     width: 100%;
//     flex-direction: row;
//     justify-content: space-between;
//     padding-top: 8px;
//     padding-left: 18px;
//     padding-right: 50px;

// `
const Commentusername = tw.div`
  flex
  flex-row
  -mt-2 md:-mt-10
  justify-start
  items-center
  z-50
`
const Commentbody = tw.div`
  mt-0 md:-mt-8
  mx-0 md:mx-8
  mb-8
  rounded-lg
  p-10
  bg-emerald-50
  shadow-md
`

const Comment = (props) => {
    const {comment } = props;
    console.log(timeParser(comment?.created_at));
  return (
    <Commentwrapper>
      <Commentheader>
        <Commentavatar src={comment.avatar}/>
        <Commentinfo>
          <Commentusername>
        <div>{comment.username}</div>   
        <UserTag name={comment.user_tag}  color={comment.tag_color} /> 
        </Commentusername>
        <div style={{color:"grey"}}>{timeParser(comment.created_at)}</div>
        </Commentinfo>
      </Commentheader>
        <Commentbody>
            {comment.content}   
        </Commentbody>
    </Commentwrapper>
  );
}



export default Comment;