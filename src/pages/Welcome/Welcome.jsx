import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import {  useNavigate } from 'react-router-dom';
import Content from '../../components/layout/Content';
import axios from 'axios';

const fetchpoem = async () => {
    const response = await axios.get('https://v1.jinrishici.com/all.json',{});
    return response.data;
}

const Welcome = (props) => {
  const { isLogin, userInfo } = props;
    const { data,isLoading,isFetching } =  useQuery ({
      queryKey:['poem'],
      queryFn:() => fetchpoem(),
      staleTime: 1000 * 60 * 60,
    });
  console.log(data);
   let navigate =  useNavigate()
    
    const toLogin = () => {
      navigate('/login/1');
    }

    const toRegister = () => {
      navigate('/login/2');
    }

    const StyledWelcomeContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    font-family:"poem",serif;
    text-align: center;

    `
    const StyledMiddle = styled.div`
    margin : 100px 0;
    // background-color:red;

    `
    const StyledPoem = styled.div`
    font-size: 60px;
    font-weight: 600;
    margin: 0 auto;
    text-align: center;
    `
    const StyledMessage = styled.div`
    font-size: 36px;
    font-weight: 600;
    display:flex;
    flex-direction:row;
    justify-content:center;
    `
    const StyledWelcome = styled.div`
    font-size: 48px;
    font-weight: 400;
    `
    const StyledButton = styled.button`
    font-weight:400;
    background-color:rgba(217, 237, 229, 1);
    padding:5px 15px;
    border-radius:5px;
    margin: 30px;
    // margin-right:30px;
    font-size:24px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    `
    return (
        <Content
          content = {
            <StyledWelcomeContainer>
            {data && <StyledPoem>
            {data?.content}
            </StyledPoem>}
            {!data && <StyledPoem>
            一点浩然气，千里快哉风
            </StyledPoem>}
            <StyledMiddle>
            {isLogin && <StyledMessage>
              <div style={{color:"rgba(217, 237, 229, 1)",marginRight:"10px"}}>
              {userInfo?.username}
              </div>
              <div>你好！</div>
              </StyledMessage>}
              {!isLogin && <StyledMessage>
                <StyledButton onClick={toLogin}>登录</StyledButton>
                <StyledButton onClick={toRegister}>注册</StyledButton>
                </StyledMessage>}
              </StyledMiddle>
            <StyledWelcome>
              欢迎来到我的博客！
            </StyledWelcome>
            </StyledWelcomeContainer>
          }
        />
  );
}


export default Welcome;