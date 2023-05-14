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
  // const passage = '使用Web Worker可以在后台线程中运行 JavaScript，线程可以执行任务而不会干扰用户界面。\n\n## 使用规则\n\n- `worker`是使用`Worker()`构造出的实例对象，在后台线程中运行一个命名的 JavaScript 脚本。\n- `worker`实例对象可以通过将信息发送到创建它的 JavaScript 代码。\n- `worker`运行在另一个全局上下文中，而非`window`对象。\n- `worker`中不能直接操作 DOM 节点，也不能使用`window`对象的默认方法和属性。\n- `worker`和主线程之间，通过`postMessage()`方法发送各自的数据，使用`onmessage`事件处理函数来响应数据，数据在`message`事件的`data`属性中。\n- `worker`和主线程之间传递的数据是**另外复制**的数据。\n- 主线程可以使用实例对象上的`terminate()`方法立刻终止该`worker`。\n- `worker`线程内部可以使用`close()`关闭自身。\n- `worker`的一个优势在于能够执行处理器密集型的运算而不会阻塞 ….port.postMessage({ a, b });\n\n myWorker.port.onmessage = e => {\n console.log('收到worker的信息...');\n console.log(e.data);\n };\n}\n```\n\n`worker`线程：\n\n```javascript\nonconnect = e => {\n const port = e.ports[0];\n\n port.onmessage = e => {\n const { a, b } = e.data;\n const sum = a + b;\n port.postMessage(sum);\n };\n};\n```\n\n\n\n***\n\n> 参考：\n>\n> - <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers\" target=\"_blank\">Using Web Workers</a>'
//   const passage = "# nihao\n`你好`\n > 啊啊啊 \n## 你好\n## 你好吗\n### 好崩溃\n## 你好吗\n### 好崩溃\n## 你好吗\n### \n## 你好吗\n### 好崩溃\n## 你好吗\n### 好崩溃\n"
  // const content = '## Heading One...\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\n## Heading Two...\n';
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