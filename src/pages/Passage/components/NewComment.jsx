import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

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
    margin-top: -20px;
    border-radius: 8px;
    margin-left: 32px;
    margin-right: 32px;
    margin-bottom: 32px;
    padding: 40px;
    padding-bottom: 10px;
    padding-right: 10px;
    background-color: white;
    boader: 1px solid rgba(217, 237, 229, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`

const NewComment = (props) => {
    const userinfo = {
        username: "COS",
        avatar: "https://avatars.githubusercontent.com/u/118064332?s=400&u=b40c68dabb13392d7e60b58351d18af8a47cbc34&v=4",
        userId: "1",
    } ;
  return (
    <Commentwrapper>
      <Commentheader>
        <Commentavatar src={userinfo.avatar}/>
        <Commentinfo>
        <div>{userinfo.username}</div>
        <Button onClick = {() => {
            console.log("click");
        }}
        style={{ borderColor: " rgba(217, 237, 229, 1)" }}
        >提交评论</Button>
        </Commentinfo>
      </Commentheader>
        <Commentbody>
            <textarea style={{width: "100%", height: "100px",borderRadius:"8px",border:"0",outline:"none"}} onChange={(e) => {
                console.log(e.target.value);
            }}
            
            placeholder='请评论'/>
        </Commentbody>
    </Commentwrapper>
  );
}



export default NewComment;