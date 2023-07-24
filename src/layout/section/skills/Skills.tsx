import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"stretch"}>
                <Skill iconId={"css"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"html"}/>
                <Skill iconId={"git"}/>
                <Skill iconId={"github"}/>
                <Skill iconId={"styled components"}/>
                <Skill iconId={"js"}/>
                <Skill iconId={"typescript"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #9cffff;
  min-height: 100vh;

`


