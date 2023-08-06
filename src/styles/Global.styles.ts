import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";
import {font} from "./Common";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${font({family: "'Poppins', 'Nunito Sans', sans-serif", weight: 400, lineHeight: "1.2", color: "Theme.colors.textColor"})}
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  a {
    text-decoration: none;
    ${font({color: "Theme.colors.textColor"})}

  }

  ul {
    list-style: none;
    background-color: unset;
    border: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${Theme.colors.textColor};


  }

  section {
    padding: 100px 0;
  }

  section:nth-of-type(even) {
    background-color: ${Theme.colors.thirdBg};
  }

  h3 {
    text-align: center;
    font-size: 26px;
    font-weight: 700;

  }

  h4 {
    font-size: 18px;
    text-align: center;

  }

  p {
    font-size: 16px;
    line-height: 1.4;
  }

  &:focus-visible {
    outline: 1px solid ${Theme.colors.accent};

  }

`