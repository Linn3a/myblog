import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import {  useNavigate, useParams } from 'react-router-dom';
import Content from '/src/components/layout/Content';
import Passagecard from '/src/components/Common/PassageCard';
import tw from 'tailwind-styled-components';

import axios from 'axios';

async function fetchTag(tagid) {
    const {data} = await axios.get(`/tag/${tagid}`);
    console.log(data.data); 
    return data.data.tag;
}

const TagDetail  = (props) => {
    const { id } = useParams() ;
    const {data:tag,isLoading,isFetching,refetch} = useQuery(["tag",id],() => fetchTag(id))
    console.log(tag);

    const Tagtitle = tw.div`
    text-3xl
    font-bold
    w-4/5 md:w-2/5
    mx-auto
    text-center
    rounded-md
    px-1
    py-2
    `
    // const TagContainer = styled.div`
    // // width: 100%;
    // // background-color: blue;
    // // margin: 0 auto;
    // // .tag{
    // //     font-size: 36px;
    // //     font-weight: 600;
    // //     width: 50%; 
    // //     text-align: center;
    // //     border-radius: 5px;

    // //     padding:5px 8px;
    // //     margin: 0 auto;
        
    // // }

    // `
    const TagContainer = tw.div`
    w-full
    flex
    flex-col
    items-center
    `
  return (
    <Content
        content = {
            <div>
                {tag && <TagContainer>
                    <Tagtitle style = {{ backgroundColor:tag.color}}>{tag.name}</Tagtitle>
                 {  tag?.Passages && tag?.Passages.map((item,index) => (
            <Passagecard key={index}  Pas={item}/>
          ))}
        
                </TagContainer>}
            </div>
        }
    />
  );
}

export default TagDetail;