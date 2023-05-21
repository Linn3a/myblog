import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import {timeParser} from '/src/utils/utils.js';

const Commentcard  = (props) => {
    const navigate = useNavigate();
    const {comment} = props
  return (
    <>
        <Card 
            hoverable
            title = {comment.title}
            style={{margin:'20px 0'}}
            onClick={() => {
                navigate(`/passage/${comment.passage_id}`);
            }}
        >
            <Card.Meta 
                title = {comment.content}
                description = {timeParser(comment.created_at)}
            />
        </Card>
    </>
    
  );
}

export default Commentcard;
