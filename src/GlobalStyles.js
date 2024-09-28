import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  background-color: #1E1E1E;
  max-width: 393px;
  font-family: 'League Spartan', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,h2,h3,h4 {
    font-family:  'Poppins', sans-serif;
}



`;
export default GlobalStyle;
