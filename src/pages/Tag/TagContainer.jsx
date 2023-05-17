import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import Content from '../../components/layout/Content';
import { Badge } from 'antd';
import Tag from '/src/components/Common/Tag';

async function fetchTag(tagid) {
    const {data} = await axios.get('/tag');
    console.log(data.data); 
    return data.data.tags;
}
const TagContainer = (props) => {
    const {data:tags,isLoading,isFetching,refetch} = useQuery(["tags"],() => fetchTag())
    console.log(tags);
  return (
    <Content
        content={
             <div style={{marginTop:"70px",}}>
                {tags && tags?.map((tag,index) => {
                    return (
                      <Badge count={tag.passage_amount}>
                        <Tag
                        key={index} name={tag.name} color={tag.color} id={tag.id}
                        />
                        </Badge>                  
                    );
                })}
            </div>
        }
    />
  );
}


export default TagContainer;