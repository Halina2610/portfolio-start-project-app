import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/button/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>Do you have an idea?</SectionTitle>
            <SectionTitle> I'm ready!</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
`