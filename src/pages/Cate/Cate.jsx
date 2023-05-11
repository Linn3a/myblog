import React from 'react';
import Content from '../../components/layout/Content';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';
import avatar from '../../assets/avatar.jpg';
import { GithubOutlined,WechatOutlined,MailOutlined  } from '@ant-design/icons';
import Passagecard from '/src/components/Common/Passagecard';

// const fetchpoem = async () => {
//     const response = await axios.get('https://v1.jinrishici.com/all.json',{});
//     return response.data;
// }


const Cate  = (props) => {
//   const { data,isLoading,isFetching } =  useQuery ({
//     queryKey:['poem'],
//     queryFn:() => fetchpoem(),
//     staleTime: 1000 * 60 * 60,
//     });
    const data= {
        "id": "1",
        "name": "课程",
        "cover": "https://img.js.design/assets/smartFill/img421164da758808.jpg",
        "passages": [{
            "id": "1",
            "title": "啊啊啊",
            "desc": "你好你好",
            "time": "2023-5-1",
            "tags":[{
                "id":"1",
                "name":"计算机",
                "color":"rgba(250, 208, 196, 1)"
            },{
                "id":"2",
                "name":"英语",
                "color":"rgba(255, 195, 0, 0.78)"
            }]

            },{
                "id": "2",
                "title": "哦哦哦",
                "desc": "好累",
                "time": "2023-5-2",
                "tags":[{
                    "id":"1",
                    "name":"计算机",
                    "color":"rgba(250, 208, 196, 1)"
                }]

         }]
    }
            
    const Catecontainer = styled.div`
    width: 100%;
    margin-buttom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    // background-color: blue;


    `
    const Avatar = styled.img`
    // width: 100%;
    width: 200px;
    height: 200px;
    border:0;
    border-radius:20px;
    `
    const Catename = styled.div`
    margin-left: 50px;
    font-size:36px;
    font-weight: 700;
    `

    const Pascontainer = styled.div`
    // background-color: red;
    margin-top: 50px;
    `
    const Catetitle = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin-left: 20px;
    `
  return (
    <Content
      content =
      {<div style = {{paddingLeft:"100px",paddingRight:"100px"}}>
        <Catecontainer>
          <Avatar src={data.cover}></Avatar>
          <Catename>{data.name}</Catename>
        </Catecontainer>
        <Pascontainer>
          {/* <CateCard></CateCard> */}
          {data.passages.map((item,index) => (
            <Passagecard key={index}  Pas={item}/>
          ))}
        </Pascontainer>
      </div>}
    />
  );
}  

export default Cate;