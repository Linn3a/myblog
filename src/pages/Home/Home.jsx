import React from 'react';
import Content from '../../components/layout/Content';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';
import icon from '../../assets/icon.png';
import { GithubOutlined,WechatOutlined,MailOutlined  } from '@ant-design/icons';
import CateCard from './components/Catecard';

axios.defaults.baseURL = 'http://127.0.0.1:8080'

async function fetchcates () {
  const {data} = await axios.get('/cate');
  console.log(data.data.cates);
  return data.data.cates;
}
const Home  = (props) => {

    const {data:catedata,isLoading,isFetching} = useQuery(["categories"],fetchcates)

    console.log(catedata);
  //   const catedata = [{
  //     catename:"course",
  //     cateimg:"https://img.js.design/assets/smartFill/img421164da758808.jpg",
  //     catedisplayname:"课程",
  //     catetags:[
  //       {
  //         name:"计算机",
  //         color:"rgba(250, 208, 196, 1)"
  //       },{
  //         name:"英语",
  //         color:"rgba(255, 195, 0, 0.78)"
  //       }] 
  //   },
  //   {
  //     catename:"dev",
  //     cateimg:"https://img.js.design/assets/smartFill/img278164da731af0.jpg",
  //     catedisplayname:"开发",
  //     catetags:[{
  //       name:"前端",
  //       color:"rgba(255, 195, 0, 0.78)"
  //     },{
  //       name:"后端",
  //       color:"rgba(250, 208, 196, 1)"
  //     }]  
  //   }
  // ]
    const Ownercontainer = styled.div`
    width: 100%;
    margin-buttom: 20px;
    display: flex;
    flex-direction: row;


    // background-color: blue;
    `
    const Ownerprofile = styled.div`
    margin-left: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `
    const Avatar = styled.img`
    // width: 100%;
    width: 200px;
    height: 200px;
    border:0;
    border-radius:20px;
    `
    const Ownername = styled.div`
    font-size:36px;
    font-weight: 700;
    `
    const Ownerdescription = styled.div`
    // width: 100%;
    `
    const Ownercontact = styled.div`
    // width: 100%;

    `
    const Contactbutton = styled.button`
    width: 40px;
    height: 40px;
    margin: 0 10px;
    // background-color: blue;
    font-size: 25px;
    `

    const Catecontainer = styled.div`
    // background-color: red;
    margin-top: 50px;
    `
    const Catetitle = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin-left: 20px;
    `
if(!isLoading&& !isFetching){
  return (
    <Content
      content =
    // style = {{paddingLeft:"200px",paddingRight:"200px"}}
      {<div style = {{paddingLeft:"100px",paddingRight:"100px"}}>
        <Ownercontainer>
          <Avatar src={icon}></Avatar>
          <Ownerprofile>
          <Ownername>Linnea</Ownername>
          <Ownerdescription>这个人很懒，什么都没有留下</Ownerdescription>
          <Ownercontact>
            <Contactbutton onClick = {
              () => {
                window.location.href = "https://github.com/Linn3a"
              }
            }>
              <GithubOutlined />
            </Contactbutton>
            <Contactbutton><WechatOutlined /></Contactbutton>
            <Contactbutton><MailOutlined /></Contactbutton>
          </Ownercontact>
        </Ownerprofile>
        </Ownercontainer>
        <Catecontainer>
          {/* <CateCard></CateCard> */}
          <Catetitle>文章分类</Catetitle>
          {catedata?.map((item,index) => (
            <CateCard key={index}  data={item}/>
          ))}
        </Catecontainer>
      </div>}
    />
  );
}  }

export default Home;