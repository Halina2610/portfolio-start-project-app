import React from 'react';
import photo from '../../../assets/img/avatar.png'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import FonImage from "../../../assets/img/fon-bg.webp"

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi,</span>
                    <Name>I am Halina Klyashtornaya</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>
                <StyledPhoto src={photo} alt=""/>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background: url(${FonImage});
`

const StyledPhoto = styled.img`
  height: 50vh;
  object-fit: cover;
`

const MainTitle = styled.h1`

`
const Name = styled.h2`

`