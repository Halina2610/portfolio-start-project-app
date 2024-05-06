import {Icons} from "./icon/Icons";
import React from "react";
import styled from "styled-components";


export const SocialIconsList = () => {
    return (
        <IconsList>
            <SocialItem>
                <SocialIconsLink
                    href={"https://www.linkedin.com/in/halina-kls/"}
                    target={"_blank"}>
                    <Icons iconId={"linkedin"} width={"30"} height={"30"} viewBox={"0 0 50 50"}/>
                </SocialIconsLink>
            </SocialItem>

            <SocialItem>
                <SocialIconsLink href={"https://github.com/Halina2610"} target={"_blank"}>
                    <Icons iconId={"github2"} width={"30"} height={"30"} viewBox={"0 0 50 50"}/>
                </SocialIconsLink>

                <SocialItem>
                    <SocialIconsLink href={"https://www.instagram.com/halina_kls/"} target={"_blank"}>
                        <Icons iconId={"instagram"} width={"30"} height={"30"} viewBox={"0 0 50 50"}/>
                    </SocialIconsLink>
                </SocialItem>
                <SocialItem>
                    <SocialIconsLink href={"https://t.me/halina_kls"} target={"_blank"}>
                        <Icons iconId={"telegram"} width={"30"} height={"30"} viewBox={"0 0 50 50"}/>
                    </SocialIconsLink>
                </SocialItem>
            </SocialItem>
        </IconsList>
    );
};


const IconsList = styled.ul`
    margin: 60px 0;
`
const SocialItem = styled.li`
  display: inline-block;
`

const SocialIconsLink = styled.a`
`