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
  width: 30%;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
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

