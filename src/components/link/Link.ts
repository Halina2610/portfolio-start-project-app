import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const Link = styled.a`
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 10px;
  margin-right: 20px;
  position: relative;

  &:hover {
    color: ${Theme.colors.accent};
    
    &::before {
      height: 0.2em;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    background-color: ${Theme.colors.accent};

    position: absolute;
    bottom: -5px;
    left: 10px;
    right: 10px;

  }
`;