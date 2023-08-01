import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Button} from "../../../components/button/Button";

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>About me</SectionTitle>
            <ContainerAbout>

                <Slide>
                    <StyledTitleAbout><span>Ha</span>lina Klyashtornaya</StyledTitleAbout>
                    <Text>
                        I am a historian, mother of two children, studying front-end development.
                        My goal for next year is to become a developer.
                    </Text>
                    <Text>
                        I'm already learning HTML, CSS, and JavaScript and plan to delve into
                        React and Vue.js to build complex web applications.
                    </Text>
                    <Text>
                        Although the journey will require effort and self-study,
                        I am determined to fulfill my dream and contribute to the world
                        of technology.
                    </Text>

                </Slide>
                <Slide>

                    <StyledList>
                        <List><span>Birthday:</span> 26th october 1992</List>
                        <List><span>Age:</span> 30</List>
                        <List><span>Residence:</span> Belarus</List>
                        <List><span>Address:</span> Ushachi, Vitebsk region, Belarus</List>
                        <List><span>E-mail:</span> vievamaxa@gmail.com</List>
                        <List><span>Phone:</span> +375(33)677-44-09</List>
                        <List><span>Telegram: </span><a href={"https://t.me/halina_kls"} target={"_blanc"}>@halina_kls</a></List>
                        <List><span>Remote work:</span> Available</List>
                        <List><span> languages: </span> English (A1), Russian, Belarusian</List>
                    </StyledList>
                </Slide>

            </ContainerAbout>
            <Button>Download CV</Button>

        </StyledAbout>

    )
        ;
};
const StyledAbout = styled.section`

`
export const ContainerAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1170px;
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  margin: 0 auto;
  /*outline: 1px solid red;*/

`
const StyledTitleAbout = styled.h3`
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 10px 0;

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
      left: -25px;
      z-index: -1;

    }
  }
`
const Text = styled.p`
  font-size: 20px;
  padding: 10px;
  margin-top: 20px;
  text-align: justify;
`

const Slide = styled.div`
  padding: 20px;
  margin: 40px 40px 40px 50px;
`
const StyledList = styled.ul`
`
const List = styled.li`
  font-size: 20px;
  padding: 10px;
  border-left: 2px solid ${Theme.colors.accent};
  border-bottom: 2px solid ${Theme.colors.primaryBg};

  span {
    font-weight: bold;
  }
`