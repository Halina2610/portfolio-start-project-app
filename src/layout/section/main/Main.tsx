import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import photo from "../../../assets/img/avatar.png";
import {SocialIconsList} from "../../../components/SocialIconsList";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {SpanAccent} from "../../../components/spanAccent/SpanAccent";

export const Main = () => {
    return (
        <StyledMain>
            <Container>

                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <SmallText>Hello, I'm </SmallText>
                        <Name><SpanAccent>Ha</SpanAccent>lina Klyashtornaya</Name>
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
  margin-top: 65px;
  background-color: ${Theme.colors.thirdBg};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
  @media ${Theme.media.tablet} {
    margin: 65px 0;
    padding: 20px;
    min-height: 100vh;
    
    ${FlexWrapper} {
    }
  }
`
const MainTitle = styled.h1`
  ${font({family: "'Nunito Sans', sans-serif", weight: 400, Fmax: 40, Fmin: 30 })}
  padding: 0 0 20px 0;
`
const Name = styled.h2`
  ${font({weight: 700, Fmax: 52, Fmin: 36})}
  letter-spacing: 0.06em;
  margin: 10px 0;
  padding: 20px 0;

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

const SmallText = styled.span`
  ${font({family: "'Nunito Sans', sans-serif", Fmax: 28, Fmin: 20})}
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
    
    @media ${Theme.media.mobile} {
      width: 310px;
      height: 310px;
      left: 5px;
    }
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
    left: 40px;
    z-index: -2;

    @media ${Theme.media.mobile}{
      display: none;
    }
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

  @media ${Theme.media.mobile}{
    width: 280px;
    height: 280px;
    margin: 0 auto;
  }
`

