import React from "react";
import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span> </span>
            </BurgerButton>`
            <MenuPopup isOpen={true}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <NavListItem key={index}>
                            <NavLink href="">{item}</NavLink>
                        </NavListItem>
                    })}
                </ul>
            </MenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${Theme.media.tablet} {
    display: block;
    max-width: 100vw;

  }
  @media ${Theme.media.mobile} {
    display: block;
    max-width: 100vw;

  }

`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -120px;
  right: 60px;
  z-index: 99999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${Theme.colors.accent};

    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: ${Theme.colors.primaryBg};

    `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${Theme.colors.accent};

      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);

      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${Theme.colors.accent};

      position: absolute;
      transform: translateY(10px);


      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }

  }
`

const MenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  max-width: 100vw;
  background-color: ${Theme.colors.primaryBg};
  opacity: 0.9;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    font-family: "Nunito Sans", sans-serif;
    font-size: 3rem;

  }
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