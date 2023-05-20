import React,{useState} from 'react';
import Content from '../../components/layout/Content';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MarkDown from '../../components/MarkDown/MarkDown';
import Catalog from './components/Catelog';
import MarkNav from 'markdown-navbar';
import Comment from './components/Comment';
import NewComment from './components/NewComment';
import { Button,notification,FloatButton,Drawer } from 'antd';
import { useParams  } from 'react-router-dom';
import {fetchUserInfo} from '/src/utils/api.js';
import tw from "tailwind-styled-components";
import './components/navbar.css'


const PassageContentcontainer = tw.div`
  /*margin-left: 30%;
  width: 70%;/
  w-full lg:w-9/12 ml-auto
` 
const Float = tw.div`
  block lg:hidden
`

const Passagetitlewrapper = styled.div`
    margin-top:-10px;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    .title{
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    div{
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 768px) {
          display: block;
        }

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
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


    let { id } = useParams();
    let Token = localStorage.getItem("ACCESS_TOKEN");
    console.log(Token);
    const { data:userInfo,refetch:refetch2 } = useQuery(["userInfo2",Token],()=>fetchUserInfo(Token))
    console.log(userInfo);

    const {data:passage,refetch} = useQuery(["passage",id],() => fetchPassage(id),{enabled:true})
     console.log(passage);

  return (
    <Content
    content ={<>
    <smalldiv>
    <Catalog content={passage?.content}/>
    </smalldiv>
    <Drawer title="文章目录"  style={{width:"60%"}} placement="left" onClose={onClose} open={open}>
    <MarkNav
    //   className={marknav}
      className="article"
        headingTopOffset={80}
        source={passage?.content}
        ordered={false}
      />
      </Drawer>
    <PassageContentcontainer>
        <Passagetitlewrapper>
          <div className='title'>
          
            <div key="passageTitle" className='title'>{passage?.title}</div>
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
    <Float>
    <FloatButton
    shape="square"
    type="primary"
    onClick={showDrawer}/>
    </Float>
   </PassageContentcontainer>
    
    </>}
 />)
}



export default Passage;