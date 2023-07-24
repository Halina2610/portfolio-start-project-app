import React from 'react';
import styled from "styled-components";


type WorkPropsType = {
    title: string
    text: string
    src: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"http://project3041187.tilda.ws/"}>demo</Link>
            <Link href={"https://codepen.io/abmthzns-the-flexboxer/pen/oNaOJQX"}>code</Link>

        </StyledWork>
    );
};

const StyledWork = styled.div`
  width: 100%;
  max-width: 540px;
  background-color: #69f1f1;
`
const Image = styled.img`
  height: 260px;
  width: 100%;
  object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`

`
const Link = styled.a`

`

