import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle><span>Do</span> you have an idea?</SectionTitle>
                <Button><a href={"https://t.me/halina_kls"} target={"-blanc"}>my telegram</a></Button>
                </FlexWrapper>
            </Container>

        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  /*background-color: ${Theme.colors.thirdBg};*/
  
  ${SectionTitle} {
  text-transform: none;
  
}
  
    span {
      position: relative;
      color: ${Theme.colors.secondaryBg};
      z-index: 1;
      
      &::after {
        content: "";
        background-color: ${Theme.colors.accent};
        height: 90px;
        width: 90px;
        border-radius: 50%;
        
        position: absolute;
        bottom: -10px;
        left: -20px;
        z-index: -1;
      }
    }
  
`