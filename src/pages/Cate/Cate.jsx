import React from 'react';
import Content from '../../components/layout/Content';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';
import { GithubOutlined,WechatOutlined,MailOutlined  } from '@ant-design/icons';
import Passagecard from '/src/components/Common/Passagecard';
import { useParams } from 'react-router-dom';

const fetchcate = async (id) => {
    const {data} = await axios.get(`cate/${id}`);
    return data.data.cate;
}


const Cate  = (props) => {
  let {id} = useParams();
  const { data,isLoading,isFetching } =  useQuery ({
    queryKey:['poem',id],
    queryFn:() => fetchcate(id),
    staleTime: 1000 * 60 * 60,
    });
 
            
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
          <Avatar src={data?.cover}></Avatar>
          <Catename>{data?.name}</Catename>
        </Catecontainer>
        <Pascontainer>
          {/* <CateCard></CateCard> */}
          {data?.passages.map((item,index) => (
            <Passagecard key={index}  Pas={item}/>
          ))}
        </Pascontainer>
      </div>}
    />
  );
}  

export default Cate;