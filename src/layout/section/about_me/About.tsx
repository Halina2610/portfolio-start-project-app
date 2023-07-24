import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Slider} from "./Slider";

export const About = () => {
    return (
        <StyledAbout>
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
            <SectionTitle>Work Experience</SectionTitle>
            <Slider/>
            <SectionTitle>Places of Study</SectionTitle>
            <Slider/>


           {/* <Text>
                Uhachi Regional Executive Committet, education department specialist, 2016 - 2022
            </Text>
            <Text>
                IT-Incubator
            </Text>
            <TextMin> Courses of study, Front-end Developer (ReactJS), 02.2023 - present</TextMin>
            <Text>Polack State University</Text>
            <TextMin>
                Historian, teacher of humanitarian disciplines, 2011 - 2017, Republic of Belarus
            </TextMin>*/}

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
const TextMin = styled.p`
  font-size: 1rem;

`