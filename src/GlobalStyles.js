import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: rgb(176, 200, 40);
    --primary-blue: rgb(66, 103, 178);
    --text-color: rgb(25, 25, 25);;
    --background-color:rgb(255, 255, 255);;
  }
 
body {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  background-color: var(--background-color);;
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

.container {
  max-width: 375px;
  
}

`;

export default GlobalStyle;
 