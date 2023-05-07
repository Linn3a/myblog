import React from 'react';
import Content from '../../../components/layout/Content';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MarkDown from '../../../components/MarkDown/MarkDown';
import Catalog from '../components/Catelog';
import MarkNav from 'markdown-navbar';

const PassageContentcontainer = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;
` 
const PassageContent = (props) => {
  // const passage = '使用Web Worker可以在后台线程中运行 JavaScript，线程可以执行任务而不会干扰用户界面。\n\n## 使用规则\n\n- `worker`是使用`Worker()`构造出的实例对象，在后台线程中运行一个命名的 JavaScript 脚本。\n- `worker`实例对象可以通过将信息发送到创建它的 JavaScript 代码。\n- `worker`运行在另一个全局上下文中，而非`window`对象。\n- `worker`中不能直接操作 DOM 节点，也不能使用`window`对象的默认方法和属性。\n- `worker`和主线程之间，通过`postMessage()`方法发送各自的数据，使用`onmessage`事件处理函数来响应数据，数据在`message`事件的`data`属性中。\n- `worker`和主线程之间传递的数据是**另外复制**的数据。\n- 主线程可以使用实例对象上的`terminate()`方法立刻终止该`worker`。\n- `worker`线程内部可以使用`close()`关闭自身。\n- `worker`的一个优势在于能够执行处理器密集型的运算而不会阻塞 ….port.postMessage({ a, b });\n\n myWorker.port.onmessage = e => {\n console.log('收到worker的信息...');\n console.log(e.data);\n };\n}\n```\n\n`worker`线程：\n\n```javascript\nonconnect = e => {\n const port = e.ports[0];\n\n port.onmessage = e => {\n const { a, b } = e.data;\n const sum = a + b;\n port.postMessage(sum);\n };\n};\n```\n\n\n\n***\n\n> 参考：\n>\n> - <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers\" target=\"_blank\">Using Web Workers</a>'
  const passage = "# nihao\n`你好`\n > 啊啊啊 \n## 你好\n## 你好吗\n### 好崩溃\n## 你好吗\n### 好崩溃\n## 你好吗\n### \n## 你好吗\n### 好崩溃\n## 你好吗\n### 好崩溃\n"
  // const content = '## Heading One...\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\nwfwfergergrth4ttrwh\neragregeragr\naergeragagreg\n## Heading Two...\n';
  return (
    <Content
    content ={<PassageContentcontainer>
    {/* <MarkNav
      headingTopOffset={80}
      source={passage}
      ordered={false}
      /> */}
    <MarkDown content={passage}/>
   </PassageContentcontainer>}
    />
  );
}



export default PassageContent;