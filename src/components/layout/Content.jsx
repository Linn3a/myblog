import React from 'react';

const Content = (props) => {
  return (
    <div>
      <div className= "bg-sky-300">{props.left}</div>
      <div className="bg-rose-300">{props.right}</div>
    </div>
  )
}

export default Content