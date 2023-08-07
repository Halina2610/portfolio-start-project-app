import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Work} from "./work/Work";
import {TabMenu} from "./work/TabMenu";
import Project1 from "../../../assets/img/project1.webp"
import Project2 from "../../../assets/img/project2.webp"
import Project3 from "../../../assets/img/Umneyka.webp"
import Project4 from "../../../assets/img/project4.webp"
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

const workItems = ["All", "Landing page", "React", "Tilda"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Container>
                <TabMenu menuItems={workItems}/>
                <GridStyledWork>



                        <Work title={"Clothing store"}
                              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                              src={Project2}
                              hrefDemo={"#"}
                              hrefCode={"#"}/>

                        <Work title={"Clothing store"}
                              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                              src={Project1}
                              hrefDemo={"#"}
                              hrefCode={"#"}/>

                        <Work title={"A toy shop"}
                              text={"The project of a toy store website for a portfolio was created on Tilda with a unique and attractive design, optimized for viewing on any device, and provides convenient search and filtering functions for products, as well as order processing."}
                              src={Project3}
                              hrefDemo={"#"}
                              hrefCode={"#"}/>

                        <Work title={"Clothing store"}
                              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                              src={Project4}
                              hrefDemo={"#"}
                              hrefCode={"#"}/>

                </GridStyledWork>
            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
`

const GridStyledWork = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media ${Theme.media.tablet} {
    grid-template-columns: 1fr
  } 
`;