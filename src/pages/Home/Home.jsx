import React from 'react';
import Content from '../../components/layout/Content';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';
import icon from '../../assets/icon.png';
import { GithubOutlined,WechatOutlined,MailOutlined  } from '@ant-design/icons';
import CateCard from './components/Catecard';
import tw from "tailwind-styled-components"


axios.defaults.baseURL = 'http://124.220.198.163:8080'

async function fetchcates () {
  const {data} = await axios.get('/cate');
  console.log(data.data.cates);
  return data.data.cates;
}
const Home  = (props) => {

    const {data:catedata,isLoading,isFetching} = useQuery(["categories"],fetchcates)

    console.log(catedata);
  
    const HomeWrapper = tw.div`
    px-6 md:px-24
     bg-orange-500
    `
    const Ownercontainer = tw.div`
    flex flex-col md:flex-row 
    mb-5
    /*bg-lime-300 */
    `
    const Ownerprofile = tw.div`
    mx-auto md:mx-5
    my-6
    flex flex-col justify-between
    `
    const Avatar = tw.img`
    mx-auto md:mx-0
    w-52 h-52
    border-0;
    rounded-3xl
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
      {<HomeWrapper>
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
          <Catetitle>文章分类</Catetitle>
          {catedata?.map((item,index) => (
            <CateCard key={index}  data={item}/>
          ))}
        </Catecontainer>
      </HomeWrapper>}
    />
  );
}  }

export default Home;