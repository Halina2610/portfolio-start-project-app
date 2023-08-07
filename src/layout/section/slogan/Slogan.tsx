import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";
import {SpanAccent} from "../../../components/spanAccent/SpanAccent";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle><SpanAccent>Do</SpanAccent> you have an idea?</SectionTitle>
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
  ${SpanAccent} {
    &::before {
      width: 85px;
      height: 85px;
      left: -20px;
    }
  }
 
  
`