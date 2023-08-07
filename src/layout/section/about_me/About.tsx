import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Button} from "../../../components/button/Button";
import {Container} from '../../../components/Container';
import {SpanAccent} from "../../../components/spanAccent/SpanAccent";


export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>About me</SectionTitle>
            <ContainerAbout>

                <Slide>
                    <StyledTitleAbout><SpanAccent>Ha</SpanAccent>lina Klyashtornaya</StyledTitleAbout>
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
                        <List><strong>Birthday:</strong> 26th october 1992</List>
                        <List><strong>Age:</strong> 30</List>
                        <List><strong>Residence:</strong> Belarus</List>
                        <List><strong>Address:</strong> Ushachi, Vitebsk region, Belarus</List>
                        <List><strong>E-mail:</strong> vievamaxa@gmail.com</List>
                        <List><strong>Phone:</strong> +375(33)677-44-09</List>
                        <List><strong>Telegram: </strong><a href={"https://t.me/halina_kls"}
                                                        target={"_blanc"}>@halina_kls</a></List>
                        <List><strong>Remote work:</strong> Available</List>
                        <List><strong> languages: </strong> English (A1), Russian, Belarusian</List>
                    </StyledList>
                </Slide>
                <Button>Download <strong>CV</strong></Button>
            </ContainerAbout>

        </StyledAbout>

    )
        ;
};
const StyledAbout = styled.section`
  ${Button} {
    margin: -20px auto 0;

  }
`
const ContainerAbout = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${Theme.media.tablet} {
    grid-template-columns: 1fr
  }
`

const StyledTitleAbout = styled.h3`
  padding: 10px 0;
  
  ${SpanAccent} {
    &::before {
      left: -20px;
    }
  }
`

const Text = styled.p`
  padding: 10px;
  margin-top: 20px;
  text-align: justify;
`

const Slide = styled.div`
  margin: 40px auto;
  padding: 20px;
  

  @media ${Theme.media.tablet} {
    padding: 10px;
    margin: 0 auto;

  }

`
const StyledList = styled.ul`

`
const List = styled.li`
  font-size: 20px;
  padding: 10px;
  border-left: 2px solid ${Theme.colors.accent};
  border-bottom: 2px solid ${Theme.colors.primaryBg};
`