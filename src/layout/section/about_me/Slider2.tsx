import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Slider2 = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Content>
                        <Place>Polack State University</Place>
                        <Description>Historian, teacher of humanitarian disciplines, 2011 - 2017, Republic of
                            Belarus</Description>
                    </Content>
                    <Content>
                        <Place>IT-Incubator</Place>
                        <Description>Courses of study, Front-end Developer (ReactJS), 02.2023 - present</Description>
                    </Content>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  min-height: 50vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Slide = styled.div`

`

const Content = styled.div`

`
const Place = styled.h3`
`
const Description = styled.p`

`
const Pagination = styled.span`
  span {
display: inline-block;
    width: 20px;
    height: 3px;
    margin: 2px;
    background-color: blue;
  }
`