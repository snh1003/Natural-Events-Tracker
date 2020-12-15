import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
html { font-size: 62.5%; }
  body {
    font-family: 'Russo One', sans-serif;
    margin: 0;
  }
`;
export default GlobalStyle;
