import React from 'react';
import {Icons} from "../../../../components/icon/Icons";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Theme} from "../../../../styles/Theme";



type SkillPropsType = {
    iconId: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper justify={"center"} align={"center"}>
              <Icons iconId={props.iconId}/>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 25%;
  padding: 10px;
  margin: 30px 10px;
  
  &:hover{
    outline: 2px solid ${Theme.colors.accent}
  }
`