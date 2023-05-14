import React from 'react';
import Content from '../../components/layout/Content';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MarkDown from '../../components/MarkDown/MarkDown';
import Catalog from './components/Catelog';
import MarkNav from 'markdown-navbar';
import Comment from './components/Comment';
import NewComment from './components/NewComment';
import { useParams  } from 'react-router-dom';

const PassageContentcontainer = styled.div`
  margin-left: 30%;
  width: 70%;
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
    let { id } = useParams()
    const {data:passage} = useQuery(["passage",id],()=>fetchPassage(id))
    const data = {
        title: "有点崩溃了谁懂",
        content :  "# nihao\n`你好`\n > 啊啊啊 \n## 你好\n## 你好吗\n### 好崩溃\n## 你好吗\n### 好崩溃\n## 你好吗\n### \n## 你好吗\n### 好崩溃\n## 你好吗\n### 好崩溃\n",
        time: "2023-5-7",
        comments:[
            {
            username: "张三",
            avatar:'https://img.js.design/assets/smartFill/img426164da758808.jpg',
            content: "你好啊",
            time: "2023-5-7"
            },{
            username: "李四",
            avatar:'https://img.js.design/assets/smartFill/img263164da72e058.jpeg',
            content: "你好啊",
            time: "2023-5-7"
            }
        ]
    }
  return (
    <Content
    content ={<>
    <Catalog content={passage?.content}/>
    <PassageContentcontainer>
        <Passagetitlewrapper>
            <h1>{passage?.title}</h1>

        <PassageTime>{passage?.created_at}</PassageTime>
        </Passagetitlewrapper>
    <MarkDown content={passage?.content}/>
    <Commentwrapper>
        {data.comments.map((item,index)=>(
            <Comment key={index} comment={item}/>))
        }
        <NewComment/>
    </Commentwrapper>
   </PassageContentcontainer>
    
    </>}
 />)
}



export default Passage;