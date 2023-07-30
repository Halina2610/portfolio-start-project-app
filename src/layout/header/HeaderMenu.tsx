import React from "react";
import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <NavList>

                {props.menuItems.map((item, index) => {
                    return <NavListItem key={index}>
                        <NavLink href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </NavLink>
                    </NavListItem>
                })}

            </NavList>

        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    list-style: none;
    font-family: "Nunito Sans", sans-serif;
  }

`
const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;



const NavLink = styled.a<{ active?: boolean }>`
font-size: 25px;  
color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${Theme.colors.accent};
  
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const NavListItem = styled.li`
  margin-right: 20px;
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${Theme.colors.accent};
    border-radius: 20%;
    
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }
  
  &:hover {
    &::before {
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(5deg) translateX(5px);
color: ${Theme.colors.accentHover};
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`