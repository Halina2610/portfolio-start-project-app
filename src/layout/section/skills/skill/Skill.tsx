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
  width: 30%;
  padding: 50px;
  background-color: ${Theme.colors.primaryBg};
  border-radius: 50%;
  margin: 5px;
  
  
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-radius: 50%;
  }
`
