import React from 'react';
import styled from 'styled-components';
import { card } from './Catecard.module.css';
import { useNavigate } from 'react-router-dom';
import Tag from '/src/components/Common/Tag';
import tw from 'tailwind-styled-components';

// .card {
//     border: 1px solid rgba(14, 146, 122, 1);
//     border-radius: 20px;
//     height: 200px;
//     width: 100%;
//     margin: 20px 0;
//     padding: 20px;
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
    
// }
// .card:hover {
//     box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
//     /* transform: translate(0,-5px); */
//     transition-delay: 0s !important;
//   }  
const Cardwrapper = tw.div`
    border-solid border-2
    rounded-2xl
    w-full md:w-9/12
    my-5
    p-5
    flex 
    flex-col md:flex-row
    justify-start
    hover:shadow-lg z-10
`
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
    <Cardwrapper>
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

    </Cardwrapper>
  );
}


export default Catecard;