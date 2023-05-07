import React from 'react';
import MarkNav from 'markdown-navbar';
import './navbar.css'
// import 'markdown-navbar/dist/navbar.css';

import { catelogwrapper } from './Catelog.module.css';

const Catalog = ({content}) => {

  return (
    <div className={catelogwrapper}>
      <MarkNav
    //   className={marknav}
      className="article"
        headingTopOffset={80}
        source={content}
        ordered={false}
      />
    </div>
  );
}


export default Catalog;