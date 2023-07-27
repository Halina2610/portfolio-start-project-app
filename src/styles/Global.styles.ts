import {createGlobalStyle} from "styled-components";

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
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
    background-color: unset;
    border: none;
  }


`