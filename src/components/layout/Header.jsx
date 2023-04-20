import React from 'react';
import styled from 'styled-components';
import { SearchOutlined,BulbOutlined } from '@ant-design/icons';

const Header = (props) => {
  const StyledHeader = styled.div`
  border-bottom: 1px solid rgba(229, 229, 229, 1);    
  height: 63px;
  display:flex;
  justify-content:center;
  `
  const StyledHeaderContainer = styled.div`
  padding-top: 8px;
  width:80%;
  height:100%;
  // background-color: red;
  display:flex;
  justify-content:space-between;
  flex-direction:row;
  `
  const HeaderLeft = styled.div`
  // background-color: blue;
  display:flex;
  justify-content:space-between;
  flex-direction:row;
  align-items:center;
  `
  const HeaderRight = styled.div`
  // background-color: green;
  display:flex;
  justify-content:space-between;
  flex-direction:row;
  align-items:center;
  `
  const Menuitem = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  padding-left: 16px;
  padding-right: 16px;
  `
  const Owner = styled.div`
  color: black;
  font-size: 24px;
  // text-align: baseline;
  font-weight: 700;
  padding-left: 8px;
  padding-right: 8px;

  `
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <HeaderLeft>
        <Owner>🌕</Owner>
        <Owner>Linnea</Owner>
        </HeaderLeft>
        <HeaderRight>
          <Menuitem>Home</Menuitem>
          <Menuitem>Tag</Menuitem>
          <Menuitem>Archives</Menuitem>
          <Menuitem><SearchOutlined /></Menuitem>
          <Menuitem><BulbOutlined /></Menuitem>
        </HeaderRight>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}

export default Header;