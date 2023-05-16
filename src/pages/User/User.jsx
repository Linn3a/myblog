import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import Content from '../../components/layout/Content';
import { useRef } from 'react';
import { Tabs,Input, Tooltip,message, Upload,notification,Button,Result, Popconfirm } from 'antd';
import { ProDescriptions } from '@ant-design/pro-components';
import { LoadingOutlined, PlusOutlined,MehOutlined } from '@ant-design/icons';
import Passagecard from '/src/components/Common/Passagecard';
import Commentcard from '/src/components/Common/Commentcard';
import { UserContext } from '/src/App';
import { useContext } from 'react';
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// const onChange = (key) => {
//   console.log(key);
// };
// const App = () => (
//   <Tabs
//     onChange={onChange}
//     type="card"
//     items={new Array(3).fill(null).map((_, i) => {
//       const id = String(i + 1);
//       return {
//         label: `Tab ${id}`,
//         key: id,
//         children: `Content of Tab Pane ${id}`,
//       };
//     })}
//   />
// );
// export default App;
const UserWrapper = styled.div`
    width: 80%;
    margin: 20px auto;
    // margin-buttom: 20px; 
    `
    const UserinfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 32px;
    padding-left: 32px;
    padding-bottom: 60px;
    padding-right: 32px;
    border-radius: 20px;
    margin-bottom: 50px;
    background: rgba(217, 237, 229, 1);
    `
    const Useravatar = styled.img`
    height: 240px;
    width: 240px;
    border-radius: 10px;
    `
    const Userinfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    .name{
        font-size:30px;
        font-weight: 600;
    }
    `
 
    const DangerousZone = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h1{
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
        color: #fca5a5;
    }
    `
const fetchUserInfo = async (Token) => {
  let userInfo  = await axios.post(`/autologin`,{Token});
  if(userInfo.data.state.ok){
  console.log(userInfo.data.data.id);
  let userdata = await axios.get(`/user/${userInfo.data.data.id}`);
  console.log(userdata.data.data.user);
  return userdata.data.data.user;}
  else{
    return null;
  }
}

const User = (props) => {
  let navigate = useNavigate();

  const [open,setOpen]  = useState(false);
  let Token = localStorage.getItem("ACCESS_TOKEN")
  
  console.log(Token);
  if(Token==null){
    console.log("no!");
    return(
      <Content
      content={<>
      <Result
      icon={<MehOutlined style={{ color: '#EEC325' }} />}
      title="哦豁！没登录"
      extra={<Button onClick={() => {
        navigate("/login/1")
      }}>登录</Button>}
      />
      </>}
  />
    )}
    
  console.log(Token);
  const {data:userInfo,refetch,isLoading,isFetching} = useQuery(["user",Token],() => fetchUserInfo(Token),{enabled:false})
  useEffect(() => {
    refetch()
  },[])
  console.log(userInfo);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
 
   if(!isLoading&&!isFetching  ){
    console.log("yes!");
    console.log(userInfo);


      if(userInfo == undefined || userInfo == null || userInfo.id == 0){
        console.log("好崩溃啊！");
        return(
          <Content
          content={<>
          <Result
          icon={<MehOutlined style={{ color: '#EEC325' }} />}
          title="登陆已过期!"
          extra={<Button onClick={() => {
            navigate("/login/1")
          }}>登录</Button>}
          />
          </>}
          />)
      }
    // const {data,refetch} = useQuery(["user",userInfo.id],() => fetchUserInfo(userInfo.id));
    // console.log(data);
      const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );


    const userInfoColumn = [
        {
            title: '昵称',
            key: 'username',
            dataIndex: 'username',
            ellipsis: true,
        },
        {
            title: '个性签名',
            key: 'desc',
            dataIndex: 'desc',
            
        },
        {
            title: '性别',
            key: 'gender',
            dataIndex: 'gender',
            valueType: 'radio',
            valueEnum: {
                0: { text: '男'},
                1: { text: '女'},
            }           
        },
        {
            title: '生日',
            key: 'date',
            dataIndex: 'birthday',
            valueType: 'date',
          },
    ]

    
    // const actionRef = useRef();
    const handleChange = (info) => {
      console.log(info);
      // if (info.file.status === 'uploading') {
      //   setLoading(true);
      //   return;
      // }
      if (info.file.status === 'done') {
   
      setLoading(false);
      setImageUrl(info.file.response.data.url);
        axios.put(`/user/${userInfo.id}`,
        {
            avatar: info.file.response.data.url
        }
        ).then((res) => {
          if(res.data.state.ok) notification.success({message:"修改头像成功"})
          refetch();
        })
    }
    };
    const items = [
        {
            label: '个人信息',
            key: '1',
            children: (
                <>
                <div>
                <div style={{fontSize:"16px",fontWeight:"550",marginBottom:"5px"}}>修改头像</div>
                   <Upload
                name="file"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={true}
                style={{marginLeft:"100px"}}
                action={"http://127.0.0.1:8080/upload"}  
                onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' ,marginLeft:"5px"}} /> : uploadButton}
                 </Upload>
                </div>
          <ProDescriptions
            column={1}
            // actionRef={actionRef}
            // bordered
            formProps={{
              // onValuesChange: (e, f) => console.log(e),
            }}
            title="个人信息"
            
            dataSource={userInfo||{}}
            columns={userInfoColumn}
            editable={{
            type: 'single',
            onSave :  async (rowKey, data) => {
              console.log(data);
              console.log(rowKey);
              console.log(data[rowKey]);
           
              axios.put(`user/${userInfo.id}`,{
                username:data.username,
                desc:data.desc,
                gender:data.gender,
                birthday:data.birthday
              }).then(res =>{
                if(res.data.state.ok)
                notification.success({message:"修改个人信息成功"})
                refetch();
              })
            }
          }}
          >
          </ProDescriptions>
          <DangerousZone>
        <h1>危险！</h1>
          <Button danger style={{width:"60px", marginBottom:"10px"}} onClick={() =>{
            localStorage.removeItem("ACCESS_TOKEN")
            notification.success({message: '登出成功'})
            refetch();
          }}> 登出</Button>
          
          <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => {
            axios.delete('user'+userInfo.Id).then(response => {
              console.log(response.data.state.ok)
              if(response.data.state.ok) 
              notification.success({message: '删除成功'})
              localStorage.removeItem("ACCESS_TOKEN")
            })
            .then(refetch());}}
          // onCancel=
          okText="Yes"
          cancelText="No"
         
      >
          <Button danger style={{width:"90px"}} onClick={()=>{
          }}>注销用户</Button>
          </Popconfirm>
          </DangerousZone>
        </>
          )
        },
        {
            label: '我的收藏',
            key: '2',
            children: (<>
            {userInfo?.Passages.map((item,index) => (
            <Passagecard key={index} Pas = {item} />))
            }
            </>),
        },
        {
            label: '发出评论',
            key: '3',
            children:(
              <>
                {userInfo?.comments.map((item,index)=>(
                  <Commentcard comment = {item} key={index}/>
                ))}
              </>
            ),
        },
        {
            label: '站内信箱',
            key: '4',
            children: '开发中。。。',
        }

    ] 

  return (
    <Content
    content = {<UserWrapper>
    <UserinfoWrapper>
        <Useravatar src={userInfo?.avatar}/>
        <Userinfo>
            <div className='name'>{userInfo?.username}</div>
            <div>{userInfo?.desc||"这个人很懒，什么也没有留下"}</div>
        </Userinfo>
    </UserinfoWrapper>

       <Tabs
        type="card"
        items={items}
     />
    </UserWrapper>}
    />
  );
}
// if (userInfo==null) { 
//   return <Content
//   content={<>
//   <h1>没登陆!</h1>
//   {/* */}
//   <Button onClick={() => {
//     navigate("/login/1")
//   }}>去登录</Button>
//   </>}
//   />
// }
}


export default User;