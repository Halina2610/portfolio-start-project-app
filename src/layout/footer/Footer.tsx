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
                        <Contact><strong>Phone:</strong> +375(33)677-44-09</Contact>
                        <Contact><strong>E-mail:</strong> vievamaxa@gmail.com</Contact>
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  bottom: 0;
  min-height: 65px;

  @media ${Theme.media.tablet} {
    padding: 20px;
  }

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
  
`

const Copyright = styled.small`
  @media ${Theme.media.tablet} {
    font-size: 12px;
  }
`
