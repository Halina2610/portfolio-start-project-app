import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 44px;
  font-weight: 600;
  letter-spacing: 5px;
  margin-bottom: 90px;
  font-family: "Nunito Sans", sans-serif;

  
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    width: 100px;
    height: 2px;
    background-color: ${Theme.colors.accent};
    
    position: absolute;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
    
    
  }
`