import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icons} from "../../../components/icon/Icons";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper>
                <Skill iconId={"css"} title={"CSS3"} distription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                    "sed do eiusmod tempor incididunt ut labore et dolore magna aliq"} />
                <Skill iconId={"html"} title={"HTML5"} distription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                    "sed do eiusmod tempor incididunt ut labore et dolore magna aliq"} />
                <Skill iconId={"typescript"} title={"TypeScript"} distription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #9cffff;
  min-height: 100vh;
`


