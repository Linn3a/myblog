import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useState } from 'react';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import Passage from './pages/Passage/Passage';
const queryClient = new QueryClient();

const App = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "张三",
  });
  const [selected, setSelected] = useState("");
  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route
        path="/login"
        element={<Login/>}
      />

      <Route 
          path="/" 
          element={<Layout selected={selected}/>} 
        >
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
          />
        </Route>
    </Routes>
    </QueryClientProvider>
  );
}

export default App;