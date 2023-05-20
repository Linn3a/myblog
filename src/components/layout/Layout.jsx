import  Header  from './Header';
import React from 'react';
import { Outlet } from "react-router"

const layout  = (props) => {

  return (
    <div style={{width:"100vw", height:"100vh"
    // ,overflowY:"scroll"
    }}>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default layout;