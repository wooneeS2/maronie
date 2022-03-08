import { createGlobalStyle } from "styled-components";
import { mainWhite } from "./colorPalette";
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 auto;
    background-color: ${mainWhite};
    max-width: 786px;
    word-break:keep-all;
  }
  ul {
    list-style:none;
    margin:0;
    padding:0;
  }
`;

export default GlobalStyles;
