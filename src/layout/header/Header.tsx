import React from 'react';
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";

const items = ["Home", "Skills", "Works", "Testumony", "Contact"]


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background: #1f1f1f;
  color: #f7f3ef;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

