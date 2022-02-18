import { createGlobalStyle } from "styled-components";
import { mainWhite } from "./colorPalette";
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 auto;
    background-color: ${mainWhite};
    width: 100vw;
    @media screen and (min-width: 786px) {
        max-width: 786px;
    }
  }
`;

export default GlobalStyles;
