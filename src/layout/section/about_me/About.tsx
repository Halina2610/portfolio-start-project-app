import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Container} from '../../../components/Container';
import {SpanAccent} from "../../../components/spanAccent/SpanAccent";
import {Button} from "../../../components/button/Button";
import {Table} from "../skills/skill/Table";


export const About = () => {
    return (
        <StyledAbout id={'section1'}>
            <SectionTitle>About me</SectionTitle>
            <ContainerAbout>

                <Slide>
                    <StyledTitleTable><SpanAccent>Edu</SpanAccent>cation</StyledTitleTable>
                    <Table/>
                </Slide>

                <Slide>
                    <StyledList>
                        <List><strong>Birthday:</strong> 26th october 1992</List>
                        <List><strong>Residence:</strong> Belarus</List>
                        <List><strong>Address:</strong> Ushachi, Vitebsk region, Belarus</List>
                        <List><strong>E-mail:</strong> klastornaagalina@gmail.com</List>
                        <List><strong>Phone:</strong> +375(33)677-44-09</List>
                        <List><strong>Telegram: </strong><a href={"https://t.me/halina_kls"}
                                                        target={"_blanc"}>@halina_kls</a></List>
                        <List><strong>Remote work, relocation:</strong> Available</List>
                        <List><strong> languages: </strong> English (A1), Russian, Belarusian</List>
                    </StyledList>
                    <Button>Download CV</Button>
                </Slide>

            </ContainerAbout>

        </StyledAbout>

    )
        ;
};
const StyledAbout = styled.section`
  ${Button} {
    font-weight: 700;
    margin-top: 20px;
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



const Slide = styled.div`
  margin: 40px auto;
  padding: 20px;

  @media ${Theme.media.tablet} {
    padding: 10px;
    margin: 0 auto;

  }
  @media ${Theme.media.mobile} {
    width: 100% ;
    
  }
`
const StyledList = styled.ul`
  margin-top: 40px;
  border-left: 2px solid ${Theme.colors.accent};
`

const List = styled.li`
  font-size: 20px;
  padding: 10px;
  border-bottom: 2px solid ${Theme.colors.primaryBg};
`

const StyledTitleTable = styled.h3`
  padding-bottom: 20px;

  ${SpanAccent} {
    &::before {
      left: -5px;
    }
  }
`