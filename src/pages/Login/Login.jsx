import React from 'react';
import styled from 'styled-components'  
import axios from 'axios';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Card,Tabs,Button, Checkbox, Form, Input,Radio,notification } from 'antd';
import { useParams } from 'react-router-dom';
import { UserContext } from '/src/App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 3,
});

const Wrapper = styled.div`

    width:940px;
    height:600px;
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin:auto auto;
    padding:50px 30px;
    border-radius: 20px;
    background: rgba(217, 237, 229, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);  
    display:flex;
    flex-direction:row;
    .ad{
      flex:1
    }
    .form{
      flex:1;
      padding-left:30px;
      padding-right:30px;
    }
`
const Login = (props) => {
  const navigate = useNavigate()
  const { isLogin,setIsLogin,userInfo,setUserInfo } = useContext(UserContext);
  console.log(isLogin);
  console.log(userInfo);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    axios.post('login',{
      username:values.username,
      password:values.password
    }).then(res => {
      console.log(res.data.data);
      if(res.data.state.ok) {
        localStorage.setItem("ACCESS_TOKEN", res.data.data.Token);
        navigate('/home')
        notification.success({message:"登录成功"})
       
      }
      else{
        notification.error({message:res.data.state.message})
        setIsLogin(false)
        setUserInfo({
          username:'',
        })
      }
    })
  };
  const onRegisterFinish = (values) => {
    console.log('Received values of form: ', values);
    axios.post('user',{
      username:values.username,
      password:values.password,
      gender:values.gender
    }).then(res =>{
      console.log(res.data);
      if(res.data.state.ok) {
      notification.success({message:"注册成功，请登录"})
      navigate('/login/1')
    }
    else{
      notification.error({message:res.data.state.message})
    }})

  }
  const {activeKey} = useParams();
  console.log(activeKey);
  return (
       <Wrapper>
        <div className='ad'>
        <Card
          style={{
            width:"100%",
            background:"transparent",
            boxShadow:"none",
            margin:"auto",
            paddingRight:"30px",
          }}
          bordered={false}
          cover={<img alt="example" src="https://img.js.design/assets/smartFill/img352164da74c4b8.jpeg" />}>
            <Card.Meta
             title="广告位招租"
             description="非常非常美丽的页面"
            />
        </Card>
        </div>  
        <div className='form'>
          <Tabs
            type="card"
            defaultActiveKey = {activeKey}
            items = {
              [{
                label:"登录",
                key:'1',
                children:(    
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>记住密码</Checkbox>
                    </Form.Item>
            
                    <a href="">
                      忘记密码
                    </a>
                  </Form.Item>
            
                  <Form.Item>
                    <Button htmlType="submit" className="login-form-button" >
                      登录
                    </Button>
                  </Form.Item>
                </Form>
              )
              },{
                label:"注册",
                key:'2',
                children:(<Form
                  name="register"
                  onFinish={onRegisterFinish}
                  style={{
                  }}
                  scrollToFirstError
                >
        
                  <Form.Item
                    name="username"
                    label="昵称"
                    tooltip="取啊请取"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your nickname!',
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    label="密码"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>
            
                  <Form.Item
                    name="confirm"
                    label="确认密码"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('密码不一致！'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
            
                  {/* <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                      {
                        required: true,
                        message: 'Please select gender!',
                      },
                    ]}
                  >
                    <Radio placeholder="select your gender"
                     option = {[{
                      label:''
                     }]}
                    />
                  </Form.Item> */}
                  <Form.Item 
                    label="性别" 
                    name="gender"
                    rules={[
                      {
                        required: true,
                        message: 'Please select gender!',
                      },
                    ]}>
                    <Radio.Group>
                    <Radio value={1}> 女 </Radio>
                    <Radio value={2}> 男 </Radio>
                    <Radio value={3}> other</Radio>
                    </Radio.Group>
                    </Form.Item>
                  <Form.Item >
                    <Button  htmlType="submit">
                      注册
                    </Button>
                  </Form.Item>
                </Form>)
              }]
            }
          />

        </div>
        {/* <div className='wrapper'></div> */}
      </Wrapper>
    );
  }
  
 
  
  export default Login;