import React from 'react';
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";

const items = ["Home", "About me", "Skills", "Works",  "Contact"]


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`
