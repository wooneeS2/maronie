import { createGlobalStyle } from "styled-components";
import { mainWhite } from "./colorPalette";
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 auto;
    background-color: ${mainWhite};
    width: 100vw;
    max-width: 786px;
    padding-top:8vh;
    word-break:keep-all;
  }
`;

export default GlobalStyles;
