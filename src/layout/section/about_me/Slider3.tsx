
import React from 'react';
import styled from "styled-components";

export const Slider3 = () => {
    return (
        <StyledSlider>
            <Slide>
                <Content>
                    <Place>Uhachi Regional Executive Committet</Place>
                    <Description>Education department specialist, 2016 - 2022</Description>
                </Content>
                <Content>
                    <Place>Self-employment</Place>
                    <Description>Since 2020 I have been developing my small business</Description>
                </Content>
            </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
min-height: 50vh;
  border: 1px solid black;
`
const Slide = styled.div`

`

const Content = styled.div`

`
const Place = styled.h3`
`
const Description = styled.p`

`