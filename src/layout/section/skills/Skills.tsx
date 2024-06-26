import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {Table} from "./skill/Table";
import {SpanAccent} from "../../../components/spanAccent/SpanAccent";
import {Theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills id={"section2"}>
                <SectionTitle>Skills</SectionTitle>
                <ContainerSkills>
                    <Slide>
                        <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                            <Skill iconId={"html"}/>
                            <Skill iconId={"react"}/>
                            <Skill iconId={"css"}/>
                            <Skill iconId={"styled components"}/>
                            <Skill iconId={"vscode"}/>
                            <Skill iconId={"github"}/>
                            <Skill iconId={"typescript"}/>
                            <Skill iconId={"git"}/>
                            <Skill iconId={"js"}/>
                        </FlexWrapper>
                    </Slide>
                    <Slide>
                        <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                            <Skill iconId={"html"}/>
                            <Skill iconId={"react"}/>
                            <Skill iconId={"css"}/>
                            <Skill iconId={"styled components"}/>
                            <Skill iconId={"vscode"}/>
                            <Skill iconId={"github"}/>
                            <Skill iconId={"typescript"}/>
                            <Skill iconId={"git"}/>
                            <Skill iconId={"js"}/>
                        </FlexWrapper>
                    </Slide>
                </ContainerSkills>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`
const ContainerSkills = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  ${FlexWrapper} {
    width: 100%;
  }
  @media ${Theme.media.tablet} {
    grid-template-columns: 1fr
  }

`

const Slide = styled.div`
  padding: 20px 25px;

  @media ${Theme.media.tablet} {
    padding: 20px;
    margin: 0 auto;
    
  }
`


