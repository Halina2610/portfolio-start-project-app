import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
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
                        <SmallText>Hello, I'm </SmallText>
                        <Name><span>Ha</span>lina Klyashtornaya</Name>
                        <MainTitle>A Web Developer.</MainTitle>
                        <SocialIconsList/>
                    </div>
                    <PhotoWrapperTwo>
                        <PhotoWrapper>
                            <StyledPhoto src={photo} alt=""/>
                        </PhotoWrapper>
                    </PhotoWrapperTwo>
                </FlexWrapper>

            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${Theme.colors.thirdBg};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

`
const MainTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  padding: 0 0 20px 0;
  font-family: "Nunito Sans", sans-serif;
`
const Name = styled.h2`
  font-size: 52px;
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
      width: 100px;
      height: 100px;
      background-color: ${Theme.colors.accent};
      border-radius: 50%;

      position: absolute;
      bottom: -10px;
      left: -10px;
      z-index: -1;

    }
  }
`

const SmallText = styled.span`
  font-size: 28px;
  font-family: "Nunito Sans", sans-serif;

`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 399px;
    height: 399px;
    border-radius: 50%;
    background-color: ${Theme.colors.accent};

    position: absolute;
    top: -20px;
    left: 20px;
    z-index: -1;
  }

`
const PhotoWrapperTwo = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 449px;
    height: 449px;
    border-radius: 50%;
    border: 20px solid ${Theme.colors.accent};

    position: absolute;
    top: -40px;
    left: 20px;
    z-index: -2;
  }
`

const StyledPhoto = styled.img`

  width: 349px;
  height: 349px;
  border-radius: 230px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: 0.6em;
  margin-bottom: 1em;
  background-color: ${Theme.colors.thirdBg};
  margin-right: 120px;
`

