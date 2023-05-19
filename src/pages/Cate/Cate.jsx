import React from 'react';
import Content from '../../components/layout/Content';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';
import Passagecard from '/src/components/Common/Passagecard';
import { useParams } from 'react-router-dom';
import tw from 'tailwind-styled-components';

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
 
            
    const Wrapper = tw.div`
    p-2 md:p-24
    `
   const Catecontainer = tw.div`
    w-full
    flex 
    flex-col md:flex-row
    items-center
   `

    // const Catecontainer = styled.div`
    // width: 100%;
    // margin-buttom: 20px;
    // display: flex;
    // flex-direction: row;
    // align-items: center;

    // // background-color: blue;


    // `
    const Avatar = styled.img`
    
    width: 200px;
    height: 200px;
    border:0;
    border-radius:20px;
    `
    const Catename = tw.div`
    mx-auto mt-3 md:ml-12
    text-3xl
    font-bold
    `
    
    const Pascontainer = styled.div`
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
      {<Wrapper>
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
      </Wrapper>}
    />
  );
}  

export default Cate;