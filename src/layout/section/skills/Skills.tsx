import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-around"} align={"stretch"}>
                <Container>
                    <Skill iconId={"css"}/>
                    <Skill iconId={"react"}/>
                    <Skill iconId={"html"}/>
                    <Skill iconId={"git"}/>
                    <Skill iconId={"github"}/>
                    <Skill iconId={"styled components"}/>
                    <Skill iconId={"js"}/>
                    <Skill iconId={"typescript"}/>
                    <Skill iconId={"vscode"}/>
                </Container>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  min-height: 100vh;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`;
