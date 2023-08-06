import React from "react";
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <NavList>
                {props.menuItems.map((item, index) => {
                    return <NavListItem key={index}>
                        <NavLink href="">{item}</NavLink>
                    </NavListItem>
                })}
            </NavList>

        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
  @media ${Theme.media.tablet} {
    display: none;
  }
  
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
  font-size: 22px;
  color: ${Theme.colors.textColor};

  &:hover {
    color: ${Theme.colors.accent};
    border-bottom: 3px solid ${Theme.colors.accent};
  }
`;


const NavListItem = styled.li`
  margin-right: 20px;
  position: relative;


 
`