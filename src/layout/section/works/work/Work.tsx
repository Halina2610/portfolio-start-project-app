import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/link/Link";
import {Button} from "../../../../components/button/Button";


type WorkPropsType = {
    title: string
    text: string
    src: string
    hrefDemo: string
    hrefCode: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
            <Button>view project</Button>
            </ImageWrapper>

            <Content>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={props.hrefDemo}>Demo</Link>
                <Link href={props.hrefCode}>Code</Link>
            </Content>


        </StyledWork>
    );
};

const StyledWork = styled.div`
  margin: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  background-color: ${Theme.colors.primaryBg};

`

const Image = styled.img`
  height: 260px;
  width: 100%;
  object-fit: cover;
  padding: 20px 25px 0;

`

const ImageWrapper = styled.div`
  position: relative;
  transition: 0.2s;

  &:hover{
    ${Button}{
      opacity: 1;
      
    }
    
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0 0 0 0.5);
      backdrop-filter: blur(4px);
      
    }
  }
  
  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    
    background-color: ${Theme.colors.accent};
    font-weight: 700;
  }
`


const Content = styled.div`
    padding: 20px 20px;
    
`

const Title = styled.h4`
`

const Text = styled.p`
  margin: 10px 0 ;
  text-align: justify;
  letter-spacing: 0.06em;
  

`


