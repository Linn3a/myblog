import React,{useState} from 'react';
import styled from 'styled-components';
import Content from '../../components/layout/Content';
import { useRef } from 'react';
import { Tabs,Input, Tooltip,message, Upload,notification,Button } from 'antd';
import { ProDescriptions } from '@ant-design/pro-components';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
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
 
//     import React, { useState } from 'react';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import { message, Upload } from 'antd';
// import type { UploadChangeParam } from 'antd/es/upload';
// import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

// const getBase64 = (img: RcFile, callback: (url: string) => void) => {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result as string));
//   reader.readAsDataURL(img);
// };

// const beforeUpload = (file: RcFile) => {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// };

// const App: React.FC = () => {
//   const [loading, setLoading] = useState(false);
//   const [imageUrl, setImageUrl] = useState<string>();

//   const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
//     if (info.file.status === 'uploading') {
//       setLoading(true);
//       return;
//     }
//     if (info.file.status === 'done') {
//       // Get this url from response in real world.
//       getBase64(info.file.originFileObj as RcFile, (url) => {
//         setLoading(false);
//         setImageUrl(url);
//       });
//     }
//   };

//   const uploadButton = (
//     <div>
//       {loading ? <LoadingOutlined /> : <PlusOutlined />}
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </div>
//   );

//   return (
//     <>
//       <Upload
//         name="avatar"
//         listType="picture-card"
//         className="avatar-uploader"
//         showUploadList={false}
//         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//         beforeUpload={beforeUpload}
//         onChange={handleChange}
//       >
//         {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
//       </Upload>
//       <Upload
//         name="avatar"
//         listType="picture-circle"
//         className="avatar-uploader"
//         showUploadList={false}
//         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//         beforeUpload={beforeUpload}
//         onChange={handleChange}
//       >
//         {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
//       </Upload>
//     </>
//   );
// };

// export default App;

const fetchUserInfo = async (id) => {
  const {data}  = await axios.get(`/user/${id}`);
  return data.data.user;
}
const User = (props) => {
  let navigate = useNavigate();
  const { isLogin,setIsLogin,userInfo,setUserInfo } = useContext(UserContext);
  console.log(isLogin);
  console.log(userInfo);
  if(isLogin){
      const [imageUrl, setImageUrl] = useState('');
      const [loading, setLoading] = useState(false);
      
    const {data,refetch} = useQuery(["user",userInfo.id],() => fetchUserInfo(userInfo.id));
    console.log(data);
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

    const startedpas = [{
        title: '产后护理',
        desc:'产后护理的描述',
        pid: '1',
        key: '1',
        tags:[
          {
            key: '0',
            name:'养殖',
            color: 'green',
          },
          {
            key: '1',
            name:'产后',
            color: 'blue',
          }
        ]
    },{
        title: '随便什么',
        pid: '2',
        desc:'描述描述描述描述',
        key: '2',
        tags:[{
          key: '0',
          name:'随便',
          color: 'green',
        },{
          key: '1',
          name:'什么',
          color: 'blue',
        }]
    }
  ]

  const comments = [
    {
      ptitle:"产后护理",
      pid:"1",
      time:"2022-2-3",
      content:"受益匪浅"
    },
    {
      ptitle:"护理",
      pid:"2",
      time:"2022-2-3",
      content:"嘿嘿"
    }
  ]
    const actionRef = useRef();
    const handleChange = (info) => {
      // console.log(info);
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
          refetch;
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
            actionRef={actionRef}
            // bordered
            formProps={{
              onValuesChange: (e, f) => console.log(e),
            }}
            title="个人信息"
            
            dataSource={data||{}}
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
        </>
          )
        },
        {
            label: '我的收藏',
            key: '2',
            children: (<>
            {data?.Passages.map((item,index) => (
            <Passagecard key={index} Pas = {item} />))
            }
            </>),
        },
        {
            label: '发出评论',
            key: '3',
            children:(
              <>
                {data?.comments.map((item,index)=>(
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
        <Useravatar src={data?.avatar}/>
        <Userinfo>
            <div className='name'>{data?.username}</div>
            <div>{data?.desc||"这个人很懒，什么也没有留下"}</div>
        </Userinfo>
    </UserinfoWrapper>

       <Tabs
        // onChange={onChange}
        type="card"
        items={items}
     />
    </UserWrapper>}
    />
  );
}
else {
  return <Content
  content={<>
  <h1>没登陆!</h1>
  {/* */}
  <Button onClick={() => {
    navigate("/login/1")
  }}>去登录</Button>
  </>}
  />
}
}


export default User;