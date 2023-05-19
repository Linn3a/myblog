import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import {  useNavigate } from 'react-router-dom';
import comments from '/src/assets/comments.png';
import passage from '/src/assets/passage.png';
import axios from 'axios';
import {fetchUserInfo} from '/src/utils/api.js';
import { Button } from 'antd';

const fetchpoem = async () => {
    const response = await axios.get('https://v1.jinrishici.com/all.json',{});
    return response.data;
}

const Welcome = (props) => {
  let Token = localStorage.getItem("ACCESS_TOKEN");
  console.log(Token);
  const { data:userInfo } = useQuery(["userInfo",Token],()=>fetchUserInfo(Token))

  // const { isLogin, userInfo } = props;
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

    const StyledGradientContainer = styled.div`
    width:75%;
    margin:60px auto;
    padding:0px;
    background-color:red;
    height:100%;
    overflow:sroll;
    position:relative;
    .top{
      height: 600px;
      background: linear-gradient(180deg, rgba(255, 241, 235, 1) 0%, rgba(172, 224, 249, 1) 100%);
    }
    .next{
      height: 600px;
      padding: 140px 100px;
      background: linear-gradient(180deg, rgba(243, 231, 233, 1) 0%, rgba(227, 238, 255, 1) 99%, rgba(172, 238, 255, 1) 100%);
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      img {
        // position: relative;
        // top: 100px;
        // left: 100px;
        border-radius: 10px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
        width: 600px;
        height: 295.6px;
      }
      .text{
        margin: 80px;
        align-self: center;

      }
      .here{
        font-size: 48px;
        font-weight: 600;
        letter-spacing: 0px;
        line-height: 130px;
        color:transparent;
      background: linear-gradient(180deg, rgba(136, 211, 206, 1) 0%, rgba(110, 69, 226, 1) 100%);
        -webkit-background-clip: text;
        // color: rgba(136, 211, 206, 1);
        text-align: left;
        vertical-align: top;
      }
      .feature{
        margin-left: 80px;
        font-size: 52px;
        font-weight: 700;
        letter-spacing: 0px;
        line-height: 130px;
        color:transparent;
      background:linear-gradient(90deg, rgba(255, 60, 172, 1) 0%, rgba(86, 43, 124, 1) 52%, rgba(43, 134, 197, 1) 100%);
        -webkit-background-clip: text;
        // color: rgba(136, 211, 206, 1);
        text-align: left;
        vertical-align: top;
      }
     
    }
    `

    const StyledWelcomeContainer = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    font-family:"poem",serif;
    text-align: center;
    // background-color:red;

    `
    const StyledMiddle = styled.div`
    margin : 50px 0;
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
    .Username{
      font-size: 36px;
    font-weight: 600;
    letter-spacing: 0px;
    margin: 0 10px;
    line-height: 51.73px;
    color:transparent;
    background: linear-gradient(90deg, rgba(106, 17, 203, 1) 0%, rgba(37, 117, 252, 1) 100%);
    -webkit-background-clip: text;
    text-align: left;
    vertical-align: top;
    }

    `
    const StyledWelcome = styled.div`
    font-size: 40px;
    font-weight: 400;
    .jumpButton{
      color:white;
      border:0px;
      background-color:rgba(217, 237, 229, 1);
      margin: 0 20px;
      :hover{
        color:black;
      }
      background: linear-gradient(90deg, rgba(106, 17, 203, 1) 0%, rgba(37, 117, 252, 1) 100%);
    }
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
 
      <StyledGradientContainer>
        {/* <Content
       style= {{padding:"0px"}}
          content = { */}
          <div className="top">
            <StyledWelcomeContainer>
            {data && <StyledPoem>
            {data?.content}
            </StyledPoem>}
            {!data && <StyledPoem>
            一点浩然气，千里快哉风
            </StyledPoem>}
            <StyledMiddle>
            {userInfo!=null && userInfo!=undefined && <StyledMessage>
              <div className='Username'>
              {userInfo?.username}
              </div>
              <div>你好！</div>
              </StyledMessage>}
              {!userInfo==null || userInfo==undefined && <StyledMessage>
                <StyledButton onClick={toLogin}>登录</StyledButton>
                <StyledButton onClick={toRegister}>注册</StyledButton>
                </StyledMessage>}
              </StyledMiddle>
            <StyledWelcome>
              <h1>
              欢迎来到我的博客！
              </h1>
              <Button className='jumpButton' onClick={() => {navigate('/home')}}>浏览文章</Button>
              <Button className='jumpButton' onClick={() => {navigate('/user')}}>个人信息</Button>
            </StyledWelcome>
            </StyledWelcomeContainer>
            </div>
        <div className="next">
              <img src={passage} />
              <div className='text'>
                <h1 className='here'>在这里！</h1>
               <h1 className='feature'>浏览文章</h1>
               </div>
        </div>
        <div className="next">
        <img src={comments} />
              <div className='text'>
                <h1 className='here'>在这里！</h1>
               <h1 className='feature'>发表评论</h1>
               </div>
        </div>
        </StyledGradientContainer>
  );
}


export default Welcome;