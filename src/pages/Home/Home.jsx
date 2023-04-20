import React from 'react';
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
    // refetchInterval: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
    });
  console.log(data);
  return (
    <>
      {data?.content} 
      --{data?.author}

    </>
  );
}  

export default Home;