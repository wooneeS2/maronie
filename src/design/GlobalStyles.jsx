import { createGlobalStyle } from "styled-components";
import { mainWhite, mainBlack } from "./colorPalette";
const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'KOTRA_GOTHIC';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/KOTRA_GOTHIC.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "GimpoGothicBold00";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/GimpoGothicBold00.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}


  
  

button {
  color: #000000;
  font-family:KOTRA_GOTHIC;
  
}
body {
  margin: 0 auto;
  width: 100vw;
  max-width: 786px;
  background-color: ${mainWhite};
  word-break:keep-all;
  font-family: KOTRA_GOTHIC;
  }
  ul {
    list-style:none;
    margin:0;
    padding:0;
  }
  p {
      margin:0;
    }
`;

export default GlobalStyles;
