import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const Button = styled.button`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 180px;
  height: 32px;
  border: 3px solid ${Theme.colors.accent};
  transition: 0.2s;
  
  &:hover {
    
    background: ${Theme.colors.accent};
    font-weight: 700;
  }
  

`