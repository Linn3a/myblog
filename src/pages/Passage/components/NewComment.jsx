import React,{useState} from 'react';
import styled from 'styled-components';
import { Button,notification } from 'antd';
import axios from 'axios';

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
    const {userInfo,passageId,refetch} = props
    const [newComment,setNewComment] = useState("")
  return (
    <Commentwrapper>
      <Commentheader>
        <Commentavatar src={userInfo.avatar}/>
        <Commentinfo>
        <div>{userInfo.username}</div>
        <Button onClick = {() => {
            console.log(newComment);
            axios.post("/comment",{
                content: newComment,
                passage_id: parseInt(passageId),
                user_id: userInfo.id
            }).then((res) => {
                if(res.data.state.ok)
                notification.success({message:"评论成功！"}) 
                refetch();
            }
            )
        }}
        style={{ borderColor: " rgba(217, 237, 229, 1)" }}
        >提交评论</Button>
        </Commentinfo>
      </Commentheader>
        <Commentbody>
            <textarea style={{width: "100%", height: "100px",borderRadius:"8px",border:"0",outline:"none"}} onChange={(e) => {
                console.log(e.target.value);
                setNewComment(e.target.value);
            }}
            
            placeholder='请评论'/>
        </Commentbody>
    </Commentwrapper>
  );
}



export default NewComment;