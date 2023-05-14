import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ConfigProvider } from 'antd';
import { useState,createContext } from 'react';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import Passage from './pages/Passage/Passage';
import User from './pages/User/User';
import Cate  from './pages/Cate/Cate';
const queryClient = new QueryClient();

const UserContext = createContext({
  isLogin:false,
  setIsLogin: () => {},
  userInfo:   {},
  setUserInfo: () => {},
})

const App = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    avatar: "",
  });
  const [selected, setSelected] = useState("");
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#9BCFBA',
      },
    }}
  >
    <QueryClientProvider client={queryClient}>
    <UserContext.Provider value={{
      isLogin: isLogin,
      setIsLogin: setIsLogin,
      userInfo: userInfo,
      setUserInfo: setUserInfo}}>
    <Routes>
      <Route
        path="/login"
        element={<Login/>}
      >
        <Route
        path=":activeKey"
        element={<Login/>}
      />
        </Route>

      <Route 
          path="/" 
          element={<Layout selected={selected}/>} 
        >
          <Route path='/'  element={<Welcome  isLogin={isLogin} userInfo={userInfo}/>} />
          <Route
            path="home"
            element={<Home />}
          />
          <Route
            path="welcome"
            element={<Welcome  isLogin={isLogin} userInfo={userInfo}/>}
          />
         <Route
            path='passage'
            element={<Passage/>}
          >
            <Route path=":id" element={<Passage/>} />
            </Route>
          <Route
            path='user'
            element={<User/>}
          />
          <Route
            path='cate'
            element={<Cate/>}
          >
            <Route
              path=':id'
              element={<Cate/>}
              />  
          </Route>
          
        </Route>
    </Routes>
    </UserContext.Provider>
    </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
export {UserContext};