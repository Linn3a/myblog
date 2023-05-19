import React from 'react';
import styled from 'styled-components';
import { card } from './Catecard.module.css';
import { useNavigate } from 'react-router-dom';
import Tag from '/src/components/Common/Tag';


const Catecard = (props) => {
    const navigate = useNavigate();
    const Cateimg = styled.img`
        width: 160px;
        height: 160px;
        border-radius: 20px;
        cursor: pointer;
    `
    const CateTitle = styled.button`
        outline: none;
        align-self: flex-start;
        font-size: 30px;
        font-weight: 600;
    `
    const CateContent = styled.div`

        margin-left: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `
    const TagContainer = styled.div`
    display: flex;
    // margin: 10px 0px;
    flex-direction: row;
    flex-wrap: wrap;
    `
 
    const { data } = props;
    console.log(data);
  return (
    <div className={card}>
        <Cateimg src = {data.cover}  onClick={()=>{
        navigate(`/cate/${data.id}`)
        }}/>
        <CateContent>
        <CateTitle  onClick={()=>{
        navigate(`/cate/${data.id}`)
        }}>{data.name}</CateTitle>
        <TagContainer>
            {data.tags.map((item,index) => {
                return <Tag key={index} name={item.name} color={item.color} id={item.id}/>
            })}
        </TagContainer>
        </CateContent>

    </div>
  );
}


export default Catecard;