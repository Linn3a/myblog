import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import { useNavigate } from 'react-router-dom';

const Passagecardwarpper = styled.button`
    soutline:none;
    width:90%;
    margin:20px auto;
    border: 1px solid rgba(229,229,229,0.7);
    border-radius:10px;
    .title{
        padding-left:20px;
        padding-top:10px;
        padding-bottom:10px;
        margin:0;
        text-align:left;
        border-bottom:1px solid rgba(229,229,229,0.7);
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        h1{
            font-size:16px;
            font-weight:500;
        }
        .tags{
            margin:10px 10px;
            display: flex;
            flex-direction: row;
        }
    }
    :hover {
        box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.5);
        // transform: translate(0,-5px);
        transition-delay: 0s !important;
      }  
    .desc{
        font-size:14px;
        color:grey;
        padding:20px;
        text-align:left;
    }
`
const Passagecard = (props) => {
    const navigate = useNavigate();
    const {Pas} = props 
  return (
    <Passagecardwarpper onClick = {()=>{
        navigate(`/passage/${Pas.id}`)
        // navigate(`/passage`)
    }}>
        <div className='title'>
            <h1>{Pas.title}</h1>
            <div className='tags'>
           {Pas.tags.map((item,index) => (
                 <Tag key={index} name={item.name} color={item.color}/>
            ))}
        </div>
        </div>
        <div className='desc'>{Pas.desc}</div>
        
    </Passagecardwarpper>
  );
}

export default Passagecard;