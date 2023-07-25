import React from "react";
import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <NavList>

                {props.menuItems.map((item,index) => {
                    return <NavListItem key={index}>
                        <NavLink href="">{item}</NavLink>
                    </NavListItem>
                })}

            </NavList>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    list-style: none;
    
  }
 
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavListItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled.a<{ active?: boolean }>`
  text-decoration: none;
  color: ${props => (props.active ? '#007bff' : '#000')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  transition: color 0.3s ease;
  &:hover {
    color: #007bff;
  }
`;