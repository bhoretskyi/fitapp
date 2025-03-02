import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  background-color: rgb(255, 255, 255);;
  max-width: 393px;
  font-family: 'League Spartan', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 375px;
}

  

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,h2,h3 {
    font-family:  'Poppins', sans-serif;
}



`;
export default GlobalStyle;
 