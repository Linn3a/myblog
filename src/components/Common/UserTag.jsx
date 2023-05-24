import React from 'react';
import styled from 'styled-components';

const UserTag = (props) => {
    const { color, name } = props;
    const UsersTag = styled.div`
        background-color: ${color};
        border-radius: 5px;
        padding:5px 8px;
        margin-left: 5px;
        // margin-top :-20px;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        z-index: 2;
    ` 
  return (
    <UsersTag>
        {name}
    </UsersTag>
  );
}


export default UserTag;