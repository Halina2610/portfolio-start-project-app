import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {SocialIconsList} from "../../components/SocialIconsList";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>

                    <Content>
                        <Contacts><strong>Phone:</strong> +375(33)677-44-09</Contacts>
                        <Contacts><strong>E-mail:</strong> vievamaxa@gmail.com</Contacts>
                    </Content>
                    <Content>
                        <Copyright>© 2023 Halina Klyashtornaya, All Rights Reserved.</Copyright>
                    </Content>
                    <Content>
                        <SocialIconsList/>
                    </Content>

                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${Theme.colors.primaryBg};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: 40px 0 0;

`
const Content = styled.div`
  width: calc(33% - 20px);


`
const Contacts = styled.p`
font-size: 14px;
`

const Copyright = styled.small`
  margin: 0 auto;
  font-size: 14px;
  

`