import React from 'react';
import styled from 'styled-components';

/*
    {
        name:
        color:
    }
*/
const Tag = (props) => {
    const Tagitem = styled.div`
        background-color: ${props.color};
        border: 1px solid rgba(0, 0, 0, 0.5);
        box-shadow:5px 5px 10px rgba(0,0,0,0.2);
        border-radius: 10px;
        height: 40px;
        padding:4px 8px;
        margin: 0 10px;
        font-size: 16px;
        text-align: center;
    `
    return (<Tagitem>{props.name}</Tagitem>)
}

export default Tag;