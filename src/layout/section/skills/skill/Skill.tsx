import React from 'react';
import {Icons} from "../../../../components/icon/Icons";
import styled from "styled-components";



type SkillPropsType = {
    iconId: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icons iconId={props.iconId}/>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  margin: 10px;
  width: 20%;
`
