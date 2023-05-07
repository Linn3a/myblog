import  Header  from './Header';
import React from 'react';
import { Outlet } from "react-router"

const layout  = (props) => {

  return (
    <div style={{height:"85vh"}}>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default layout;