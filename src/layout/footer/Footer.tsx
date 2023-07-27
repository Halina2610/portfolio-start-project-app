import React from 'react';
import styled from "styled-components";
import {Icons} from "../../components/icon/Icons";

export const Footer = () => {
    return (
        <SlyledFooter>

            <SocialIconsList>
                <SocialItem>
                    <SocialIconsLink
                        href={"https://www.linkedin.com/in/%D0%B3%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0-%D0%BA%D0%BB%D1%8F%D1%88%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-39294b283/"}
                        target={"_blank"}>
                        <Icons iconId={"linkedin"}/>
                    </SocialIconsLink>
                </SocialItem>

                <SocialItem>
                    <SocialIconsLink href={"https://github.com/Halina2610"} target={"_blank"}>
                        <Icons iconId={"github2"}/>
                    </SocialIconsLink>

                    <SocialItem>
                        <SocialIconsLink href={"https://www.instagram.com/halina_kls/"} target={"_blank"}>
                            <Icons iconId={"instagram"}/>
                        </SocialIconsLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconsLink href={"https://t.me/halina_kls"} target={"_blank"}>
                            <Icons iconId={"telegram"}/>
                        </SocialIconsLink>
                    </SocialItem>
                </SocialItem>
            </SocialIconsList>
            <Copyright>© 2023 Halina Klyashtornaya, All Rights Reserved.</Copyright>
        </SlyledFooter>
    );
};

const SlyledFooter = styled.footer`
  background-color: #9a9292;
`

const SocialIconsList = styled.ul`

`
const SocialItem = styled.li`
  display: inline-block;

`

const SocialIconsLink = styled.a`

`
const Copyright = styled.small`

`