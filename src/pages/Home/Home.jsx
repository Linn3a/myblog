import React from 'react';
import Content from '../../components/layout/Content';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchpoem = async () => {
    const response = await axios.get('https://v1.jinrishici.com/all.json',{});
    return response.data;
}


const Home  = (props) => {
  const { data,isLoading,isFetching } =  useQuery ({
    queryKey:['poem'],
    queryFn:() => fetchpoem(),
    staleTime: 1000 * 60 * 60,
    });
  console.log(data);
  return (
    <Content
      content =
      {<div className="relative top-4 bg-sky-300">
      123
      {data?.content} 
      --{data?.author}
      </div>}
    />
  );
}  

export default Home;