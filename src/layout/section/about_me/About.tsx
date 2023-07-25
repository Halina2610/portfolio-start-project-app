import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Slider2} from "./Slider2";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Slider3} from "./Slider3";

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper>

            <SectionTitle>About me</SectionTitle>

                <Text>
                    According to the Bureau of Labor Statistics, the average person changes jobs 12.4
                    times between the ages of 18 and 54. That’s a lot!
                </Text>
                <Text>
                    I am a historian, mother of two children and I study programming
                    languages. Becoming a developer is my goal for the next year.
                    Oh yes, I am 30 years old and I believe that everything is possible!
                </Text>

                <SectionTitle>Places of Study</SectionTitle>
                <Slider2/>

                <SectionTitle>Work Experience</SectionTitle>
                <Slider3/>
            </FlexWrapper>



        </StyledAbout>
    );
};
const StyledAbout = styled.section`
  background-color: #d8e0f8;
  min-height: 100vh;
`
const Text = styled.p`
  font-size: 2rem;
`