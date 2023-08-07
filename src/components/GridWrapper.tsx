import styled from "styled-components";

type GridWrapperPropsType = {
    templateColumns?: string
    gap?: string
    justifyItems?: string
    alignItems?: string
}


export const GridWrapper = styled.div<GridWrapperPropsType>`
  display: grid;
  grid-template-columns: ${props => props.templateColumns || "none"};
  grid-gap: ${props => props.gap || "0"};
  justify-items: ${props => props.justifyItems || "stretch"};
  align-items: ${props => props.alignItems ||"stretch"};
  

`