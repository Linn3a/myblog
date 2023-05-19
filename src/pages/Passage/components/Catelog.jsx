import React from 'react';
import MarkNav from 'markdown-navbar';
import './navbar.css'
import tw from 'tailwind-styled-components';
// import 'markdown-navbar/dist/navbar.css';

import { catelogwrapper } from './Catelog.module.css';


const Catalogwrapper = tw.div`
  w-1/6
  fixed top-32 left-15 bottom-24
  rounded-md
  px-8 py-5
  bg-emerald-50
  hidden lg:block
  overflow-y-scroll

`
const Catalog = ({content}) => {


  return (
      <Catalogwrapper>
      <MarkNav
      className="article"
        headingTopOffset={80}
        source={content}
        ordered={false}
      />
    </Catalogwrapper>
  );
}


export default Catalog;