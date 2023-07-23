import React from 'react';
import {Icons} from "../../../../components/icon/Icons";
import styled from "styled-components";



type SkillPropsType = {
    iconId: string
    title: string
    distription: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icons iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.distription}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`

`
const SkillTitle = styled.h3`
`
const SkillText = styled.p`

`