import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import { useNavigate } from 'react-router-dom';

const Passagecardwarpper = styled.button`
    outline:none;
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
        @media (max-width: 768px) {
            flex-direction:column;
            padding:10px;
          }
        h1{
            font-size:16px;
            font-weight:500;
        }
        .tags{
            margin:10px 10px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
    :hover {
        box-shadow: 5px 5px 5px rgba(48, 55, 66, 0.4);
        // transform: translate(0,-5px);
        z-index: 1;
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
                 <Tag key={index} name={item.name} color={item.color} id={item.id}/>
            ))}
        </div>
        </div>
        <div className='desc'>{Pas.desc}</div>
        
    </Passagecardwarpper>
  );
}

export default Passagecard;