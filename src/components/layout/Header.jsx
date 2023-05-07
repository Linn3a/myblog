import React from 'react';
import styled from 'styled-components';
import { SearchOutlined,BulbOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Menuitem = styled.div`
font-size: 18px;
font-weight: 400;
color: rgba(128, 128, 128, 1);
padding-left: 16px;
padding-right: 16px;
// background-color: blue;
display:flex;
justify-content:center;
flex-direction:column;
  cursor: pointer;

`

const Headerbutton = (props) => {
  const navigate = useNavigate();
  const { selected,setSelected,name } = props;

  const Bar = styled.button`
  width: 100%;
  height: 3px;
  border-radius: 5px;
  `
  return (
    <Menuitem>
    <button onClick={()=>{
      console.log(name);
      setSelected(name)
      navigate(name)
    }}>{name}</button>
    <Bar style={{backgroundColor:(selected==name)? "rgba(0, 186, 173, 1)":"white"}}/>
    </Menuitem>
  )
}
const Header = (props) => {
  const [selected,setSelected] = useState('')
  console.log(selected);
  const StyledHeader = styled.div`
  border-bottom: 1px solid rgba(229, 229, 229, 1);    
  width:100%;
  padding: 0;
  height: 60px;
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
     
          <Headerbutton selected={selected} setSelected={setSelected} name="home"/>
          <Headerbutton selected={selected} setSelected={setSelected} name="tag"/>
          <Headerbutton selected={selected} setSelected={setSelected} name="archives"/>
          <Menuitem><SearchOutlined /></Menuitem>
          <Menuitem><BulbOutlined /></Menuitem>
        </HeaderRight>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}

export default Header;