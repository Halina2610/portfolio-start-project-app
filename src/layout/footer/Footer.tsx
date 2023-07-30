import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {SocialIconsList} from "../../components/SocialIconsList";

export const Footer = () => {
    return (
        <StyledFooter>
            <SocialIconsList/>
            <Copyright>© 2023 Halina Klyashtornaya, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${Theme.colors.primaryBg};
`


const Copyright = styled.small`

`