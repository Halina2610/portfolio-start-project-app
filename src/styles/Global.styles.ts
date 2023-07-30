import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
 *,
 *::before,
 *::after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 
  body {
    margin: 0;
    font-family: "Poppins", "Nunito Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${Theme.colors.textColor};
    line-height: 1.2;
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
    background-color: unset;
    border: none;
  }

  section:nth-of-type(even) {
    background-color: ${Theme.colors.primaryBg};
  }

`