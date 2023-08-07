import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const SpanAccent =styled.span`
    position: relative;
    z-index: 0;
    color: ${Theme.colors.secondaryBg};

&::before {
        content: "";
        display: inline-block;
        width: 60px;
        height: 60px;
        background-color: ${Theme.colors.accent};
        border-radius: 50%;

        position: absolute;
        bottom: 0;
        left: -10px;
        z-index: -1;
    }
    `