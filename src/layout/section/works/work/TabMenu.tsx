import React from "react";
import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
import { FilterType } from "../Works";

type TabMenuProps = {
    menuItems: FilterType[];
    activeFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
};

export const TabMenu: React.FC<TabMenuProps> = ({
                                                    menuItems,
                                                    activeFilter,
                                                    onFilterChange,
                                                }) => {
    return (
        <StyledMenu>
            <NavList>
                {menuItems.map((item, index) => (
                    <NavListItem
                        key={index}
                        isActive={item === activeFilter}
                        onClick={() => onFilterChange(item)}
                    >
                        {item}
                    </NavListItem>
                ))}
            </NavList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  @media ${Theme.media.mobile} {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  list-style: none;
`;

const NavListItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  margin-bottom: 30px;
  font-family: "Nunito Sans", sans-serif;
  
  color: ${(props) => (props.isActive ? Theme.colors.accent : Theme.colors.textColor)};
  text-decoration-line: ${(props) => (props.isActive ? 'underline' : 'none')};
  text-decoration-skip-ink: none; 
  text-underline-offset: 4px; 
  text-decoration-thickness: 2px;
  
  &:hover {
    color: ${Theme.colors.accent};
  }
`;