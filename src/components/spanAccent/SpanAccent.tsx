import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const SpanAccent =styled.span`
    position: relative;
    z-index: 0;
    color: ${Theme.colors.secondaryBg};

&::before {
        content: "";
        display: inline-block;
        width: 95px;
        height: 95px;
        background-color: ${Theme.colors.accent};
        border-radius: 50%;

        position: absolute;
        bottom: 0;
        left: -30px;
        z-index: -1;
    }
    `