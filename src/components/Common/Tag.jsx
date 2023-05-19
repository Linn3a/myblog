import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
/*
    {
        name:
        color:
    }
*/
const Tag = (props) => {
    let navigate = useNavigate();
    const Tagitem = styled.button`
        outline: none;
        background-color: ${props.color};
        border-radius: 5px;
        padding:5px 8px;
        margin: 10px 10px;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
    `
    return (<Tagitem onClick={() => {
        navigate(`/tag/${props.id}`)
    }}>{props.name}</Tagitem>)
}

export default Tag;