import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const Commentcard  = (props) => {
    const navigate = useNavigate();
    const {comment} = props
  return (
    <>
        <Card 
            hoverable
            title = {comment.ptitle}
            style={{margin:'20px 0'}}
            onClick={() => {
                navigate(`/passage`);
            }}
        >
            <Card.Meta 
                title = {comment.content}
                description = {comment.time}
            />
        </Card>
    </>
    // <Commentcardwarpper>
    //     <div className='title'>
    //         {comment.title}
    //     </div>
    //     <div className='content'>{comment.content}</div>
    //     <div className='time'> {comment.time}</div>
    // </Commentcardwarpper>
  );
}

export default Commentcard;
