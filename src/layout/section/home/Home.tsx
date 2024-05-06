import React from 'react';
import styled, {keyframes} from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import photo from "../../../assets/img/avatar.png";
import {SocialIconsList} from "../../../components/SocialIconsList";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {SpanAccent} from "../../../components/spanAccent/SpanAccent";

export const Home = () => {
    return (
        <StyledHome id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <SmallText>Hello, I'm </SmallText>
                        <Name><SpanAccent>Ha</SpanAccent>lina Klyashtornaya</Name>
                        <MainTitle>Frontend Developer</MainTitle>
                        <SmallText>
                            I am fascinated by the magic of transforming
                        </SmallText>
                        <SmallText>
                            lines of code into beautiful apps we use everyday.
                        </SmallText>
                        <SocialIconsList/>
                    </div>
                    <PhotoWrapper2>
                        <PhotoWrapper1>
                            <PhotoWrapper>
                                <StyledPhoto src={photo} alt="Halina Kliashtornaya. Frontend developer"/>
                            </PhotoWrapper>

                        </PhotoWrapper1>
                    </PhotoWrapper2>
                </FlexWrapper>
            </Container>
        </StyledHome>
    );
};

const StyledHome = styled.div`
  display: flex;
  min-height: 100vh;
  margin-top: 65px;
  background-color: ${Theme.colors.thirdBg};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
  @media ${Theme.media.tablet} {
    margin: 65px 0;
    padding: 20px;
    min-height: 100vh;
    
  }
`
const MainTitle = styled.h1`
  ${font({family: "'Nunito Sans', sans-serif", weight: 400, Fmax: 40, Fmin: 30 })}
  padding: 0 0 20px 0;
  letter-spacing: 0.06em;

`
const Name = styled.h2`
  ${font({weight: 900, Fmax: 52, Fmin: 36})}
  letter-spacing: 0.06em;
  margin: 10px 0;
  padding: 20px 0;

  ${SpanAccent} {
    &::before {
      width: 85px;
      height: 85px;
      left: -25px;
    }
  }

  @media ${Theme.media.tablet} {
    margin: 15px 0 22px;
    ${SpanAccent} {
      &::before {
        width: 70px;
        height: 70px;
        left: -10px;
      }
    }
  }
`

const SmallText = styled.p`
  ${font({family: "'Nunito Sans', sans-serif", Fmax: 28, Fmin: 20})}
`

const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;
  
  &::before {
    content: "";
    width: 357px;
    height: 357px;
    border-radius: 50%;
    background-color: ${Theme.colors.thirdBg};
    position: absolute;
    top: -9px;
    left: -6px;
    z-index: -1;
  }
  
`

const PhotoWrapper1 = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 399px;
    height: 399px;
    border-radius: 50%;
    background-color: ${Theme.colors.accent};
    position: absolute;
    top: -30px;
    left: 30px;
    z-index: -1;
    animation: ${moveUpDown} 2s infinite;

    @media ${Theme.media.mobile} {
      width: 310px;
      height: 310px;
      left: 5px;
    }
  }
`;

const PhotoWrapper2 = styled.div`
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
    left: 40px;
    z-index: -2;
    animation: ${moveUpDown} 2s infinite;

    @media ${Theme.media.mobile} {
      display: none;
    }
    animation: ${moveUpDown} 2s infinite;
    animation-timing-function: ease-in-out;
`;

const StyledPhoto = styled.img`
  z-index: +1;
  width: 349px;
  height: 349px;
  border-radius: 230px;
`;

