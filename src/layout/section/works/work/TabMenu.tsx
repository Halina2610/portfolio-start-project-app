import React from "react";
import styled from "styled-components";
import {Link} from "../../../../components/link/Link";
import {Theme} from "../../../../styles/Theme";

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <NavList>

                {props.menuItems.map((item,index) => {
                    return <NavListItem key={index}>
                        <Link href="">{item}</Link>
                    </NavListItem>
                })}

            </NavList>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  @media ${Theme.media.mobile} {
    display: none;
  }
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
 
`;

