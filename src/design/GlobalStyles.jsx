import { createGlobalStyle } from "styled-components";
import { mainWhite } from "./colorPalette";
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 auto;
    background-color: ${mainWhite};
    width: 100vw;
    max-width: 786px;
  }
  ul {
    list-style:none;
    margin:0;
    padding:0;
  }
`;

export default GlobalStyles;
