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
                            <Skill iconId={"css"}/>
                            <Skill iconId={"react"}/>
                            <Skill iconId={"html"}/>
                            <Skill iconId={"git"}/>
                            <Skill iconId={"github"}/>
                            <Skill iconId={"styled components"}/>
                            <Skill iconId={"js"}/>
                            <Skill iconId={"typescript"}/>
                            <Skill iconId={"vscode"}/>
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
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  margin-left: 50px;
`

const Slide = styled.div`
  flex-basis: 40% 60%;
  padding: 10px 40px;
`
const StyledTitleTable = styled.h3`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
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
      width: 70px;
      height: 70px;
      background-color: ${Theme.colors.accent};
      border-radius: 50%;

      position: absolute;
      bottom: -10px;
      left: -10px;
      z-index: -1;

    }
  }
`

