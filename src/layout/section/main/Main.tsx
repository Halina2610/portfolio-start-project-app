import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import FonImage from "../../../assets/img/fon-bg.webp"
import {Container} from "../../../components/Container";
import photo from "../../../assets/img/avatar.png";
import {SocialIconsList} from "../../../components/SocialIconsList";
import {Theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>

                    <FlexWrapper align={"center"} justify={"space-between"}>
                        <div>
                            <SmallText>Hello,</SmallText>
                            <Name>I'm <span>Halina Klyashtornaya</span></Name>
                            <MainTitle>A Web Developer.</MainTitle>
                            <SocialIconsList/>
                        </div>
                        <StyledPhoto src={photo} alt=""/>
                    </FlexWrapper>

            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${Theme.colors.primaryBg};
  background: url(${FonImage});
`
const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;

`
const Name = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-size: 58px;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin: 10px 0;
  
  span {
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${Theme.colors.accent};
      
      position: absolute;
      bottom: 0;
      z-index: -1;
      
    }
  }
`

const SmallText = styled.span`
  font-size: 28px;

`

const StyledPhoto = styled.img`

  width: 349px;
  height: 349px;
  border-radius: 230px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: 0.6em;
  margin-bottom: 1em;
`

