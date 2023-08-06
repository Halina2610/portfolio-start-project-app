import React from 'react';
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";
import {HeaderMenu} from "./HeaderMenu";
import {MobileMenu} from "./MobileMenu";

const items = ["Home", "About me", "Skills", "Works", "Contact"]


export const Header = () => {
    return (

        <StyledHeader>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <Logo/>
                    <MobileMenu menuItems={items}/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>

            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${Theme.colors.primaryBg};
  z-index: 9999;

  @media ${Theme.media.tablet} {
    ${Container} {
      margin-left: 0;
      max-width: 100vw;
    }
    @media ${Theme.media.mobile} {
      ${Container} {
        margin-left: 0;
        max-width: 100vw;
      }
  }
`
