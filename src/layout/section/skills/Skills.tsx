import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {Table} from "./skill/Table";
import {Theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper>
                    <Slide>
                        <StyledTitleTable><span>Edu</span>cation</StyledTitleTable>
                        <Table/>
                    </Slide>
                    <Slide>
                        <Content>
                            <Skill iconId={"html"}/>
                            <Skill iconId={"react"}/>
                            <Skill iconId={"css"}/>
                            <Skill iconId={"styled components"}/>
                            <Skill iconId={"vscode"}/>
                            <Skill iconId={"github"}/>
                            <Skill iconId={"typescript"}/>
                            <Skill iconId={"git"}/>
                            <Skill iconId={"js"}/>
                        </Content>

                    </Slide>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Slide = styled.div`
  padding: 20px 40px;
`
const StyledTitleTable = styled.h3`
  letter-spacing: 0.06em;
  margin: 10px 0;
  padding: 20px 0;

  span {
    position: relative;
    z-index: 0;
    color: ${Theme.colors.secondaryBg};

    &::before {
      content: "";
      display: inline-block;
      width: 60px;
      height: 60px;
      background-color: ${Theme.colors.accent};
      border-radius: 50%;

      position: absolute;
      bottom: -10px;
      left: -10px;
      z-index: -1;

    }
  }
`

