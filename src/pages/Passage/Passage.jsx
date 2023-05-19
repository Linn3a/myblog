import React,{useEffect} from 'react';
import Content from '../../components/layout/Content';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MarkDown from '../../components/MarkDown/MarkDown';
import Catalog from './components/Catelog';
import MarkNav from 'markdown-navbar';
import Comment from './components/Comment';
import NewComment from './components/NewComment';
import { Button,notification } from 'antd';
import { useParams  } from 'react-router-dom';
import {fetchUserInfo} from '/src/utils/api.js';
// import "animate.css";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";



const PassageContentcontainer = styled.div`
  margin-left: 30%;
  width: 70%;
  @media screen and (max-width: 1000px) {
    width: 85%;
    margin: auto;
  }
` 
const Passagetitlewrapper = styled.div`
    margin-top:-10px;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1{
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    div{
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
`
const PassageTime = styled.div`
    font-size: 15px;
    color: grey;
    align-self: flex-end;

`
const Commentwrapper = styled.div`
    margin:60px 0;
`

const fetchPassage = async (id) => {
    const { data } = await axios.get(`p/${id}`)
    console.log(data.data.passage);
    return data.data.passage;
}

const Passage= (props) => {
    let { id } = useParams();
    let Token = localStorage.getItem("ACCESS_TOKEN");
    console.log(Token);
    const { data:userInfo,refetch:refetch2 } = useQuery(["userInfo2",Token],()=>fetchUserInfo(Token))
    console.log(userInfo);

    const {data:passage,refetch} = useQuery(["passage",id],() => fetchPassage(id),{enabled:true})
     

  return (
    <Content
    content ={<>
    <Catalog content={passage?.content}/>
    <PassageContentcontainer>
        <Passagetitlewrapper>
          <div>
          
            <h1 key="passageTitle" >{passage?.title}</h1>
            <div>
             
          <Button onClick={()=> {
            if(userInfo!=null)
            {
                axios.post(`star/${userInfo.id}/${id}`,{}).then(res =>{
                    console.log(res);
                    if(res.data.state.ok)
                    notification.success({message:"收藏成功"})
                })
            }
          }}
            style={{marginRight:"20px"}}
          >收藏该文章</Button>
          <Button onClick={()=>{
            if(userInfo!=null)
            {
                axios.delete(`star/${userInfo.id}/${id}`).then(res =>{
                    console.log(res);
                    if(res.data.state.ok)
                    notification.success({message:"取消收藏成功"})
                })
            }
          }}>取消文章收藏</Button>
          </div>
          </div>
        <PassageTime>{passage?.created_at}</PassageTime>
        </Passagetitlewrapper>
    <MarkDown content={passage?.content}/>
    
    <Commentwrapper>
    {passage?.comments &&
        passage?.comments.map((item,index)=>(
            <Comment key={index} comment={item}/>))
        }
    
       {userInfo!=null && <NewComment key="newComment" userInfo={userInfo} passageId={id} refetch={refetch}/>}
       {userInfo==null && <div style={{textAlign:"center"}}>请先登录再评论</div>}
    </Commentwrapper>
   </PassageContentcontainer>
    
    </>}
 />)
}



export default Passage;