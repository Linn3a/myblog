import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import {  useNavigate, useParams } from 'react-router-dom';
import Content from '/src/components/layout/Content';
import Passagecard from '/src/components/Common/PassageCard';

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
    const TagContainer = styled.div`
    width: 100%;
    .tag{
        font-size: 36px;
        font-weight: 600;
        width: 400px; 
        text-align: center;
        border-radius: 5px;
        // height: 40px;

        padding:5px 8px;
        margin: 0 10px;
    }
    `
  return (
    <Content
        content = {
            <div>
                {tag && <TagContainer>
                    <div className='tag' style = {{ backgroundColor:tag.color}}>{tag.name}</div>
                   {tag?.Passages && <div>
          {/* <CateCard></CateCard> */}
          {tag?.Passages.map((item,index) => (
            <Passagecard key={index}  Pas={item}/>
          ))}
        </div>}
                </TagContainer>}
            </div>
        }
    />
  );
}

export default TagDetail;