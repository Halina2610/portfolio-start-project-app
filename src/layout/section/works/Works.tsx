import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Work} from "./work/Work";
import {Menu} from "../../../components/menu/Menu";
import Project1 from "../../../assets/img/project1.webp"
import Project2 from "../../../assets/img/project2.webp"
import Project3 from "../../../assets/img/Umneyka.webp"


const workItems = ["All", "Landing page", "React", "Tilda"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={workItems}/>
            <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                <Work title={"A toy shop"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                      src={Project2}/>
                <Work title={"Clothing store"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                      src={Project1}/>
                <Work title={"Clothing store"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                      src={Project3}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
`

