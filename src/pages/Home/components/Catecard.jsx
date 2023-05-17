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
    `
    const CateTitle = styled.div`
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
    flex-direction: row;

    `
 
    const { data } = props;
    console.log(data);
  return (
    <button className={card}
    onClick={()=>{
        navigate(`/cate/${data.id}`)
        }}>
        <Cateimg src = {data.cover}/>
        <CateContent>
        <CateTitle>{data.name}</CateTitle>
        <TagContainer>
            {data.tags.map((item,index) => {
                return <Tag key={index} name={item.name} color={item.color} id={item.id}/>
            })}
        </TagContainer>
        </CateContent>

    </button>
  );
}


export default Catecard;