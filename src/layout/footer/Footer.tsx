import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {SocialIconsList} from "../../components/SocialIconsList";
import {Container} from "../../components/Container";
import {GridWrapper} from "../../components/GridWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <GridWrapper templateColumns={"repeat(3, 1fr)"} justifyItems={"center"} gap={"20px"} alignItems={"center"}>
                    <Contacts>
                        <Contact><strong>Phone:</strong><a href={"tel:+375336774409"}>+375(33)677-44-09</a></Contact>
                        <Contact><strong>E-mail:</strong><a href="mailto:vievamaxa@gmail.com">vievamaxa@gmail.com</a></Contact>
                    </Contacts>
                    <SocialIconsList/>
                    <Copyright>© 2023 Halina Klyashtornaya, All Rights Reserved.</Copyright>
                </GridWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${Theme.colors.primaryBg};
  box-shadow: 0 0 10px rgba(145, 168, 241, 0.39);
  bottom: 0;


  ${GridWrapper} {
    @media ${Theme.media.tablet} {
      grid-template-columns: 1fr;
    }
  }
}
`



const Contacts = styled.div`
    
`

const Contact = styled.p`
    font-size: 12px;
  text-align: center;
  
`

const Copyright = styled.small`
  @media ${Theme.media.tablet} {
    font-size: 12px;
    text-align: center;
  }
`
