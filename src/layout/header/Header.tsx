import React from 'react';
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background: #B3EFFD;
  display: flex;
  justify-content: space-between;
`

