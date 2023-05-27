import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import Content from '../../components/layout/Content';
import { Badge } from 'antd';
import Tag from '/src/components/Common/Tag';
import ReactEcharts from "echarts-for-react";


async function fetchTag(tagid) {
    const {data} = await axios.get('/ordered_tag');
    console.log(data.data); 
    return data.data.tags;
}

const TagContainer = (props) => {
  let navigate = useNavigate();
    const {data:tags,isLoading,isFetching,refetch} = useQuery(["tags"],() => fetchTag())
    console.log(tags);

 const option = {
    title: {
      text: '标签总览',
      subtext: 'tags',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: tags?.map(item => item.name)
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '标签',
        type: 'pie',
        radius: [20, 140],
        center:['50%','50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: tags?.map(item => ({value:item.amount,name:item.name,id:item.id}))
      }
    ],
    color : tags?.map(item => item.color)
  };

  return (
    <Content
        content={
            //  <div style={{marginTop:"70px",}}>
            //     {tags && tags?.map((tag,index) => {
            //         return (
            //           <Badge count={tag.passage_amount}>
            //             <Tag
            //             key={index} name={tag.name} color={tag.color} id={tag.id}
            //             />
            //             </Badge>                  
            //         );
            //     })}
            // </div>
            <ReactEcharts
            option={option}
            style={{ height: "65vh", width: "100%" }}
            onEvents={{
              click: (e) => {
                console.log(e.data);
                navigate(`/tag/${e.data.id}`)
                // props.history.push(`/tag/${e.data.id}`)
              }
            }} 
            />

        }
    />
  );
}


export default TagContainer;